function wipetabs() {
    let buttons = document.getElementById('buttons').children
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].id != "tabholderr" || buttons[i].id != "plus") {
            buttons[i].remove()
        }
    }
}

function loadweb(site) {
    let iframes = document.getElementsByTagName("iframe")
    for (var i = 0; i < iframes.length; i++) {
        if (window.getComputedStyle(iframes[i]).display === "block") {
            let encodedurl = "/uv/service/" + __uv$config.encodeUrl(site)
            iframes[i].src = encodedurl
        }
    }
}