// Loader




// to open the top-nav
function openNav() {
    document.getElementById('top-nav').style.height = "calc(50vh)";
    document.getElementById('close-btn').style.display = "block";
}

// to close the top-nav
function closeNav() {
    document.getElementById('top-nav').style.height = "0";
    document.getElementById('close-btn').style.display = "none";
}

// For Services
function services_media() {
    var img = document.getElementsByClassName('serv-img');

    if (x.matches) {
        document.getElementById("ser-container-desk").classList.add("ser-container-desk");

        for (let i = 0; i < img.length; i++) {
            img[i].style.display = "block";
        }
    }
    else {
        document.getElementById("ser-container-desk").classList.remove("ser-container-desk");

        for (let i = 0; i < img.length; i++) {
            img[i].style.display = "none";
        }
    }
}
var x = window.matchMedia("(min-width:900px)")
services_media()
x.addListener(services_media)


// About for Desktop

for (let i = 0; i < wh.length; i++) {
    document.getElementsByClassName('wh')[i].addEventListener("click", abtDetail);
}

function abtDetail() {
    document.getElementById('abt-detail-container').style.display = "block";

}