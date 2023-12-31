
//
var numBottons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numBottons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", bottonClick);
  function bottonClick(){

    var btnInner = this.innerHTML;
    makeSound(btnInner);
    addAnimation(btnInner);

  };
};

//
document.addEventListener("keypress", function(event){

  makeSound(event.key);
  addAnimation(event.key);

});

//
function makeSound(key) {

  switch (key) {
    case "d":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
      break;
    case "j":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
      break;
    case "k":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
      break;
    case "l":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
      break;
    case "s":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
      break;
    case "w":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
      break;
    case "a":
    var kickBass = new Audio('sounds/kick-bass.mp3');
    kickBass.play();
      break;
    default: console.log(key)
};
};

function addAnimation(currentKey) {
  var active = document.querySelector("." + currentKey);
  active.classList.add("pressed");

setTimeout(
  function(){
    active.classList.remove("pressed");
  }, 100);

};
