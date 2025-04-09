let startScreenSound;
let inGameSound;
let pickupSound;
let deathSound;
let interactSound;
let buySound;
let equiptSound;
let isPlaying = false;

function toggleSound(_location) {
  let musicIcon = [...document.getElementsByClassName("music-button-icon")];

  if (isPlaying) {
    musicIcon.forEach(e => {
      e.src = "img/sound-icon-off.png";
    });

    isPlaying = false;
    stopSound();
  } else {
    musicIcon.forEach(e => {
      e.src = "img/sound-icon-on.png";
    });

    isPlaying = true;
    playSound(location);
  }
}

function stopSound() {}

function playSound(location) {
  switch (location) {
    case 0:
      console.log("Start Menu");
      break;

    case 1:
      console.log("In Game");
      break;
  }
}