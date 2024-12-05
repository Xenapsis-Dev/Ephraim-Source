let tabsactive = 1
const iframes = document.getElementsByTagName('iframe')
function closetab(e) {
    console.log("closing")
    let xnum = e.target.id.substring(1)
    document.getElementById('tabholder' + xnum).remove()
    document.getElementById('iframe' + xnum).remove()
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none'
    }
    try {  
        document.getElementById('iframe' + (xnum - 1)).style.display = 'block'
    }   catch {
        document.getElementById('iframe-1').style.display = 'block'
    }
    tabsactive -= 1
}
function switchtab(e) {
    let tabnum = e.target.id.substring(3)
    let tabholders = document.querySelectorAll(".tabholder")
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none'
    }
    for (var i = 0; i < tabholders.length; i++) {
        let i1 = i + 1
        tabholders[i].style.backgroundColor = "#1a1a1a"
    }
    document.querySelector('.tabholderr').style.backgroundColor = "#1a1a1a"
    tabholders[tabnum - 1].style.backgroundColor = "#363434"
    iframes[tabnum].style.display = 'block'
}

function tab1() {
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none'
    }
    let tabholders = document.querySelectorAll(".tabholder")
    for (var i = 0; i < tabholders.length; i++) {
        let i1 = i + 1
        tabholders[i].style.backgroundColor = "#1a1a1a"
    }
    document.querySelector('.tabholderr').style.backgroundColor = "#363434"
    document.getElementById('iframe-1').style.display = 'block'
}


function newholder() {
    let tabholders = document.querySelectorAll(".tabholder")
    for (var i = 0; i < tabholders.length; i++) {
        let i1 = i + 1
        tabholders[i].style.backgroundColor = "#1a1a1a"
    }
    let tabholder = document.createElement('div')
    tabholder.id = "tabholder" + tabsactive
    tabholder.setAttribute("class", "tabholder")
    tabholder.style.backgroundColor = "#363434"
    document.getElementById("buttons").appendChild(tabholder)
    let tab = document.createElement('button')
    tab.id = "tab" + tabsactive
    tab.setAttribute("class", "tab")
    tab.innerHTML = "New Tab " + tabsactive
    tab.onclick = switchtab;
    document.getElementById("tabholder" + tabsactive).appendChild(tab)
    let X = document.createElement("button")
    X.id = "X" + tabsactive
    X.setAttribute("class", "X")
    X.innerHTML = "X"
    X.onclick = closetab;
    document.getElementById("tabholder" + tabsactive).appendChild(X)
}

function plus() {
    document.getElementById("plus").remove()
    let newplus = document.createElement('button')
    newplus.id = "plus"
    newplus.setAttribute("class", "plus")
    newplus.innerHTML = "+"
    newplus.onclick = createtab;
    document.getElementById("buttons").appendChild(newplus)
    
}


function createtab() {
    newholder()
    plus()

    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none'
    }

    let newframe = document.createElement("iframe")
    newframe.id = "iframe" + tabsactive
    newframe.setAttribute("class", "proxyframe")
    newframe.src = "/proxy.html"
    let tab1 = document.getElementById('tabholderr')
    tab1.style.backgroundColor = "#1a1a1a"
    newframe.classList.add("rounded-xl")
    document.getElementById("iframecontainer").appendChild(newframe)
    tabsactive += 1
    console.log(tabsactive)
    let tabholders = document.querySelectorAll(".tabholder")
}

setInterval(() => {
    let tabholders = document.querySelectorAll(".tabholder")
    let Xs = document.querySelectorAll(".X")
    let tabs = document.querySelectorAll(".tab")
    let frames = document.querySelectorAll('.proxyframe')
    for (var i = 0; i < tabsactive; i++) {
        try {
            tabholders[i].id = "tabholder" + (i + 1)
        } catch {

        }
    }
    for (var i = 0; i < tabsactive; i++) {
        try {
            Xs[i].id = "X" + (i + 1)
        } catch {

        }
    }
    for (var i = 0; i < tabsactive; i++) {
        try {
            tabs[i].id = "tab" + (i + 1)
        } catch {

        }
    }
    for (var i = 0; i < tabsactive; i++) {
        try {
            frames[i].id = "iframe" + (i + 1)
        } catch {

        }
    }
    for (var i = 0; i < tabsactive; i++) {
        try {
            const iframedoc = document.getElementById('iframe' + (i + 1)).contentWindow.document
            let iframetitle = iframedoc.title
            if (iframetitle.length > 8) {
                iframetitle = iframetitle.substring(0, 10);
                iframetitle = iframetitle + "..."
            }
            tabs[i].innerHTML = iframetitle;
            let iframe1title = document.getElementById('iframe-1').contentWindow.document.title
            if (iframe1title.length > 8) {
                iframe1title = iframe1title.substring(0, 10);
                iframe1title = iframe1title + "..."
            }
            document.getElementById('nottab1').innerHTML = iframe1title
        } catch {

        }
    }
}, 100);

function back() {
    console.log(iframes);
    for (var i = 0; i < iframes.length; i++) {
        if (window.getComputedStyle(iframes[i]).display === "block") {
            iframes[i].contentWindow.history.back();
        }
    }
}

function forward() {
    console.log(iframes);
    for (var i = 0; i < iframes.length; i++) {
        if (window.getComputedStyle(iframes[i]).display === "block") {
            iframes[i].contentWindow.history.forward();
        }
    }
}

function refresh() {
    console.log(iframes);
    for (var i = 0; i < iframes.length; i++) {
        if (window.getComputedStyle(iframes[i]).display === "block") {
            iframes[i].contentWindow.location.reload();
        }
    }
}

function settings() {
    console.log("settings opened")
    for (var i = 0; i < iframes.length; i++) {
        if (window.getComputedStyle(iframes[i]).display === "block") {
            iframes[i].src = "/settings.html"
        }
    }
} 

function fullscreen() {
    for (var i = 0; i < iframes.length; i++) {
        if (window.getComputedStyle(iframes[i]).display === "block") {
            iframes[i].requestFullscreen();
        }
    }
}

function popout() {
    for (var i = 0; i < iframes.length; i++) {
        if (window.getComputedStyle(iframes[i]).display === "block") {
            window.open(iframes[i].src)
        }
    }
}

