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



// Projects for desktop
function openContent(type) {

    var tabContent = document.getElementsByClassName("detail-content");
    var tabLink = document.getElementsByClassName("tablink");
    let i;

    // Hidding detail-content
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    // display the the clicked tab-content
    document.getElementById(type).style.display = 'block';

    //Hiding active class
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }
    // Seting active for current/selected tab
    event.currentTarget.className += " active"; // notice the space before 'active', it's to overwriting the existing values
}


// About for Desktop
function aboutFunc(wh_abt) {

    var abtTab = document.getElementsByClassName('abtTab');
    var abtDetail = document.getElementsByClassName('abt-detail');
    let i;

    // hiding abt-detail
    for (i = 0; i < abtDetail.length; i++) {
        abtDetail[i].style.display = "none";
    }

    //display the clicked content
    document.getElementById(wh_abt).style.display = "block";

    // Hiding abt_active class
    for (i = 0; i < abtTab.length; i++) {
        abtTab[i].className = abtTab[i].className.replace(" abtActive", "");
    }
    // Setting abtActive for current/selected tab
    event.currentTarget.className += " abtActive";
}