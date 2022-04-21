
document.getElementById("myBtn").addEventListener("click", function() {
  var audio = new Audio('success-sound-effect.mp3');
  audio.play();
});

document.getElementById("myBtn").addEventListener("click", function() {
  
});

document.getElementById("cart").addEventListener("click", function() {
  alert("You added an item to cart");
});

document.getElementById("cart_counter").innerHTML = 0;
function cartIncrement() {
    document.getElementById("cart_counter").innerHTML++;
}

var x = document.getElementById("mouseover-txt");
x.addEventListener("mouseover", myFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("mouseover-txt").innerHTML = "Call Now!";
}
function myThirdFunction() {
  document.getElementById("mouseover-txt").innerHTML = "Phone: 8777 777 77 77";
}
document.getElementById("ww").addEventListener("keypress", myFunctionKey);

function myFunctionKey() {
  document.getElementById("ww").style.backgroundColor = "#e8f0fe";
}

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
});
//Get the button
var mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
