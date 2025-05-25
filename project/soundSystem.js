let startScreenSound = new Audio("sounds/start-screen.mp3");
let inGameSound = new Audio("sounds/in-game.mp3");
let deathSound = new Audio("sounds/death.wav");
let interactSound = new Audio("sounds/interact.wav");
let shopSound = new Audio("sounds/shop_music.mp3");
let saveEffectSound = new Audio("sounds/save_effect_sound.mp3");
let playing = false;

let gobalSound = true;

function toggleSound(location) {
  if (gobalSound) {
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
}

function stopSound() {
  startScreenSound.pause();

  inGameSound.pause();

  deathSound.pause();
  deathSound.currentTime = 0;

  interactSound.pause();
  interactSound.currentTime = 0;

  shopSound.pause();

  saveEffectSound.pause();
  saveEffectSound.currentTime = 0;
}

function playSound(location) {
  if (gobalSound) {
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

      case 3:
        shopSound.play();
        shopSound.loop = true;
        break;
    }
  }
}

function playInteractSound() {
  if (gobalSound) {
    interactSound.play();
  }
}

function playPickupSound() {
  if (gobalSound) {
    let pickupSound = new Audio("sounds/pick-up.wav");
    pickupSound.play();
  }
}

function playBuySound() {
  if (gobalSound) {
    let buySound = new Audio("sounds/buy_sound.mp3");
    buySound.play();
  }
}

function playDeniedSound() {
  if (gobalSound) {
    let deniedSound = new Audio("sounds/denied_sound.mp3");
    deniedSound.play();
  }
}

function playHurtSoundThomas() {
  if (gobalSound) {
    let hurtSound = new Audio("sounds/hurt_sound-thomas.mp3");
    hurtSound.play();
  }
}

function playHurtSoundKohrer() {
  if (gobalSound) {
    let hurtSound = new Audio("sounds/hurt_sound-kohrer.mp3");
    hurtSound.play();
  }
}

function playSaveEffectSound() {
  if (gobalSound) {
    saveEffectSound.play();
  }
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
