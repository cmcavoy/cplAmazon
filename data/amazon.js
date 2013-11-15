function getIsbnCanonical() {
  // get all the links, find canonical
  var links = document.getElementsByTagName('link');
  for (var i=0; i<links.length; i++) {
    if (links[i].rel == 'canonical') {
      var isbnMatch = links[i].href.match(/dp\/(.*)$/);
      if (isbnMatch && isbnMatch.length > 1) {
        return isbnMatch[1];
      };
    }
  }
  return false;
};

var isbn = getIsbnCanonical();
if (isbn) {
  self.port.emit('gotIsbn', isbn);
};

self.port.on('gotLinkToCpl', function(cplLink) {
  var libLink = document.createElement('a');
  libLink.href = cplLink;
  libLink.innerHTML = "CPL Reserve";
  var optBox = document.getElementById('tmmSwatches') || document.getElementsByClassName('twisterMediaMatrix')[0];
  optBox.appendChild(libLink);
});
