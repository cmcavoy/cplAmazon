var pageMod = require("page-mod");
var self = require("self");
var cpl = require("amz_cpl");

pageMod.PageMod({
    include: "http://www.amazon.com/*",
    onAttach: function () {
	var t = new cpl.book('0791058085');
	console.log(t.isbn);
    }
})
console.log("CPL will be added to Amazon");
