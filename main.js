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
    document.getElementById('1').innerHTML = "";

    var min = document.getElementById('minprice');
    var max = document.getElementById('maxprice');
    var type = document.getElementById('type');

    var option1 = min.options[min.selectedIndex].value;
    var option2 = max.options[max.selectedIndex].value;
    var option3 = type.options[type.selectedIndex].value;

    var house1=document.getElementById("hidden1");
    var house2=document.getElementById("hidden2");
    var house3=document.getElementById("hidden3");
    var house4=document.getElementById("hidden4");
    var house5=document.getElementById("hidden5");
    var house6=document.getElementById("hidden6");
    var house7=document.getElementById("hidden7");
    var house8=document.getElementById("hidden8");
    
    
    if (option3 == "duplex") {

        if (option1 == "200,000SAR") {
            house1.style.display = "none";
            house2.style.display = "none";
            house3.style.display = "none";
            house4.style.display = "none";
            house5.style.display = "none";
            house6.style.display = "block";
            house7.style.display = "none";
            house8.style.display = "none";    

        }

        else {
            house1.style.display = "none";
            house2.style.display = "none";
            house3.style.display = "none";
            house4.style.display = "none";
            house5.style.display = "none";
            house6.style.display = "none";
            house7.style.display = "none";
            house8.style.display = "none";     

            document.getElementById('1').innerHTML = "<p style='text-align: center; font-size:18px;'>Sorry we don't have any property matches you choices</p>";

        } 

    } 
    //-------------------------------------------

    if (option3 == "villa") {

        if (option1 == "200,000SAR" || option1 == "300,000SAR" && option2 == "2,000,000SAR") {

            house1.style.display = "none";
            house2.style.display = "none";
            house3.style.display = "none";
            house4.style.display = "none";
            house5.style.display = "none";
            house6.style.display = "none";
            house7.style.display = "block";
            house8.style.display = "block";   

        }

        else if (option1 == "200,000SAR" && option2 == "4,000,000SAR") {
            
            house1.style.display = "block";
            house2.style.display = "none";
            house3.style.display = "none";
            house4.style.display = "block";
            house5.style.display = "block";
            house6.style.display = "none";
            house7.style.display = "block";
            house8.style.display = "block";   
            
        }


        else if (option1 == "300,000SAR" && option2 == "4,000,000SAR") {
            
            house1.style.display = "block";
            house2.style.display = "none";
            house3.style.display = "none";
            house4.style.display = "block";
            house5.style.display = "block";
            house6.style.display = "none";
            house7.style.display = "block";
            house8.style.display = "none";  
        

        }

        else if (option1 == "400,000SAR" || option1 == "500,000SAR" && option2 == "4,000,000SAR") {
         
            house1.style.display = "block";
            house2.style.display = "none";
            house3.style.display = "none";
            house4.style.display = "block";
            house5.style.display = "block";
            house6.style.display = "none";
            house7.style.display = "none";
            house8.style.display = "none";  

        }

        else{
            house1.style.display = "none";
            house2.style.display = "none";
            house3.style.display = "none";
            house4.style.display = "none";
            house5.style.display = "none";
            house6.style.display = "none";
            house7.style.display = "none";
            house8.style.display = "none";  

            document.getElementById('1').innerHTML = "<p style='text-align: center; font-size:18px;'>Sorry we don't have any property matches you choices</p>";

        }
    }

    //-------------------------------------------

    if (option3 == "Mansion") {

        if ( option2 == "2,000,000SAR" || option2 == "4,000,000SAR") {
            house1.style.display = "none";
            house2.style.display = "none";
            house3.style.display = "none";
            house4.style.display = "none";
            house5.style.display = "none";
            house6.style.display = "none";
            house7.style.display = "none";
            house8.style.display = "none";  

            document.getElementById('1').innerHTML = "<p style='text-align: center; font-size:18px;'>Sorry we don't have any property matches you choices</p>";
        }

        else if ( option2 == "8,000,000SAR" ) {

            house1.style.display = "none";
            house2.style.display = "none";
            house3.style.display = "block";
            house4.style.display = "none";
            house5.style.display = "none";
            house6.style.display = "none";
            house7.style.display = "none";
            house8.style.display = "none";  
        }

        else if (option2 == "30,000,000SAR") {

            house1.style.display = "none";
            house2.style.display = "block";
            house3.style.display = "block";
            house4.style.display = "none";
            house5.style.display = "none";
            house6.style.display = "none";
            house7.style.display = "none";
            house8.style.display = "none"; 

        }
        else{
            document.getElementById('1').innerHTML = "<p style='text-align: center; font-size:18px;'>Sorry we don't have any property matches you choices</p>";

        }

    }

}
window.addEventListener("load", start, false);
