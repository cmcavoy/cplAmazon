var pageMod = require("sdk/page-mod");
var Request = require("sdk/request").Request;
var self = require("self");
var data = self.data;

pageMod.PageMod({
    include: "http://www.amazon.com/*",
    onAttach: function (worker) {
      console.log("do i have access to " + document);
      console.log("do i have access to " + document.);
      worker.port.on('gotIsbn', function(isbn) {
        console.log("Got an ISBN " + isbn);
        // TODO convert to
        // https://addons.mozilla.org/en-US/developers/docs/sdk/latest/modules/sdk/querystring.html
        var qs = "Ntt="+ isbn +
              "&formats=0" +
              "&languages=0" +
              "&audiences=0" +
              "&ficnonfic=0" +
              "&onshelfonly=1" +
              "&showref=0" +
              "&availability=1";
        var ninjaUrl = "http://chipubninja.com/branch_search.php?" + qs;

        console.log("calling " + ninjaUrl);
        var ninja = Request({
          url: ninjaUrl,
          onComplete: function(response) {
            console.log("got data from ninja");
            console.log("data + " + response.text);
          }
        });
        ninja.get();
      });

      worker.port.on('gotLinkToCpl', function(link) {
        console.log("got a cpl link " + link);
      });

    },
    contentScriptFile: data.url('getAmazonIsbn.js')
});
console.log("CPL will be added to Amazon");
