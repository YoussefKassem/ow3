var contentFour = $('.content-4');
var contentFive = $('.content-5');
var mainImage = $('.main-image');
var wallImageThree = $('.walls-image3');
var wallImageFour = $('.walls-image-final');
var slider = $('.container1');

var info1 = $('.info-1');
var info2 = $('.info-2');
var info3 = $('.info-3');
var info4 = $('.info-4');
var info5 = $('.info-5');
var info6 = $('.info-6');
var info7 = $('.info-7');
var info8 = $('.info-8');
var trigger = $('#slide-1-trigger');
var trigger2 = $('#slide-2-trigger');
var trigger3 = $('#slide-3-trigger');
var trigger4 = $('#slide-4-trigger');
var trigger5 = $('#slide-5-trigger');
var trigger6 = $('#slide-6-trigger');
var trigger7 = $('#slide-7-trigger');
var trigger8 = $('#slide-8-trigger');



window.onload = function(){

    wallImageFour.onmouseover = function(){
        contentFive.style.color = "white";
        mainImage.style.filter = "grayscale(100%)" ;
        contentFive.classList.remove("toggle2");
        contentFive.classList.toggle("toggle");

        slider.style.opacity = "1";
        info1.style.opacity = "1";
        
        

    }

    wallImageFour.onmouseout = function(){
        mainImage.style.filter = "grayscale(0%)" ;
        contentFive.classList.toggle("toggle2")
        contentFive.classList.remove("toggle")

    }

    trigger.onclick = function(){
        info1.style.opacity = "1";
        info2.style.opacity = "0";
        info3.style.opacity = "0";
        info4.style.opacity = "0";
        info5.style.opacity = "0";
        info6.style.opacity = "0";
        info7.style.opacity = "0";
        info8.style.opacity = "0";
    }

    trigger2.onclick = function(){
        info1.style.opacity = "0";
        info2.style.opacity = "1";
        info3.style.opacity = "0";
        info4.style.opacity = "0";
        info5.style.opacity = "0";
        info6.style.opacity = "0";
        info7.style.opacity = "0";
        info8.style.opacity = "0";
    }

    trigger3.onclick = function(){
        info1.style.opacity = "0";
        info2.style.opacity = "0";
        info3.style.opacity = "1";
        info4.style.opacity = "0";
        info5.style.opacity = "0";
        info6.style.opacity = "0";
        info7.style.opacity = "0";
        info8.style.opacity = "0";
    }

    trigger4.onclick = function(){
        info1.style.opacity = "0";
        info2.style.opacity = "0";
        info3.style.opacity = "0";
        info4.style.opacity = "1";
        info5.style.opacity = "0";
        info6.style.opacity = "0";
        info7.style.opacity = "0";
        info8.style.opacity = "0";
    }

    trigger5.onclick = function(){
        info1.style.opacity = "0";
        info2.style.opacity = "0";
        info3.style.opacity = "0";
        info4.style.opacity = "0";
        info5.style.opacity = "1";
        info6.style.opacity = "0";
        info7.style.opacity = "0";
        info8.style.opacity = "0";
    }

    trigger6.onclick = function(){
        info1.style.opacity = "0";
        info2.style.opacity = "0";
        info3.style.opacity = "0";
        info4.style.opacity = "0";
        info5.style.opacity = "0";
        info6.style.opacity = "1";
        info7.style.opacity = "0";
        info8.style.opacity = "0";
    }

    trigger7.onclick = function(){
        info1.style.opacity = "0";
        info2.style.opacity = "0";
        info3.style.opacity = "0";
        info4.style.opacity = "0";
        info5.style.opacity = "0";
        info6.style.opacity = "0";
        info7.style.opacity = "1";
        info8.style.opacity = "0";
    }

    trigger8.onclick = function(){
        info1.style.opacity = "0";
        info2.style.opacity = "0";
        info3.style.opacity = "0";
        info4.style.opacity = "0";
        info5.style.opacity = "0";
        info6.style.opacity = "0";
        info7.style.opacity = "0";
        info8.style.opacity = "1";
    }
    
}




function $ (el) {
    return document.querySelector(el);
  }

  function $$ (els) {
    return document.querySelectorAll(els);
  }
  