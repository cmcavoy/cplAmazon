var pageMod = require("page-mod");
var self = require("self");

pageMod.PageMod({
    include: "http://www.amazon.com/*",
    contentScriptFile: self.data.url('jquery-1.5.1.min.js'),
    contentScript: 'window.alert("You\'re on amazon!");'
})
console.log("CPL will be added to Amazon");
