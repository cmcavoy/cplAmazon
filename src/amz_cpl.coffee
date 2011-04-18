pageWorkers = require("page-worker")
data = require("self").data


class Book
  constructor: (@isbn) ->
    console.log("created Library object")
    this.loadNinjaData()

  gotNinjaData: (@data) ->
    console.log("got some data #{@data}")

  loadNinjaData: () ->
    # loads data for the isbn from the cpl ninja site
    qs = "Ntt=#{@isbn}&formats=0&languages=0&audiences=0&ficnonfic=0&onshelfonly=1&showref=0&availability=1"
    ninja_url = "http://chipubninja.com/branch_search.php?#{qs}"
    console.log(ninja_url)
    @ninja_data = pageWorkers.Page(
      contentScript: data.url('ninja_reader.js')
      contentScriptWhen: "ready"
      contentURL : ninja_url
      onMessage: console.log
    )

exports.book = Book