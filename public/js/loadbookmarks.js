var bookmark = "bookmark"
var count = 0;
const interval = setInterval(() => {
    if (localStorage.getItem(bookmark + count) !== null) {
        let html = localStorage.getItem(bookmark + count)
        document.querySelector(".geforcenow").insertAdjacentHTML("afterend", html);
        count++
        console.log(count)
    } else {
        console.log('done finding bookmarks')
        clearInterval(interval);
    }
}, 250);
