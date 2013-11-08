var isbnEl = document.getElementById('ASIN');
if (isbnEl) {
  self.port.emit('gotIsbn', isbnEl.value);
};
