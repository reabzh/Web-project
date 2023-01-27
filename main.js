//swipe pictures on home page
function changePicture() {
    var i = 0;
    var images = [];
    var slideTime = 1000; // 1 seconds

    images[0] = 'images/BICUBIK_1221.jpg';
    images[1] = 'images/BICUBIK_1183.jpg';
    images[2] = 'images/BICUBIK_1121.jpg';

    document.style.body.backgroundImage = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changePicture()", slideTime);
}

const swiper = new Swiper('.swiper', {

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

window.onload = changePicture;

//-------------------------------------------

//method for navbar when scroll down the background appers

window.addEventListener('scroll', change, false);
function change() {

    var nav = document.querySelector('header');

    if (window.scrollY >= 10) {
        nav.classList.add('navscroll');
    }
    else {
        nav.classList.remove('navscroll');
    }

}

window.addEventListener("load", start, false);
