

var isbnEl = document.getElementById('ASIN');
if (isbnEl) {
  self.port.emit('gotIsbn', isbnEl.value);
};

self.port.on('gotLinkToCpl', function(cplLink) {
  var libLink = document.createElement('a');
  libLink.href = cplLink;
  libLink.innerHTML = "CPL Reserve";
  var optBox = document.getElementById('tmmSwatches');
  optBox.appendChild(libLink);
});
