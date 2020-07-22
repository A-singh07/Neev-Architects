// Loader




// to open the top-nav
function openNav() {
    document.getElementById('top-nav').style.height = "calc(40vh + 60px)";
    document.getElementById('main').style.marginTop = "40vh";
    document.getElementById('close-btn').style.display = "block";
}

// to close the top-nav
function closeNav() {
    document.getElementById('top-nav').style.height = "0";
    document.getElementById('main').style.marginTop = "0";
    document.getElementById('close-btn').style.display = "none";
}