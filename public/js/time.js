

setInterval(() => {
    let d = new Date();
    let time = document.getElementById("time");
    time.innerHTML = d.toLocaleTimeString();
}, 1000);