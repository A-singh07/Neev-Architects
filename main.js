// Loader




// to open the top-nav
function openNav() {
    document.getElementById('top-nav').style.height = "calc(30vh + 60px)";
    document.getElementById('main').style.marginTop = "30vh";
    document.getElementById('close-btn').style.display = "block";
}

// to close the top-nav
function closeNav() {
    document.getElementById('top-nav').style.height = "0";
    document.getElementById('main').style.marginTop = "0";
    document.getElementById('close-btn').style.display = "none";
}



/* ----- Media Query ------ */
// for service-mobile
/*
function myMedia() {
    let y = document.getElementsByClassName('serv-mob')
    if (x.matches) {
        for (let i = 0; i < y.length; i++) {
            y[i].style.display = "none"
        }
    }
    else {
        for (let i = 0; i < y.length; i++) {
            y[i].style.display = "block"
        }
    }
}
var x = window.matchMedia("(min-width: 900px)")
myMedia()
x.addListener(myMedia)
*/

