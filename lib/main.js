var pageMod = require("page-mod");
var self = require("self");
var cpl = require("amz_cpl");
var data = require("self").data;

pageMod.PageMod({
    include: "http://www.amazon.com/*",
    contentScriptFile: data.url('ninja_reader.js'),
    onAttach: function () {
	var t = new cpl.book('9780140294293');
	console.log(t + "capital t!");
	console.log(t.isbn);
    }
})
console.log("CPL will be added to Amazon");
