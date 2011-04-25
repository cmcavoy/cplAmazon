console.log("in the ninja")
link_to_cpl = document.querySelectorAll('a.whiteButton')
if link_to_cpl.length > 0
    postMessage(link_to_cpl[1])
console.log("out of the ninja")