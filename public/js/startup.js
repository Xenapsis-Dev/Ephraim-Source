


document.addEventListener("DOMContentLoaded", function() {
    registerSW();
});


let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var erudaon = false;
function erudaa() {
    if (erudaon === false) {
        const erudaonscript = document.createElement('script');
        erudaonscript.src = "//cdn.jsdelivr.net/npm/eruda"
        erudaonscript.onload = function() {
            eruda.init();
            eruda.show();
        }
        document.getElementsByTagName('head')[0].appendChild(erudaonscript)
        
        erudaon = true
    } else {
        eruda.destroy();
        erudaon = false
    }
}