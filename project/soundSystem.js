let startScreenSound;
let inGameSound;
let pickupSound;
let deathSound;
let interactSound;
let buySound;
let equiptSound;

function toggleSound(state, location) {
  if (state) {
    stopSound();
  } else {
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
