function custombookmark() {
    var url = window.prompt('What link would you like to bookmark?')
    var title = window.prompt('What would you like the title of the bookmark to be? (Required)')
    var img = window.prompt('What image would you like to use for the bookmark?')
    var uvstring = "/uv/service/"
    var encodedurl = __uv$config.encodeUrl(url)
    var finalurl = uvstring + encodedurl
    console.log(finalurl)
    var bookmark = "bookmark";
    let counter = 0;
    var block = `<div><button value="${url}" id="${title}" onclick="loadpage(${title})"><div class="autobookdiv"><img class="autobookimg" src="${img}" ></div></button></div>`
    while (localStorage.getItem(bookmark + counter) !== null) {
        counter++;
    }
    bookmark = bookmark + counter
    localStorage.setItem(bookmark, block);
    document.querySelector(".geforcenow").insertAdjacentHTML("afterend", block);
};