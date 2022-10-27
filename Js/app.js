var arr_img = [];

function loadImg(){
    for(let i = 0; i < 4; i++){
        arr_img[i] = new Image();
        arr_img[i].src = "Images/banner"+(i+1)+".jpg";
    }
}

var mytime ;
var index = 0;
function slideShow(){
    loadImg();
    index++;
 
    if(index == arr_img.length){
        index = 0;    
    }
    document.getElementById("banner_header").src = arr_img[index].src;
    mytime = setTimeout("slideShow()",2500);
}


let mybutton = document.getElementById("btn-back-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


