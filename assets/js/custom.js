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
