var contentFour = $('.content-4');

var mainImage = $('.main-image');
var wallImageThree = $('.walls-image3');
var trafficPic = $('.traffic');


window.onload = function(){

  wallImageThree.onmouseover = function(){
    contentFour.style.color = "white";
    contentFour.classList.remove("toggle2");
    contentFour.classList.toggle("toggle");
    mainImage.style.filter = "grayscale(100%)" ;

    trafficPic.style.opacity = "1";
    trafficPic.classList.remove("toggle4");
    trafficPic.classList.toggle("toggle3");
  }


  wallImageThree.onmouseout = function(){
    contentFour.classList.toggle("toggle2")
    contentFour.classList.remove("toggle")
    mainImage.style.filter = "grayscale(0%)" ;

    trafficPic.classList.toggle("toggle3")
    trafficPic.classList.remove("toggle4")
    trafficPic.style.opacity = "0";

  }




//   wallImageThree.onmouseover = function(){
//   trafficPic.style.opacity = "1";
//   trafficPic.classList.remove("toggle2");
//   trafficPic.classList.toggle("toggle");
// }

//   wallImageThree.onmouseout = function(){
//     trafficPic.classList.toggle("toggle2")
//     trafficPic.classList.remove("toggle")
//   }

}

function $ (el) {
    return document.querySelector(el);
  }

  function $$ (els) {
    return document.querySelectorAll(els);
  }
  