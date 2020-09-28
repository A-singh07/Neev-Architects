//Loader

function loaderTime() {
    setTimeout(showpage, 500);
}
function showpage() {
    document.getElementById('loader').style.display = "none";
    document.getElementById('mother-container').style.display = "block";
}


// SplitScreen for Desktop
document.addEventListener('DOMContentLoaded', function () {
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if (wrapper.className.indexOf('skewed') != -1) {
        skew = 1000;
    }

    wrapper.addEventListener('mousemove', function (e) {
        delta = (e.clientX - window.innerWidth / 2) * 0.5;

        handle.style.left = e.clientX + delta + 'px';

        topLayer.style.width = e.clientX + skew + delta + 'px';
    });
});




// to open the top-nav
function openNav() {
    document.getElementById('top-nav').style.height = "43vh";
    document.getElementById('close-btn').style.display = "block";
    // document.getElementById('mother-container').style.marginTop = "50vh";
}

// to close the top-nav
function closeNav() {
    document.getElementById('top-nav').style.height = "0";
    document.getElementById('close-btn').style.display = "none";
    // document.getElementById('mother-container').style.marginTop = "0";
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
var x = window.matchMedia("(min-width:1024px)")
services_media()
x.addListener(services_media)


// Projects Section for desktop


//Assign the ID for the slide-container
function assignID(name) {
    document.getElementsByClassName("slider-container")[0].id = name;
}
//Assigning bg-img to the slide elements
function bgimg(name) {
    let slide = document.getElementsByClassName("slide");

    slide[0].id = name + '-1';
    slide[1].id = name + '-2';
    slide[2].id = name + '-3';
}

function projectTab(type, prjType, name) {

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

    assignID(name);
    bgimg(name);

    // For prjActive class to the subTabs
    let prjTab = document.getElementsByClassName(prjType);
    //Hiding prjActive class
    for (i = 0; i < prjTab.length; i++) {
        prjTab[i].className = prjTab[i].className.replace(" prjActive", "");
    }
    prjTab[0].className += " prjActive";

    slider();
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
    bgimg(name);
    slider();
}

// function for slider, starts on load of the page
function slider() {

    let slideImg = document.getElementsByClassName("slide"),
        arrowLeft = document.querySelector("#arrow-left"),
        arrowRight = document.querySelector("#arrow-right");
    let current = 0;


    //clear all images
    function clear() {
        let slideImg = document.getElementsByClassName("slide");
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