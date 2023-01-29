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

//-------------------------------------------

 /* minimum prices:          
    200,000SAR
    300,000SAR
    400,000SAR
    500,000SAR

    maximum prices:
    2,000,000SAR
    4,000,000SAR
    8,000,000SAR
    30,000,000SAR
   
    type:
    duplex
    villa
    Mansion
    */

function show() {
    var min = document.getElementById('minprice');
    var max = document.getElementById('maxprice');
    var type = document.getElementById('type');

    var option1 = min.options[min.selectedIndex].value;
    var option2 = max.options[max.selectedIndex].value;
    var option3 = type.options[type.selectedIndex].value;

   
    if (option3 == "duplex") {

        if (option1 == "200,000SAR" && option2 == "2,000,000SAR" || option2 == "4,000,000SAR"
            || option2 == "8,000,000SAR" || option2 == "30,000,000SAR") {
            //مافي الا بيت واحد دوبلكس فمهما اختار الماكس اي قيمة والسعر الاقل ثابت 200,000 رح يطلع هالبيت فقط
            var x = document.getElementById("hidden6")
            x.style.display = "block";
            document.getElementById('1').innerHTML = x;
        }

        else if (option1 == "300,000SAR" && option2 == "2,000,000SAR" || option2 == "4,000,000SAR"
            || option2 == "8,000,000SAR" || option2 == "30,000,000SAR") {
            document.getElementById('1').innerHTML = "Sorry we don't have any property matches you choices";

        }
        else {
            document.getElementById('1').innerHTML = "Sorry we don't have any property matches you choices";

        }

    }
    //-------------------------------------------

    if (option3 == "villa") {

        if (option1 == "200,000SAR" || option1 == "300,000SAR" && option2 == "2,000,000SAR") {

            var x = document.getElementById("hidden7");
            var y = document.getElementById("hidden8")
            x.style.display = "block";
            y.style.display = "block";

            document.getElementById('1').innerHTML = x;
            document.getElementById('1').innerHTML = y;

        }

        else if (option1 == "200,000SAR" && option2 == "4,000,000SAR") {
            var x = document.getElementById("hidden1");
            var y = document.getElementById("hidden4")
            var z = document.getElementById("hidden5");
            var t = document.getElementById("hidden7");
            var v = document.getElementById("hidden8");

            x.style.display = "block";
            y.style.display = "block";
            z.style.display = "block";
            t.style.display = "block";
            v.style.display = "block";

            document.getElementById('1').innerHTML = x;
            document.getElementById('1').innerHTML = y;
            document.getElementById('1').innerHTML = z;
            document.getElementById('1').innerHTML = t;
            document.getElementById('1').innerHTML = v;
        }


        else if (option1 == "300,000SAR" && option2 == "4,000,000SAR") {
            var x = document.getElementById("hidden1");
            var y = document.getElementById("hidden4")
            var z = document.getElementById("hidden5");
            var t = document.getElementById("hidden7");

            x.style.display = "block";
            y.style.display = "block";
            z.style.display = "block";
            t.style.display = "block";

            document.getElementById('1').innerHTML = x;
            document.getElementById('1').innerHTML = y;
            document.getElementById('1').innerHTML = z;
            document.getElementById('1').innerHTML = t;
        }

        else if (option1 == "400,000SAR" || option1 == "500,000SAR" && option2 == "4,000,000SAR") {
            var x = document.getElementById("hidden1");
            var y = document.getElementById("hidden4")
            var z = document.getElementById("hidden5");

            x.style.display = "block";
            y.style.display = "block";
            z.style.display = "block";

            document.getElementById('1').innerHTML = x;
            document.getElementById('1').innerHTML = y;
            document.getElementById('1').innerHTML = z;
        }

        //مايشتغل هالحاله مدري ليه
        else if (option2 == "8,000,000SAR" || option2 == " 30,000,000SAR") {

            document.getElementById('1').innerHTML = "Sorry we don't have any property matches you choices";
        }
        else{
            document.getElementById('1').innerHTML = "Sorry we don't have any property matches you choices";

        }
    }

    //-------------------------------------------

    if (option3 == "Mansion") {

        if ( option2 == "2,000,000SAR" || option2 == "4,000,000SAR") {

            document.getElementById('1').innerHTML = "Sorry we don't have any property matches you choices";
        }

        else if ( option2 == "8,000,000SAR" ) {

            var x = document.getElementById("hidden3");
            x.style.display = "block";

            document.getElementById('1').innerHTML = x;
        }

        else if (option2 == "30,000,000SAR") {

            var x = document.getElementById("hidden2");
            var y = document.getElementById("hidden3");
            x.style.display = "block";
            y.style.display = "block";

            document.getElementById('1').innerHTML = x;
            document.getElementById('1').innerHTML = y;
        }
        else{
            document.getElementById('1').innerHTML = "Sorry we don't have any property matches you choices";

        }

    }

}
window.addEventListener("load", start, false);
