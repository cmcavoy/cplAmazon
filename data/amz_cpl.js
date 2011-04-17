(function() {
  var Book, pageWorkers;
  pageWorkers = require("page-worker");
  Book = (function() {
    function Book(isbn) {
      this.isbn = isbn;
      console.log("created Library object");
      this.loadNinjaData();
    }
    Book.prototype.gotNinjaData = function(data) {
      this.data = data;
      return console.log("got some data " + this.data);
    };
    Book.prototype.loadNinjaData = function() {
      var ninja_url, qs;
      qs = "Ntt=" + this.isbn + "&formats=0&languages=0&audiences=0&ficnonfic=0&onshelfonly=1&showref=0&availability=1";
      ninja_url = "http://chipubninja.com/branch_search.php?" + qs;
      return this.ninja_data = pageWorkers.Page({
        contentURL: ninja_url,
        onMessage: this.gotNinjaData
      });
    };
    return Book;
  })();
}).call(this);
