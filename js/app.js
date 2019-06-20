var usa = document.getElementById('Layer_usa');
var mexico = document.getElementById('Layer_mexico');
var mexicoBlack = document.getElementById('mexico-black');
var usaBlack = document.getElementById('usa-black');

var usaIcon = document.getElementById('land');
var mexicoIcon = document.getElementById('land2');

var usaFlag = $('.flag-icon-us');
var mexicoFlag = $('.flag-icon-mx');

var wallImage = $('.walls-image');
var mainImage = $('.main-image');
var wallImageTwo = $('.walls-image2');
var contentOne = $('.content');
var contentTwo = $('.content-2');


window.onload = function(){

    mexico.onmouseover= function () {
        usaBlack.style.opacity = "1";
        usaBlack.style.zIndex = "3";
        mexicoIcon.style.opacity= "1";
        mexicoFlag.style.opacity= "1";
      }
    
    mexico.onmouseout= function () {
        usaBlack.style.opacity = "0";
        mexicoIcon.style.opacity= "0";
        mexicoFlag.style.opacity= "0";
      }
    
    
    usa.onmouseover= function () {
        mexicoBlack.style.opacity = "1";
        mexicoBlack.style.zIndex = "3";
        usaIcon.style.opacity= "1";
        usaFlag.style.opacity= "1";
      }
    
    usa.onmouseout= function () {
        mexicoBlack.style.opacity = "0";
        usaIcon.style.opacity= "0";
        usaFlag.style.opacity= "0";
      }

    
    
}

wallImage.onmouseover = function(){
  contentTwo.style.animationPlayState ="running"
  contentTwo.style.color = "white";
  mainImage.style.filter = "grayscale(100%)" ;
}

wallImage.onmouseout = function(){
  contentTwo.style.animationDirection ="reverse"
  contentTwo.style.color = "black";
  mainImage.style.filter = "grayscale(0%)" ;
}








function $ (el) {
  return document.querySelector(el);
}
function $$ (els) {
  return document.querySelectorAll(els);
}
