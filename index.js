// document.querySelector("button").addEventListener("click", hadleClick);

// function hadleClick() {
//   alert("I got Clicked");
// }

// Detecting Click
for (const i of document.querySelectorAll("button")) {
  i.addEventListener("click", function () {
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonANimation(buttonInnerHtml);
  });
}

// Detecting Keyboard Press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonANimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();

      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(buttonInnerHtml);
  }
}

function buttonANimation(key) {
  var activeButton = document.querySelector("." + key);
  // We add the pressed class to the pressed button
  activeButton.classList.add("pressed");
  // We need this function for a specific amount of time that's why we
  // set a timer and after a while this next function apllies
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
