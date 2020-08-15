// Loader




// to open the top-nav
function openNav() {
    document.getElementById('top-nav').style.height = "calc(50vh)";
    document.getElementById('close-btn').style.display = "block";
    // document.getElementById('main').style.marginTop = "50vh";
}

// to close the top-nav
function closeNav() {
    document.getElementById('top-nav').style.height = "0";
    document.getElementById('close-btn').style.display = "none";
    // document.getElementById('main').style.marginTop = "0";
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



// Projects Section for desktop
function projectTab(type) {

    let tabContent = document.getElementsByClassName("content"),
        tabLink = document.getElementsByClassName("tablink");
    let i;

    // Hidding content
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    // display the the clicked tab-content(heading)
    document.getElementById(type).style.display = 'block';

    //Hiding active class
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }
    // Seting active for current/selected tab
    event.currentTarget.className += " active"; // notice the space before 'active', it's to overwriting the existing values
}
function assignID(name) {
    document.getElementsByClassName("slider-container")[0].id = name;
}

function bgimg(name) {
    let slide = document.getElementsByClassName("slide");
    let x;
}

function activeSlider(prjType, name) {

    let prjTab = document.getElementsByClassName(prjType);
    let i;
    //Hiding prjActive class
    for (i = 0; i < prjTab.length; i++) {
        prjTab[i].className = prjTab[i].className.replace(" prjActive", "");
    }
    //setting prjActive class
    event.currentTarget.className += " prjActive";

    assignID(name);
}

function slider() {

    let slideImg = document.getElementsByClassName("slide"),
        arrowLeft = document.querySelector("#arrow-left"),
        arrowRight = document.querySelector("#arrow-right");
    let current = 0;

    //clear all images
    function clear() {
        for (let i = 0; i < slideImg.length; i++) {
            slideImg[i].style.display = "none";
        }
    }
    //initial Slide
    function slideshow() {
        clear();
        slideImg[0].style.display = "block";
    }

    //show next
    function slideRight() {
        clear();
        slideImg[current + 1].style.display = "block";
        current++;
    }
    //Show Prev
    function slideLeft() {
        clear();
        slideImg[current - 1].style.display = "block";
        current--;
    }

    //Right arrow click
    arrowRight.addEventListener("click", function () {
        if (current === slideImg.length - 1) {
            current = -1;
        }
        slideRight();
    });
    //left arrow click
    arrowLeft.addEventListener("click", function () {
        if (current === 0) {
            current = slideImg.length;
        }
        slideLeft();
    });

    slideshow();
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