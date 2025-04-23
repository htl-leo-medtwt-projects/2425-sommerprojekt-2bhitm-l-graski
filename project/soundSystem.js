let startScreenSound = new Audio("sounds/start-screen.mp3");
startScreenSound.volume = 0.7;
let inGameSound = new Audio("sounds/in-game.mp3");
inGameSound.volume = 0.4;
let pickupSound = new Audio("sounds/pick-up.wav");
let deathSound = new Audio("sounds/death.wav");
let interactSound = new Audio("sounds/interact.wav");
let buySound;
let equiptSound;
let playing = false;

function toggleSound(location) {
  let musicIcon = [...document.getElementsByClassName("music-button-icon")];

  if (playing) {
    musicIcon.forEach((e) => {
      e.src = "img/sound-icon-off.png";
    });

    playing = false;
    stopSound();
  } else {
    musicIcon.forEach((e) => {
      e.src = "img/sound-icon-on.png";
    });

    playing = true;
    playSound(location);
  }
}

function stopSound() {
  startScreenSound.pause();

  inGameSound.pause();

  pickupSound.pause();
  pickupSound.currentTime = 0;

  deathSound.pause();
  deathSound.currentTime = 0;

  interactSound.pause();
  interactSound.currentTime = 0;
}

function playSound(location) {
  let musicIcon = [...document.getElementsByClassName("music-button-icon")];
  musicIcon.forEach((e) => {
    e.src = "img/sound-icon-on.png";
    playing = true;
  });

  stopSound();

  switch (location) {
    case 0:
      startScreenSound.play();
      startScreenSound.loop = true;
      break;

    case 1:
      inGameSound.play();
      inGameSound.loop = true;
      break;

    case 2:
      deathSound.play();
      break;
  }
}

function playInteractSound() {
  interactSound.play();
}

function playPickupSound() {
  pickupSound.play();
}

function volumeOff() {
  startScreenSound.volume = 0;
  inGameSound.volume = 0;
  pickupSound.volume = 0;
  deathSound.volume = 0;
  interactSound.volume = 0;
}

function volumeOn() {
  startScreenSound.volume = 0.7;
  inGameSound.volume = 0.4;
  pickupSound.volume = 1;
  deathSound.volume = 1;
  interactSound.volume = 1;
}
