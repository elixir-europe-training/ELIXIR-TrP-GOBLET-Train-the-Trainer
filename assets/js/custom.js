document.addEventListener('DOMContentLoaded', function () {
  var blocks = document.querySelectorAll('code.language-mermaid, code[data-lang="mermaid"]');
  if (!blocks.length) return;

  blocks.forEach(function (code) {
    var pre = document.createElement('pre');
    pre.className = 'mermaid';
    pre.textContent = code.textContent;
    var host = code.closest('.highlighter-rouge') || code.closest('figure') || code.parentElement;
    host.replaceWith(pre);
  });

  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
  script.onload = function () {
    mermaid.initialize({ startOnLoad: false });
    mermaid.run();
  };
  document.head.appendChild(script);
});

document.addEventListener('DOMContentLoaded', function () {
  if (typeof bootstrap === 'undefined') return;
  if (/\/glossary(\.html)?\/?$/.test(window.location.pathname)) return;

  var contentRoot = document.getElementById('content') || document.getElementById('main') || document.body;

  fetch('/glossary')
    .then(function (response) { return response.text(); })
    .then(function (html) {
      var glossaryDoc = new DOMParser().parseFromString(html, 'text/html');
      var terms = buildGlossaryTerms(glossaryDoc);
      if (!terms.length) return;

      enhanceExistingGlossaryLinks(terms);
      autoLinkGlossaryTerms(contentRoot, terms);
    })
    .catch(function () {
      // Fail silently: pages work fine without glossary popovers.
    });

  // Reads the glossary page's own markup (anchor -> heading -> definition paragraph)
  // to build a list of {hash, title, content, pattern} terms, without duplicating
  // any glossary text into a second, separately-maintained data source.
  function buildGlossaryTerms(glossaryDoc) {
    var terms = [];

    Array.prototype.forEach.call(glossaryDoc.querySelectorAll('a[name^="glossary-"]'), function (anchor) {
      var hash = anchor.getAttribute('name');
      var heading = anchor.parentElement && anchor.parentElement.nextElementSibling;
      var definition = heading && heading.nextElementSibling;
      if (!heading || !definition) return;

      var headingText = heading.textContent.trim();
      var content = definition.textContent.trim();
      var title = headingText.replace(/\s*\([^)]+\)\s*$/, '');

      // "Learning Outcomes (LOs)" -> match both "Learning Outcomes" and "LOs".
      // Only treat the parenthetical as an alias when it's acronym-shaped (all
      // caps) - a descriptive parenthetical like "Parking lot (technique)" is
      // not an alias for "Parking lot" and must not become a generic match.
      var aliasMatch = headingText.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
      var aliases = aliasMatch
        ? (/^[A-Z]+s?$/.test(aliasMatch[2]) ? [aliasMatch[1].trim(), aliasMatch[2].trim()] : [aliasMatch[1].trim()])
        : [headingText];

      aliases.forEach(function (alias) {
        // Strip one trailing "s" and make it optional again, so a plural heading
        // (or abbreviation) matches both its singular and plural form in prose.
        var base = alias.replace(/s$/i, '');
        terms.push({
          hash: hash,
          title: title,
          content: content,
          pattern: new RegExp('\\b(' + escapeRegExp(base) + 's?)\\b', 'i')
        });
      });
    });

    // Longest pattern first, so multi-word terms are tried before shorter ones
    // that might otherwise match a substring of them first.
    terms.sort(function (a, b) { return b.pattern.source.length - a.pattern.source.length; });
    return terms;
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function attachPopover(link, term) {
    link.setAttribute('data-bs-toggle', 'popover');
    link.setAttribute('data-bs-trigger', 'hover focus');
    link.setAttribute('data-bs-placement', 'top');
    link.setAttribute('title', term.title);
    link.setAttribute('data-bs-content', term.content);
    link.classList.add('glossary-popover-enabled');
    new bootstrap.Popover(link);
  }

  // Any glossary link already present in the markdown source still gets a popover.
  function enhanceExistingGlossaryLinks(terms) {
    Array.prototype.forEach.call(
      document.querySelectorAll('a[href*="/glossary#glossary-"]'),
      function (link) {
        var hash = link.getAttribute('href').split('#')[1];
        var term = terms.filter(function (t) { return t.hash === hash; })[0];
        if (!term) return;
        attachPopover(link, term);
      }
    );
  }

  // Wraps every occurrence of every glossary term found in the page's own
  // text, skipping links, code, headings, and script/style content.
  function autoLinkGlossaryTerms(root, terms) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var el = node.parentElement;
        if (!el || el.closest('a, code, pre, script, style, h1, h2, h3, h4, h5, h6')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    var textNodes = [];
    var node;
    while ((node = walker.nextNode())) textNodes.push(node);

    textNodes.forEach(function (textNode) {
      var frag = linkTermsInTextNode(textNode, terms);
      if (frag) textNode.parentNode.replaceChild(frag, textNode);
    });
  }

  function linkTermsInTextNode(textNode, terms) {
    var text = textNode.nodeValue;
    var cursor = 0;
    var frag = null;

    while (cursor < text.length) {
      var earliest = null;

      for (var i = 0; i < terms.length; i++) {
        var term = terms[i];
        var match = term.pattern.exec(text.slice(cursor));
        if (match) {
          var index = cursor + match.index;
          if (!earliest || index < earliest.index) {
            earliest = { index: index, text: match[0], term: term };
          }
        }
      }

      if (!earliest) break;

      frag = frag || document.createDocumentFragment();
      frag.appendChild(document.createTextNode(text.slice(cursor, earliest.index)));

      var link = document.createElement('a');
      link.href = '/glossary#' + earliest.term.hash;
      link.textContent = earliest.text;
      attachPopover(link, earliest.term);
      frag.appendChild(link);

      cursor = earliest.index + earliest.text.length;
    }

    if (!frag) return null;
    frag.appendChild(document.createTextNode(text.slice(cursor)));
    return frag;
  }
});
