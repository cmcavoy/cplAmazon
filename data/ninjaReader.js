console.log("I am the ninja");
var linkToCpl = document.querySelectorAll('a.whiteButton');
console.log("fyi " + linkToCpl.length);
console.log("doc url " + document.URL);
console.log(document.body.innerHTML);
if (linkToCpl.length >= 2) {
  console.log("got here my friend, teh linktocpl works");
  self.port.emit('gotLinkToCpl', linkToCpl[1].href);
};
