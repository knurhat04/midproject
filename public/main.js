document.getElementById("myBtn").addEventListener("click", function() {
  var audio = new Audio('/audio/sound.mp3');
  audio.play();
});
document.getElementById("title").innerHTML = "T-Store";
document.getElementById("title").style.setProperty("font-size", "28px");
document.getElementById("title").style.setProperty("color", "#fff");

// cart_count = 0;
// click
document.getElementById("cart_counter").innerHTML = 0;
function cartIncrement() {
    document.getElementById("cart_counter").innerHTML++;
}
// mouseover
function onMouseDownTitle() {
    document.getElementById("title").style.setProperty("color", "brown");
}

function onMouseUpTitle() {
    document.getElementById("title").style.setProperty("color", "#fff");
}

// key press and sound

// init audio

function playClick() {
    var audio = new Audio ('/audio/Mouse-Click-00-c-FesliyanStudios.com');
    audio.play();
}
// animation
function rotate() {
    document.getElementById("title").animate([
        // keyframes
        { transform: 'rotate(360deg)' },
    ], {
        // timing options
        duration: 500   ,
    });
}



document.getElementById("ww").addEventListener("keypress", myFunctionKey);

function myFunctionKey() {
  document.getElementById("ww").style.backgroundColor = "#e8f0fe";
}
document.getElementById("ww").addEventListener("keypress", myFunctionKey);

function myFunctionKey() {
  document.getElementById("ww").style.backgroundColor = "#e8f0fe";
}



function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
};

function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
