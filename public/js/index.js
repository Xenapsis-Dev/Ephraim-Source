const form = document.getElementById("uv-form")
const address = document.getElementById("uv-address")
var searchEngine = document.getElementById("uv-search-engine");
var searchEnginee = document.getElementById("uv-search-engine");

const baseurl = window.location.origin;

form.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    try {
        await registerSW();
    } catch (err) {
        console.log(err)
    }
    let iframes = document.getElementsByTagName('iframe')
    for (var i = 0; i < iframes.length; i++) {
        if (window.getComputedStyle(iframes[i]).display === "block") {
            var url = address.value.trim();
            if (localStorage.getItem("engine")) {
                var searchEnginee = localStorage.getItem("engine")

            } else {
                searchEnginee = searchEngine.value
            }
            if(reurl(url) != true) {
                url = searchEnginee + address.value.trim()
            } else {
                url = search(address.value.trim())
            }
            iframes[i].src = __uv$config.prefix + __uv$config.encodeUrl(url);
            
        }
    }
  });

form.addEventListener("submit", postinfo)

async function postinfo(e) {
    e.preventDefault()
    if (localStorage.getItem('tracking') != "false") {
        let url = address.value
        
        const res = await fetch(baseurl, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    parcel: url
                })
        })
        
    }
}



  
  
  function reurl(urll) {
    if (urll.startsWith("https://") || urll.startsWith("http://") || urll.includes(".")) return true;
    return false;
  }