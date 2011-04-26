console.log("in the ninja")
link_to_cpl = document.querySelectorAll('a.whiteButton')
postMessage("test message from ninja")
if link_to_cpl.length > 0
    postMessage(link_to_cpl[1])
