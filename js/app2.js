var wallImage = $('.walls-image');
var mainImage = $('.main-image');
var wallImageTwo = $('.walls-image2');
var wallImageThree = $('.walls-image3');
var contentOne = $('.content');
var contentThree = $('.content-3');
var contentTwo = $('.content-2');
var contentFour = $('.content-4');
var contentFive = $('.content-5');



window.onload = function(){

    wallImage.onmouseover = function(){
        contentThree.style.color = "white";
        contentThree.classList.remove("toggle2");
        contentThree.classList.toggle("toggle")
        mainImage.style.filter = "grayscale(100%)" ;
      }
      
      wallImage.onmouseout = function(){
        contentThree.classList.toggle("toggle2")
        contentThree.classList.remove("toggle");
        mainImage.style.filter = "grayscale(0%)" ;
      }

      wallImageTwo.onmouseover = function(){
        contentTwo.style.color = "white";
        contentTwo.classList.remove("toggle2")
        contentTwo.classList.toggle("toggle")
        
        mainImage.style.filter = "grayscale(100%)" ;
      }

      wallImageTwo.onmouseout = function(){
        contentTwo.classList.toggle("toggle2")
        contentTwo.classList.remove("toggle")
        mainImage.style.filter = "grayscale(0%)" ;
      }

      



    
}




function $ (el) {
  return document.querySelector(el);
}
function $$ (els) {
  return document.querySelectorAll(els);
}
