let startScreenSound = "sounds/";
let inGameSound = "sounds/";
let pickupSound = "sounds/";
let deathSound = "sounds/";
let interactSound = "sounds/";
let buySound = "sounds/";
let equiptSound = "sounds/";
let isPlaying = false;

function toggleSound(location) {
  let musicIcon = [...document.getElementsByClassName("music-button-icon")];

  if (isPlaying) {
    musicIcon.forEach((e) => {
      e.src = "img/sound-icon-off.png";
    });

    isPlaying = false;
    stopSound();
  } else {
    musicIcon.forEach((e) => {
      e.src = "img/sound-icon-on.png";
    });

    isPlaying = true;
    playSound(location);
  }
}

function stopSound() {}

function playSound(location) {
  let musicIcon = [...document.getElementsByClassName("music-button-icon")];
  musicIcon.forEach((e) => {
    e.src = "img/sound-icon-on.png";
    isPlaying = true;
  });

  switch (location) {
    case 0:
      console.log("Start Menu");
      break;

    case 1:
      console.log("In Game");
      break;
  }
}
