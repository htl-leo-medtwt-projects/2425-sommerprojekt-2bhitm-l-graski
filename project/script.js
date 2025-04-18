let body = document.body;
let resetConfirmText =
  "Are you sure you want to reset this profile?<br>Please note that all progress, settings, <br>and data associated with this profile will be permanently lost <br>if you proceed with the reset!";
let coinImg = "coin.png";
let popUpOpen = false;

loadPlayerData();

document.addEventListener("keydown", function (event) {
  if (event.key === "k") {
    resetAllPlayerData();
    window.location.reload();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "c") {
    //confirmScreen(-1, resetConfirmText);
    settingsButton(1);
  }
});

function settingsButton(game) {
  let settingButton = document.createElement("button");
  settingButton.style.display = "inline-block";
  settingButton.style.overflow = "hidden";
  settingButton.style.position = "absolute";
  settingButton.style.top = "3%";
  settingButton.style.left = "98%";
  settingButton.style.transform = "translate(-50%, -50%)";
  settingButton.style.border = "none";
  settingButton.style.outline = "none";
  settingButton.style.backgroundColor = "transparent";
  settingButton.style.fontFamily = "SF-Pro";
  settingButton.style.width = "48px";
  settingButton.style.height = "38px";

  let settingButtonImg = document.createElement("img");
  settingButtonImg.src = "img/blue_button.png";
  settingButtonImg.style.height = "100%";
  settingButtonImg.style.width = "100%";
  settingButtonImg.style.display = "block";

  let settingButtonIcon = document.createElement("img");
  settingButtonIcon.src = "img/settings-icon.png";
  settingButtonIcon.style.display = "block";
  settingButtonIcon.style.width = "32px";
  settingButtonIcon.style.height = "32px";
  settingButtonIcon.style.position = "absolute";
  settingButtonIcon.style.top = "47.5%";
  settingButtonIcon.style.left = "50%";
  settingButtonIcon.style.transform = "translate(-50%, -50%)";

  settingButton.addEventListener("mouseover", () => {
    settingButton.style.cursor = "pointer";
    settingButton.style.filter = "grayscale(50%)";
  });

  settingButton.addEventListener("mouseleave", () => {
    settingButton.style.cursor = "auto";
    settingButton.style.filter = "grayscale(0%)";
  });

  settingButton.addEventListener("click", () => {
    let backgroundDiv = document.createElement("div");

    backgroundDiv.style.backgroundColor = "rgb(0,0,0,0.75)";
    backgroundDiv.style.border = "3px solid rgb(0,0,0,0.85)";
    backgroundDiv.style.borderRadius = "25px";
    backgroundDiv.style.width = "25%";
    backgroundDiv.style.height = "60%";
    backgroundDiv.style.position = "absolute";
    backgroundDiv.style.top = "50%";
    backgroundDiv.style.left = "50%";
    backgroundDiv.style.transform = "translate(-50%, -50%)";

    let settingsHeader = document.createElement("h1");
    settingsHeader.innerHTML = "Settings";
    settingsHeader.style.color = "white";
    settingsHeader.style.fontFamily = "Uberschriften";
    settingsHeader.style.textAlign = "center";
    settingsHeader.style.padding = "5px 0";
    settingsHeader.style.borderBottom = "3.5px solid white";

    let musicButton = document.createElement("button");
    musicButton.style.display = "inline-block";
    musicButton.style.borderRadius = "100px";
    musicButton.style.overflow = "hidden";
    musicButton.style.border = "none";
    musicButton.style.backgroundColor = "transparent";
    musicButton.style.position = "absolute";
    musicButton.style.top = "15%";
    musicButton.style.left = "92.5%";
    musicButton.style.transform = "translate(-50%, -50%)";
    musicButton.style.width = "60px";
    musicButton.style.height = "47.5px";

    let musicButtonImg = document.createElement("img");
    musicButtonImg.src = "img/blue_button.png";
    musicButtonImg.style.height = "100%";
    musicButtonImg.style.width = "100%";
    musicButtonImg.style.display = "block";

    let musicButtonIcon = document.createElement("img");
    musicButtonIcon.classList = "music-button-icon";

    if (isPlaying) {
      musicButtonIcon.src = "img/sound-icon-on.png";
    } else {
      musicButtonIcon.src = "img/sound-icon-off.png";
    }

    musicButtonIcon.style.width = "80%";
    musicButtonIcon.style.height = "80%";
    musicButtonIcon.style.display = "block";
    musicButtonIcon.style.position = "absolute";
    musicButtonIcon.style.top = "50%";
    musicButtonIcon.style.left = "50%";
    musicButtonIcon.style.transform = "translate(-50%, -50%)";

    musicButton.addEventListener("mouseover", () => {
      musicButton.style.cursor = "pointer";
      musicButton.style.filter = "grayscale(50%)";
    });

    musicButton.addEventListener("mouseleave", () => {
      musicButton.style.cursor = "auto";
      musicButton.style.filter = "grayscale(0%)";
    });

    musicButton.addEventListener("click", () => {
      toggleSound(1);
    });

    let keyDiv = document.createElement("div");
    keyDiv.style.width = "100%";
    keyDiv.style.height = "62%";
    keyDiv.style.position = "absolute";
    keyDiv.style.top = "51.5%";
    keyDiv.style.left = "50%";
    keyDiv.style.transform = "translate(-50%, -50%)";
    keyDiv.style.borderBottom = "3.5px solid white";

    let forwardText = document.createElement("p");
    forwardText.innerHTML = "Forward";
    forwardText.style.position = "absolute";
    forwardText.style.top = "10%";
    forwardText.style.left = "30%";
    forwardText.style.transform = "translate(-50%, -50%)";
    forwardText.style.fontFamily = "SF-Pro";
    forwardText.style.fontSize = "25px";
    forwardText.style.color = "white";

    let forwardButtonDiv = document.createElement("div");
    forwardButtonDiv.style.position = "absolute";
    forwardButtonDiv.style.top = "13%";
    forwardButtonDiv.style.left = "75%";
    forwardButtonDiv.style.transform = "translate(-50%, -50%)";

    let forwardButtonImg = document.createElement("img");
    forwardButtonImg.src = "img/key.png";
    forwardButtonImg.style.height = "64px";
    forwardButtonImg.style.width = "64px";
    forwardButtonImg.style.display = "block";

    let forwardButtonInput = document.createElement("Input");
    forwardButtonInput.type = "text";
    forwardButtonInput.value = playerData.Game[game - 1].Movement.Forward;
    forwardButtonInput.style.display = "inline-block";
    forwardButtonInput.style.overflow = "hidden";
    forwardButtonInput.style.position = "absolute";
    forwardButtonInput.style.top = "50%";
    forwardButtonInput.style.left = "50%";
    forwardButtonInput.style.transform = "translate(-50%, -50%)";
    forwardButtonInput.style.border = "none";
    forwardButtonInput.style.outline = "none";
    forwardButtonInput.style.backgroundColor = "transparent";
    forwardButtonInput.style.fontFamily = "SF-Pro";
    forwardButtonInput.style.width = "100%";
    forwardButtonInput.style.height = "100%";
    forwardButtonInput.style.fontSize = "20px";
    forwardButtonInput.style.textAlign = "center";
    forwardButtonInput.style.color = "white";

    forwardButtonImg.addEventListener("mouseover", () => {
      forwardButtonImg.style.cursor = "pointer";
      forwardButtonImg.style.filter = "grayscale(50%)";
    });

    forwardButtonImg.addEventListener("mouseleave", () => {
      forwardButtonImg.style.cursor = "auto";
      forwardButtonImg.style.filter = "grayscale(0%)";
    });

    forwardButtonInput.addEventListener("mouseover", () => {
      forwardButtonInput.style.cursor = "pointer";
      forwardButtonImg.style.filter = "grayscale(50%)";
    });

    forwardButtonInput.addEventListener("mouseleave", () => {
      forwardButtonInput.style.cursor = "auto";
      forwardButtonImg.style.filter = "grayscale(0%)";
    });

    forwardButtonInput.addEventListener("click", () => {
      forwardButtonInput.style.cursor = "text";
      forwardButtonInput.value = "";
    });

    forwardButtonInput.addEventListener("input", () => {
      let forwardKey = document.getElementById("forwardText");
      if (forwardButtonInput.value != "") {
        playerData.Game[game - 1].Movement.Forward = forwardButtonInput.value;
        forwardKey.innerHTML = forwardButtonInput.value;
        savePlayerData();
      } else {
        playerData.Game[game - 1].Movement.Forward = "w";
        forwardKey.innerHTML = "w";
        savePlayerData();
      }
      //console.log(playerData);
    });

    let backwardText = document.createElement("p");
    backwardText.innerHTML = "Backward";
    backwardText.style.position = "absolute";
    backwardText.style.top = "42%";
    backwardText.style.left = "30%";
    backwardText.style.transform = "translate(-50%, -50%)";
    backwardText.style.fontFamily = "SF-Pro";
    backwardText.style.fontSize = "25px";
    backwardText.style.color = "white";

    let backwardButtonDiv = document.createElement("div");
    backwardButtonDiv.style.position = "absolute";
    backwardButtonDiv.style.top = "45%";
    backwardButtonDiv.style.left = "75%";
    backwardButtonDiv.style.transform = "translate(-50%, -50%)";

    let backwardButtonImg = document.createElement("img");
    backwardButtonImg.src = "img/key.png";
    backwardButtonImg.style.height = "64px";
    backwardButtonImg.style.width = "64px";
    backwardButtonImg.style.display = "block";

    let backwardButtonInput = document.createElement("Input");
    backwardButtonInput.type = "text";
    backwardButtonInput.value = playerData.Game[game - 1].Movement.Backward;
    backwardButtonInput.style.display = "inline-block";
    backwardButtonInput.style.overflow = "hidden";
    backwardButtonInput.style.position = "absolute";
    backwardButtonInput.style.top = "50%";
    backwardButtonInput.style.left = "50%";
    backwardButtonInput.style.transform = "translate(-50%, -50%)";
    backwardButtonInput.style.border = "none";
    backwardButtonInput.style.outline = "none";
    backwardButtonInput.style.backgroundColor = "transparent";
    backwardButtonInput.style.fontFamily = "SF-Pro";
    backwardButtonInput.style.width = "100%";
    backwardButtonInput.style.height = "100%";
    backwardButtonInput.style.fontSize = "20px";
    backwardButtonInput.style.textAlign = "center";
    backwardButtonInput.style.color = "white";

    backwardButtonImg.addEventListener("mouseover", () => {
      backwardButtonImg.style.cursor = "pointer";
      backwardButtonImg.style.filter = "grayscale(50%)";
    });

    backwardButtonImg.addEventListener("mouseleave", () => {
      backwardButtonImg.style.cursor = "auto";
      backwardButtonImg.style.filter = "grayscale(0%)";
    });

    backwardButtonInput.addEventListener("mouseover", () => {
      backwardButtonInput.style.cursor = "pointer";
      backwardButtonImg.style.filter = "grayscale(50%)";
    });

    backwardButtonInput.addEventListener("mouseleave", () => {
      backwardButtonInput.style.cursor = "auto";
      backwardButtonImg.style.filter = "grayscale(0%)";
    });

    backwardButtonInput.addEventListener("click", () => {
      backwardButtonInput.style.cursor = "text";
      backwardButtonInput.value = "";
    });

    backwardButtonInput.addEventListener("input", () => {
      let backwardKey = document.getElementById("backwardText");
      if (backwardButtonInput.value != "") {
        playerData.Game[game - 1].Movement.Backward = backwardButtonInput.value;
        backwardKey.innerHTML = backwardButtonInput.value;
        savePlayerData();
      } else {
        playerData.Game[game - 1].Movement.Backward = "s";
        backwardKey.innerHTML = "s";
        savePlayerData();
      }
      //console.log(playerData);
    });

    let jumpText = document.createElement("p");
    jumpText.innerHTML = "Jump";
    jumpText.style.position = "absolute";
    jumpText.style.top = "74%";
    jumpText.style.left = "30%";
    jumpText.style.transform = "translate(-50%, -50%)";
    jumpText.style.fontFamily = "SF-Pro";
    jumpText.style.fontSize = "25px";
    jumpText.style.color = "white";

    let jumpButtonDiv = document.createElement("div");
    jumpButtonDiv.style.position = "absolute";
    jumpButtonDiv.style.top = "77%";
    jumpButtonDiv.style.left = "75%";
    jumpButtonDiv.style.transform = "translate(-50%, -50%)";

    let jumpButtonImg = document.createElement("img");
    jumpButtonImg.src = "img/key.png";
    jumpButtonImg.style.height = "64px";
    jumpButtonImg.style.width = "64px";
    jumpButtonImg.style.display = "block";

    let jumpButtonInput = document.createElement("Input");
    jumpButtonInput.type = "text";
    jumpButtonInput.value = playerData.Game[game - 1].Movement.Jump;
    jumpButtonInput.style.display = "inline-block";
    jumpButtonInput.style.overflow = "hidden";
    jumpButtonInput.style.position = "absolute";
    jumpButtonInput.style.top = "50%";
    jumpButtonInput.style.left = "50%";
    jumpButtonInput.style.transform = "translate(-50%, -50%)";
    jumpButtonInput.style.border = "none";
    jumpButtonInput.style.outline = "none";
    jumpButtonInput.style.backgroundColor = "transparent";
    jumpButtonInput.style.fontFamily = "SF-Pro";
    jumpButtonInput.style.width = "100%";
    jumpButtonInput.style.height = "100%";
    jumpButtonInput.style.fontSize = "20px";
    jumpButtonInput.style.textAlign = "center";
    jumpButtonInput.style.color = "white";

    jumpButtonImg.addEventListener("mouseover", () => {
      jumpButtonImg.style.cursor = "pointer";
      jumpButtonImg.style.filter = "grayscale(50%)";
    });

    jumpButtonImg.addEventListener("mouseleave", () => {
      jumpButtonImg.style.cursor = "auto";
      jumpButtonImg.style.filter = "grayscale(0%)";
    });

    jumpButtonInput.addEventListener("mouseover", () => {
      jumpButtonInput.style.cursor = "pointer";
      jumpButtonImg.style.filter = "grayscale(50%)";
    });

    jumpButtonInput.addEventListener("mouseleave", () => {
      jumpButtonInput.style.cursor = "auto";
      jumpButtonImg.style.filter = "grayscale(0%)";
    });

    jumpButtonInput.addEventListener("click", () => {
      jumpButtonInput.style.cursor = "text";
      jumpButtonInput.value = "";
    });

    jumpButtonInput.addEventListener("input", () => {
      let jumpKey = document.getElementById("jumpText");
      if (jumpButtonInput.value != "") {
        jumpKey.innerHTML = jumpButtonInput.value;
        playerData.Game[game - 1].Movement.Jump = jumpButtonInput.value;
        savePlayerData();
      } else {
        playerData.Game[game - 1].Movement.Jump = "space";
        jumpKey.innerHTML = "space";
        savePlayerData();
      }
      //console.log(playerData);
    });

    let resumeButton = document.createElement("button");
    resumeButton.style.display = "inline-block";
    resumeButton.style.overflow = "hidden";
    resumeButton.style.position = "absolute";
    resumeButton.style.top = "92%";
    resumeButton.style.left = "80%";
    resumeButton.style.transform = "translate(-50%, -50%)";
    resumeButton.style.border = "none";
    resumeButton.style.backgroundColor = "transparent";
    resumeButton.style.width = "28%";
    resumeButton.style.height = "10%";

    let resumeButtonImg = document.createElement("img");
    resumeButtonImg.src = "img/green_button.png";
    resumeButtonImg.style.height = "100%";
    resumeButtonImg.style.width = "100%";
    resumeButtonImg.style.display = "block";

    let resumeButtonText = document.createElement("p");
    resumeButtonText.innerHTML = "Resume";
    resumeButtonText.style.position = "absolute";
    resumeButtonText.style.top = "50%";
    resumeButtonText.style.left = "50%";
    resumeButtonText.style.transform = "translate(-50%, -50%)";
    resumeButtonText.style.fontFamily = "SF-Pro";
    resumeButtonText.style.fontSize = "18px";
    resumeButtonText.style.color = "white";

    resumeButton.addEventListener("mouseover", () => {
      resumeButton.style.cursor = "pointer";
      resumeButton.style.filter = "grayscale(50%)";
    });

    resumeButton.addEventListener("mouseleave", () => {
      resumeButton.style.cursor = "auto";
      resumeButton.style.filter = "grayscale(0%)";
    });

    resumeButton.addEventListener("click", () => {
      body.removeChild(backgroundDiv);
    });

    let backButton = document.createElement("button");
    backButton.style.display = "inline-block";
    backButton.style.overflow = "hidden";
    backButton.style.position = "absolute";
    backButton.style.top = "92%";
    backButton.style.left = "50%";
    backButton.style.transform = "translate(-50%, -50%)";
    backButton.style.border = "2px solid black";
    backButton.style.backgroundColor = "rgb(48, 47, 47)";
    backButton.style.borderRadius = "25px";
    backButton.style.width = "28%";
    backButton.style.height = "10%";

    let backButtonText = document.createElement("p");
    backButtonText.innerHTML = "Back";
    backButtonText.style.fontFamily = "SF-Pro";
    backButtonText.style.fontSize = "18px";
    backButtonText.style.color = "white";

    backButton.addEventListener("mouseover", () => {
      backButton.style.cursor = "pointer";
      backButton.style.backgroundColor = "rgb(30, 30, 30)";
    });

    backButton.addEventListener("mouseleave", () => {
      backButton.style.cursor = "auto";
      backButton.style.backgroundColor = "rgb(48, 47, 47)";
    });

    backButton.addEventListener("click", () => {
      startGame(game);
    });

    backgroundDiv.appendChild(settingsHeader);

    musicButton.appendChild(musicButtonImg);
    musicButton.appendChild(musicButtonIcon);
    backgroundDiv.appendChild(musicButton);

    keyDiv.appendChild(forwardText);
    forwardButtonDiv.appendChild(forwardButtonImg);
    forwardButtonDiv.appendChild(forwardButtonInput);
    keyDiv.appendChild(forwardButtonDiv);

    keyDiv.appendChild(backwardText);
    backwardButtonDiv.appendChild(backwardButtonImg);
    backwardButtonDiv.appendChild(backwardButtonInput);
    keyDiv.appendChild(backwardButtonDiv);

    keyDiv.appendChild(jumpText);
    jumpButtonDiv.appendChild(jumpButtonImg);
    jumpButtonDiv.appendChild(jumpButtonInput);
    keyDiv.appendChild(jumpButtonDiv);

    resumeButton.appendChild(resumeButtonImg);
    resumeButton.appendChild(resumeButtonText);
    backgroundDiv.appendChild(resumeButton);

    backButton.appendChild(backButtonText);
    backgroundDiv.appendChild(backButton);

    backgroundDiv.appendChild(keyDiv);
    body.appendChild(backgroundDiv);
  });

  settingButton.appendChild(settingButtonImg);
  settingButton.appendChild(settingButtonIcon);
  body.appendChild(settingButton);
}

function chooseGame() {
  body.innerHTML = "";
  body.removeAttribute("style");

  body.style.backgroundImage = "url(img/classroom_load_better.png)";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";

  let gameNameDiv = document.createElement("div");
  let gameName1 = document.createElement("p");
  let gameName2 = document.createElement("p");

  gameName1.innerHTML = "CLASSROOM";
  gameName1.style.display = "inline-block";
  gameName1.style.fontFamily = "Pixel-Font";
  gameName1.style.color = "white";
  gameName1.style.fontSize = "100px";
  gameName1.style.textShadow =
    "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, " +
    "1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000";
  gameName1.style.transform = "rotateZ(-15deg)";
  gameNameDiv.appendChild(gameName1);

  gameName2.innerHTML = "RUNNER";
  gameName2.style.display = "inline-block";
  gameName2.style.fontFamily = "Pixel-Font";
  gameName2.style.color = "white";
  gameName2.style.fontSize = "100px";
  gameName2.style.textShadow =
    "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, " +
    "1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000";
  gameName2.style.marginLeft = "50%";
  gameName2.style.transform = "rotateZ(-15deg)";
  gameNameDiv.appendChild(gameName2);

  gameNameDiv.style.display = "flex";
  gameNameDiv.style.flexDirection = "column";
  gameNameDiv.style.position = "absolute";
  gameNameDiv.style.top = "25%";
  gameNameDiv.style.right = "35%";
  gameNameDiv.style.animation = "gameText 2s infinite linear";

  body.appendChild(gameNameDiv);

  let buttonDiv = document.createElement("div");
  let button1 = document.createElement("button");
  let button2 = document.createElement("button");
  let button3 = document.createElement("button");

  let button1Text = document.createElement("p");
  button1Text.innerHTML = "GAME 1";
  let button2Text = document.createElement("p");
  button2Text.innerHTML = "GAME 2";
  let button3Text = document.createElement("p");
  button3Text.innerHTML = "GAME 3";

  function createButtonImgUnused() {
    let buttonUnused = document.createElement("img");
    buttonUnused.src = "img/cyan_button.png";
    buttonUnused.style.height = "100%";
    buttonUnused.style.width = "100%";
    buttonUnused.style.display = "block";
    return buttonUnused;
  }

  function createButtonImgUsed() {
    let buttonUsed = document.createElement("img");
    buttonUsed.src = "img/yellow_button.png";
    buttonUsed.style.height = "100%";
    buttonUsed.style.width = "100%";
    buttonUsed.style.display = "block";
    return buttonUsed;
  }

  if (getPlayerData(1).Used) {
    button1.appendChild(createButtonImgUsed());
  } else {
    button1.appendChild(createButtonImgUnused());
  }

  button1.style.display = "inline-block";
  button1.style.borderRadius = "100px";
  button1.style.position = "relative";
  button1.style.overflow = "hidden";
  button1.style.border = "none";
  button1.style.backgroundColor = "transparent";

  button1Text.style.position = "absolute";
  button1Text.style.top = "50%";
  button1Text.style.left = "50%";
  button1Text.style.transform = "translate(-50%, -50%)";
  button1Text.style.fontFamily = "SF-Pro";
  button1Text.style.fontSize = "25px";
  button1Text.style.color = "black";

  button1.addEventListener("mouseover", () => {
    button1.style.cursor = "pointer";
    button1.style.filter = "grayscale(50%)";
  });

  button1.addEventListener("mouseleave", () => {
    button1.style.cursor = "auto";
    button1.style.filter = "grayscale(0%)";
  });

  button1.addEventListener("click", () => {
    startGame(1);
    playSound(0);
  });

  button1.appendChild(button1Text);
  buttonDiv.appendChild(button1);

  if (getPlayerData(2).Used) {
    button2.appendChild(createButtonImgUsed());
  } else {
    button2.appendChild(createButtonImgUnused());
  }

  button2.style.display = "inline-block";
  button2.style.borderRadius = "100px";
  button2.style.position = "relative";
  button2.style.overflow = "hidden";
  button2.style.border = "none";
  button2.style.backgroundColor = "transparent";

  button2Text.style.position = "absolute";
  button2Text.style.top = "50%";
  button2Text.style.left = "50%";
  button2Text.style.transform = "translate(-50%, -50%)";
  button2Text.style.fontFamily = "SF-Pro";
  button2Text.style.fontSize = "25px";
  button2Text.style.color = "black";

  button2.addEventListener("mouseover", () => {
    button2.style.cursor = "pointer";
    button2.style.filter = "grayscale(50%)";
  });

  button2.addEventListener("mouseleave", () => {
    button2.style.cursor = "auto";
    button2.style.filter = "grayscale(0%)";
  });

  button2.addEventListener("click", () => {
    startGame(2);
    playSound(0);
  });

  button2.appendChild(button2Text);
  buttonDiv.appendChild(button2);

  if (getPlayerData(3).Used) {
    button3.appendChild(createButtonImgUsed());
  } else {
    button3.appendChild(createButtonImgUnused());
  }

  button3.style.display = "inline-block";
  button3.style.borderRadius = "100px";
  button3.style.position = "relative";
  button3.style.overflow = "hidden";
  button3.style.border = "none";
  button3.style.backgroundColor = "transparent";

  button3Text.style.position = "absolute";
  button3Text.style.top = "50%";
  button3Text.style.left = "50%";
  button3Text.style.transform = "translate(-50%, -50%)";
  button3Text.style.fontFamily = "SF-Pro";
  button3Text.style.fontSize = "25px";
  button3Text.style.color = "black";

  button3.addEventListener("mouseover", () => {
    button3.style.cursor = "pointer";
    button3.style.filter = "grayscale(50%)";
  });

  button3.addEventListener("mouseleave", () => {
    button3.style.cursor = "auto";
    button3.style.filter = "grayscale(0%)";
  });

  button3.addEventListener("click", () => {
    startGame(3);
    playSound(0);
  });

  button3.appendChild(button3Text);
  buttonDiv.appendChild(button3);

  buttonDiv.style.position = "absolute";
  buttonDiv.style.top = "75%";
  buttonDiv.style.left = "50%";
  buttonDiv.style.transform = "translate(-50%, -50%)";
  buttonDiv.style.display = "flex";
  buttonDiv.style.flexDirection = "column";
  buttonDiv.style.width = "20%";

  body.appendChild(buttonDiv);

  let musicButton = document.createElement("button");
  musicButton.style.display = "inline-block";
  musicButton.style.borderRadius = "100px";
  musicButton.style.overflow = "hidden";
  musicButton.style.border = "none";
  musicButton.style.backgroundColor = "transparent";
  musicButton.style.position = "absolute";
  musicButton.style.top = "3%";
  musicButton.style.left = "98%";
  musicButton.style.transform = "translate(-50%, -50%)";
  musicButton.style.width = "60px";
  musicButton.style.height = "47.5px";

  let musicButtonImg = document.createElement("img");
  musicButtonImg.src = "img/blue_button.png";
  musicButtonImg.style.height = "100%";
  musicButtonImg.style.width = "100%";
  musicButtonImg.style.display = "block";

  let musicButtonIcon = document.createElement("img");
  musicButtonIcon.classList = "music-button-icon";

  if (isPlaying) {
    musicButtonIcon.src = "img/sound-icon-on.png";
  } else {
    musicButtonIcon.src = "img/sound-icon-off.png";
  }

  musicButtonIcon.style.width = "80%";
  musicButtonIcon.style.height = "80%";
  musicButtonIcon.style.display = "block";
  musicButtonIcon.style.position = "absolute";
  musicButtonIcon.style.top = "50%";
  musicButtonIcon.style.left = "50%";
  musicButtonIcon.style.transform = "translate(-50%, -50%)";

  musicButton.addEventListener("mouseover", () => {
    musicButton.style.cursor = "pointer";
    musicButton.style.filter = "grayscale(50%)";
  });

  musicButton.addEventListener("mouseleave", () => {
    musicButton.style.cursor = "auto";
    musicButton.style.filter = "grayscale(0%)";
  });

  musicButton.addEventListener("click", () => {
    toggleSound(0);
  });

  musicButton.appendChild(musicButtonImg);
  musicButton.appendChild(musicButtonIcon);
  body.appendChild(musicButton);
}

chooseGame();

function startGame(game) {
  body.innerHTML = "";
  body.removeAttribute("style");

  //console.log(playerData);
  playerData.Game[game - 1].Used = true;
  savePlayerData();

  body.style.backgroundImage = "url(img/classroom_load_better.png)";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";

  let gameNameDiv = document.createElement("div");
  let gameName1 = document.createElement("p");
  let gameName2 = document.createElement("p");

  gameName1.innerHTML = "CLASSROOM";
  gameName1.style.display = "inline-block";
  gameName1.style.fontFamily = "Pixel-Font";
  gameName1.style.color = "white";
  gameName1.style.fontSize = "100px";
  gameName1.style.textShadow =
    "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, " +
    "1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000";
  gameName1.style.transform = "rotateZ(-15deg)";
  gameNameDiv.appendChild(gameName1);

  gameName2.innerHTML = "RUNNER";
  gameName2.style.display = "inline-block";
  gameName2.style.fontFamily = "Pixel-Font";
  gameName2.style.color = "white";
  gameName2.style.fontSize = "100px";
  gameName2.style.textShadow =
    "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, " +
    "1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000";
  gameName2.style.marginLeft = "50%";
  gameName2.style.transform = "rotateZ(-15deg)";
  gameNameDiv.appendChild(gameName2);

  gameNameDiv.style.display = "flex";
  gameNameDiv.style.flexDirection = "column";
  gameNameDiv.style.position = "absolute";
  gameNameDiv.style.top = "25%";
  gameNameDiv.style.right = "35%";
  gameNameDiv.style.animation = "gameText 2s infinite linear";

  body.appendChild(gameNameDiv);

  let startButton = document.createElement("button");
  startButton.style.display = "inline-block";
  startButton.style.borderRadius = "100px";
  startButton.style.overflow = "hidden";
  startButton.style.border = "none";
  startButton.style.backgroundColor = "transparent";
  startButton.style.position = "absolute";
  startButton.style.top = "85%";
  startButton.style.left = "50%";
  startButton.style.transform = "translate(-50%, -50%)";

  let startButtonImg = document.createElement("img");
  startButtonImg.src = "img/green_button.png";
  startButtonImg.style.height = "100%";
  startButtonImg.style.width = "100%";
  startButtonImg.style.display = "block";
  startButton.style.boxShadow = "10px 10px 40px 10px rgba(255,255,255,1)";

  let startButtonText = document.createElement("p");
  startButtonText.innerHTML = "START";
  startButtonText.style.position = "absolute";
  startButtonText.style.top = "50%";
  startButtonText.style.left = "50%";
  startButtonText.style.transform = "translate(-50%, -50%)";
  startButtonText.style.fontFamily = "SF-Pro";
  startButtonText.style.fontSize = "25px";
  startButtonText.style.color = "black";

  startButton.addEventListener("mouseover", () => {
    startButton.style.cursor = "pointer";
    startButton.style.filter = "grayscale(50%)";
  });

  startButton.addEventListener("mouseleave", () => {
    startButton.style.cursor = "auto";
    startButton.style.filter = "grayscale(0%)";
  });

  startButton.addEventListener("click", () => {
    gameScreen(game);
  });

  startButton.appendChild(startButtonText);
  startButton.appendChild(startButtonImg);
  body.appendChild(startButton);

  let nameButton = document.createElement("div");
  nameButton.style.backgroundImage = "url(img/blue_button.png)";
  nameButton.style.width = "294px";
  nameButton.style.height = "81px";
  nameButton.style.position = "absolute";
  nameButton.style.top = "71%";
  nameButton.style.left = "50%";
  nameButton.style.transform = "translate(-50%, -50%)";

  let nameButtonInput = document.createElement("input");
  nameButtonInput.type = "text";
  nameButtonInput.placeholder = playerData.Game[game - 1].PlayerName;
  nameButtonInput.style.overflow = "hidden";
  nameButtonInput.style.position = "absolute";
  nameButtonInput.style.top = "50%";
  nameButtonInput.style.left = "50%";
  nameButtonInput.style.transform = "translate(-50%, -50%)";
  nameButtonInput.style.border = "none";
  nameButtonInput.style.outline = "none";
  nameButtonInput.style.backgroundColor = "transparent";
  nameButtonInput.style.fontFamily = "SF-Pro";
  nameButtonInput.style.fontSize = "24px";
  nameButtonInput.style.padding = "15px 10px";

  nameButtonInput.addEventListener("input", () => {
    playerData.Game[game - 1].PlayerName = nameButtonInput.value;
    savePlayerData();

    if (
      playerData.Game[game - 1].PlayerName == "" ||
      playerData.Game[game - 1].PlayerName == undefined
    ) {
      playerData.Game[game - 1].PlayerName = "NAME";
      savePlayerData();
    }

    console.log(playerData);
  });

  nameButton.addEventListener("mouseover", () => {
    nameButton.style.cursor = "pointer";
    nameButton.style.filter = "grayscale(50%)";
  });

  nameButton.addEventListener("mouseleave", () => {
    nameButton.style.cursor = "auto";
    nameButton.style.filter = "grayscale(0%)";
  });

  nameButtonInput.addEventListener("mouseover", () => {
    nameButtonInput.style.cursor = "pointer";
  });

  nameButtonInput.addEventListener("mouseleave", () => {
    nameButtonInput.style.cursor = "auto";
  });

  nameButtonInput.addEventListener("click", () => {
    nameButtonInput.style.cursor = "text";
  });

  nameButton.appendChild(nameButtonInput);
  body.appendChild(nameButton);

  let resetButton = document.createElement("button");
  resetButton.style.display = "inline-block";
  resetButton.style.overflow = "hidden";
  resetButton.style.position = "absolute";
  resetButton.style.top = "98%";
  resetButton.style.left = "97%";
  resetButton.style.transform = "translate(-50%, -50%)";
  resetButton.style.border = "none";
  resetButton.style.outline = "none";
  resetButton.style.backgroundColor = "transparent";
  resetButton.style.fontFamily = "SF-Pro";
  resetButton.style.width = "95px";
  resetButton.style.height = "23px";

  let resetButtonImg = document.createElement("img");
  resetButtonImg.src = "img/red_button.png";
  resetButtonImg.style.height = "100%";
  resetButtonImg.style.width = "100%";
  resetButtonImg.style.display = "block";

  let resetButtonText = document.createElement("p");
  resetButtonText.innerHTML = "RESET";
  resetButtonText.style.position = "absolute";
  resetButtonText.style.top = "50%";
  resetButtonText.style.left = "50%";
  resetButtonText.style.transform = "translate(-50%, -50%)";
  resetButtonText.style.fontFamily = "SF-Pro";
  resetButtonText.style.fontSize = "18px";
  resetButtonText.style.color = "black";

  resetButton.addEventListener("mouseover", () => {
    resetButton.style.cursor = "pointer";
    resetButton.style.filter = "grayscale(50%)";
  });

  resetButton.addEventListener("mouseleave", () => {
    resetButton.style.cursor = "auto";
    resetButton.style.filter = "grayscale(0%)";
  });

  resetButton.addEventListener("click", () => {
    if (!popUpOpen) {
      confirmScreen(game, resetConfirmText);
    }
  });

  resetButton.appendChild(resetButtonImg);
  resetButton.appendChild(resetButtonText);
  body.appendChild(resetButton);

  let backButton = document.createElement("button");
  let backButtonImg = document.createElement("img");
  let backImg = document.createElement("img");
  let backButtonText = document.createElement("p");

  backButtonImg.src = "img/blue_button.png";
  backButtonImg.style.width = "100%";
  backButtonImg.style.height = "100%";
  backButtonImg.style.display = "block";

  backImg.src = "img/back-arrow.png";
  backImg.style.width = "20px";
  backImg.style.height = "20px";
  backImg.style.display = "block";
  backImg.style.position = "absolute";
  backImg.style.top = "50%";
  backImg.style.left = "20%";
  backImg.style.transform = "translate(-50%, -50%)";

  backButtonText.innerHTML = "BACK";
  backButtonText.style.position = "absolute";
  backButtonText.style.top = "50%";
  backButtonText.style.left = "60%";
  backButtonText.style.transform = "translate(-50%, -50%)";
  backButtonText.style.fontFamily = "SF-Pro";
  backButtonText.style.fontSize = "18px";
  backButtonText.style.color = "black";

  backButton.style.display = "inline-block";
  backButton.style.overflow = "hidden";
  backButton.style.position = "absolute";
  backButton.style.top = "3%";
  backButton.style.left = "3%";
  backButton.style.transform = "translate(-50%, -50%)";
  backButton.style.border = "none";
  backButton.style.backgroundColor = "transparent";
  backButton.style.width = "95px";
  backButton.style.height = "47.5px";

  backButton.addEventListener("mouseover", () => {
    backButton.style.cursor = "pointer";
    backButton.style.filter = "grayscale(50%)";
  });

  backButton.addEventListener("mouseleave", () => {
    backButton.style.cursor = "auto";
    backButton.style.filter = "grayscale(0%)";
  });

  backButton.addEventListener("click", () => {
    chooseGame();
  });

  backButton.appendChild(backButtonImg);
  backButton.appendChild(backImg);
  backButton.appendChild(backButtonText);
  body.appendChild(backButton);

  let gameDisplay = document.createElement("div");
  let gameImg = document.createElement("img");
  let gameText = document.createElement("p");

  gameImg.src = "img/blue_button.png";
  gameImg.style.width = "100%";
  gameImg.style.height = "100%";
  gameImg.style.display = "block";

  gameText.innerHTML = `GAME ${game}`;
  gameText.style.position = "absolute";
  gameText.style.top = "50%";
  gameText.style.left = "50%";
  gameText.style.transform = "translate(-50%, -50%)";
  gameText.style.fontFamily = "SF-Pro";
  gameText.style.fontSize = "13px";
  gameText.style.color = "black";

  gameDisplay.style.display = "inline-block";
  gameDisplay.style.overflow = "hidden";
  gameDisplay.style.position = "absolute";
  gameDisplay.style.top = "3%";
  gameDisplay.style.left = "93.5%";
  gameDisplay.style.transform = "translate(-50%, -50%)";
  gameDisplay.style.width = "95px";
  gameDisplay.style.height = "47.5px";

  gameDisplay.appendChild(gameImg);
  gameDisplay.appendChild(gameText);
  body.appendChild(gameDisplay);

  let musicButton = document.createElement("button");
  musicButton.style.display = "inline-block";
  musicButton.style.borderRadius = "100px";
  musicButton.style.overflow = "hidden";
  musicButton.style.border = "none";
  musicButton.style.backgroundColor = "transparent";
  musicButton.style.position = "absolute";
  musicButton.style.top = "3%";
  musicButton.style.left = "98%";
  musicButton.style.transform = "translate(-50%, -50%)";
  musicButton.style.width = "60px";
  musicButton.style.height = "47.5px";

  let musicButtonImg = document.createElement("img");
  musicButtonImg.src = "img/blue_button.png";
  musicButtonImg.style.height = "100%";
  musicButtonImg.style.width = "100%";
  musicButtonImg.style.display = "block";

  let musicButtonIcon = document.createElement("img");
  musicButtonIcon.classList = "music-button-icon";

  if (isPlaying) {
    musicButtonIcon.src = "img/sound-icon-on.png";
  } else {
    musicButtonIcon.src = "img/sound-icon-off.png";
  }

  musicButtonIcon.style.width = "80%";
  musicButtonIcon.style.height = "80%";
  musicButtonIcon.style.display = "block";
  musicButtonIcon.style.position = "absolute";
  musicButtonIcon.style.top = "50%";
  musicButtonIcon.style.left = "50%";
  musicButtonIcon.style.transform = "translate(-50%, -50%)";

  musicButton.addEventListener("mouseover", () => {
    musicButton.style.cursor = "pointer";
    musicButton.style.filter = "grayscale(50%)";
  });

  musicButton.addEventListener("mouseleave", () => {
    musicButton.style.cursor = "auto";
    musicButton.style.filter = "grayscale(0%)";
  });

  musicButton.addEventListener("click", () => {
    toggleSound(0);
  });

  musicButton.appendChild(musicButtonImg);
  musicButton.appendChild(musicButtonIcon);
  body.appendChild(musicButton);
}

function confirmScreen(game, text) {
  let backgroundDiv = document.createElement("div");
  let confirmHeader = document.createElement("h1");
  let confirmText = document.createElement("p");
  let yesButton = document.createElement("button");
  let yesImg = document.createElement("img");
  let yesText = document.createElement("p");
  let noButton = document.createElement("button");
  let noText = document.createElement("p");

  popUpOpen = true;

  backgroundDiv.style.backgroundColor = "rgb(0,0,0,0.75)";
  backgroundDiv.style.border = "3px solid rgb(0,0,0,0.85)";
  backgroundDiv.style.borderRadius = "25px";
  backgroundDiv.style.width = "33%";
  backgroundDiv.style.height = "55%";
  backgroundDiv.style.position = "absolute";
  backgroundDiv.style.top = "50%";
  backgroundDiv.style.left = "50%";
  backgroundDiv.style.transform = "translate(-50%, -50%)";

  confirmHeader.innerHTML = "Confirm Screen";
  confirmHeader.style.color = "white";
  confirmHeader.style.fontFamily = "Uberschriften";
  confirmHeader.style.textAlign = "center";
  confirmHeader.style.paddingTop = "3px";
  confirmHeader.style.borderBottom = "3.5px solid white";

  confirmText.innerHTML = text;
  confirmText.style.color = "white";
  confirmText.style.fontFamily = "SF-Pro";
  confirmText.style.fontSize = "35px";
  confirmText.style.padding = "15px 10% 15px 10%";
  confirmText.style.borderBottom = "3.5px solid white";

  yesImg.src = "img/red_button.png";
  yesImg.style.height = "100%";
  yesImg.style.width = "100%";
  yesImg.style.display = "block";

  yesText.innerHTML = "Yes, Reset Profil";
  yesText.style.position = "absolute";
  yesText.style.top = "50%";
  yesText.style.left = "50%";
  yesText.style.transform = "translate(-50%, -50%)";
  yesText.style.fontFamily = "SF-Pro";
  yesText.style.fontSize = "18px";
  yesText.style.color = "white";

  yesButton.style.display = "inline-block";
  yesButton.style.overflow = "hidden";
  yesButton.style.position = "absolute";
  yesButton.style.top = "92%";
  yesButton.style.left = "85%";
  yesButton.style.transform = "translate(-50%, -50%)";
  yesButton.style.border = "none";
  yesButton.style.backgroundColor = "transparent";
  yesButton.style.width = "28%";
  yesButton.style.height = "10%";

  yesButton.addEventListener("mouseover", () => {
    yesButton.style.cursor = "pointer";
    yesButton.style.filter = "grayscale(50%)";
  });

  yesButton.addEventListener("mouseleave", () => {
    yesButton.style.cursor = "auto";
    yesButton.style.filter = "grayscale(0%)";
  });

  yesButton.addEventListener("click", () => {
    resetPlayerData(game);
    chooseGame();
    //console.log(playerData)
    popUpOpen = false;
  });

  noText.innerHTML = "No, Keep Profil";
  noText.style.fontFamily = "SF-Pro";
  noText.style.fontSize = "18px";
  noText.style.color = "white";

  noButton.style.display = "inline-block";
  noButton.style.overflow = "hidden";
  noButton.style.position = "absolute";
  noButton.style.top = "92%";
  noButton.style.left = "57.5%";
  noButton.style.transform = "translate(-50%, -50%)";
  noButton.style.border = "2px solid black";
  noButton.style.backgroundColor = "rgb(48, 47, 47)";
  noButton.style.borderRadius = "25px";
  noButton.style.width = "25%";
  noButton.style.height = "10%";

  noButton.addEventListener("mouseover", () => {
    noButton.style.cursor = "pointer";
    noButton.style.backgroundColor = "rgb(30, 30, 30)";
  });

  noButton.addEventListener("mouseleave", () => {
    noButton.style.cursor = "auto";
    noButton.style.backgroundColor = "rgb(48, 47, 47)";
  });

  noButton.addEventListener("click", () => {
    body.removeChild(backgroundDiv);
    popUpOpen = false;
  });

  backgroundDiv.appendChild(confirmHeader);
  backgroundDiv.appendChild(confirmText);
  noButton.appendChild(noText);
  backgroundDiv.appendChild(noButton);
  yesButton.appendChild(yesImg);
  yesButton.appendChild(yesText);
  backgroundDiv.appendChild(yesButton);
  body.appendChild(backgroundDiv);
}

function gameScreen(game) {
  body.innerHTML = "";
  body.removeAttribute("style");

  body.style.backgroundImage = "url(img/classroom__start_big.png)";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";

  settingsButton(game);

  let startButton = document.createElement("button");
  startButton.style.display = "inline-block";
  startButton.style.borderRadius = "100px";
  startButton.style.overflow = "hidden";
  startButton.style.border = "none";
  startButton.style.backgroundColor = "transparent";
  startButton.style.position = "absolute";
  startButton.style.top = "70%";
  startButton.style.left = "50%";
  startButton.style.transform = "translate(-50%, -50%)";
  startButton.style.boxShadow = "10px 10px 40px 10px rgba(255,255,255,1)";

  let startButtonImg = document.createElement("img");
  startButtonImg.src = "img/green_button.png";
  startButtonImg.style.height = "100%";
  startButtonImg.style.width = "100%";
  startButtonImg.style.display = "block";

  let startButtonText = document.createElement("p");
  startButtonText.innerHTML = "START";
  startButtonText.style.position = "absolute";
  startButtonText.style.top = "50%";
  startButtonText.style.left = "50%";
  startButtonText.style.transform = "translate(-50%, -50%)";
  startButtonText.style.fontFamily = "SF-Pro";
  startButtonText.style.fontSize = "25px";
  startButtonText.style.color = "black";

  startButton.addEventListener("mouseover", () => {
    startButton.style.cursor = "pointer";
    startButton.style.filter = "grayscale(50%)";
  });

  startButton.addEventListener("mouseleave", () => {
    startButton.style.cursor = "auto";
    startButton.style.filter = "grayscale(0%)";
  });

  startButton.addEventListener("click", () => {
    gameStarted(game);
  });

  startButton.appendChild(startButtonText);
  startButton.appendChild(startButtonImg);
  body.appendChild(startButton);

  let moveText = document.createElement("p");
  moveText.innerHTML = "PRESS TO MOVE";
  moveText.style.display = "inline-block";
  moveText.style.fontFamily = "SF-Pro";
  moveText.style.color = "white";
  moveText.style.fontSize = "45px";
  moveText.style.textShadow =
    "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, " +
    "1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000";
  moveText.style.position = "absolute";
  moveText.style.top = "15%";
  moveText.style.left = "41.5%";
  moveText.style.transform = "translate(-50%, -50%)";
  moveText.style.animation = "gameText 2s infinite linear";
  moveText.style.transformOrigin = "center";

  body.appendChild(moveText);

  let forwardDiv = document.createElement("div");
  forwardDiv.style.display = "inline-block";
  forwardDiv.style.overflow = "hidden";
  forwardDiv.style.position = "absolute";
  forwardDiv.style.top = "27.5%";
  forwardDiv.style.left = "45%";
  forwardDiv.style.transform = "translate(-50%, -50%)";
  forwardDiv.style.width = "64px";
  forwardDiv.style.height = "64px";

  let forwardImg = document.createElement("img");
  forwardImg.src = "img/key.png";
  forwardImg.style.height = "100%";
  forwardImg.style.width = "100%";
  forwardImg.style.display = "block";

  let forwardText = document.createElement("p");
  forwardText.id = "forwardText";
  forwardText.innerHTML = playerData.Game[game - 1].Movement.Forward;
  forwardText.style.display = "inline-block";
  forwardText.style.fontFamily = "SF-Pro";
  forwardText.style.color = "white";
  forwardText.style.fontSize = "18px";
  forwardText.style.position = "absolute";
  forwardText.style.top = "50%";
  forwardText.style.left = "50%";
  forwardText.style.transform = "translate(-50%, -50%)";
  forwardText.style.overflow = "hidden";

  forwardDiv.appendChild(forwardImg);
  forwardDiv.appendChild(forwardText);
  body.appendChild(forwardDiv);

  let backwardDiv = document.createElement("div");
  backwardDiv.style.display = "inline-block";
  backwardDiv.style.overflow = "hidden";
  backwardDiv.style.position = "absolute";
  backwardDiv.style.top = "27.5%";
  backwardDiv.style.left = "55%";
  backwardDiv.style.transform = "translate(-50%, -50%)";
  backwardDiv.style.width = "64px";
  backwardDiv.style.height = "64px";

  let backwardImg = document.createElement("img");
  backwardImg.src = "img/key.png";
  backwardImg.style.height = "100%";
  backwardImg.style.width = "100%";
  backwardImg.style.display = "block";

  let backwardText = document.createElement("p");
  backwardText.id = "backwardText";
  backwardText.innerHTML = playerData.Game[game - 1].Movement.Backward;
  backwardText.style.display = "inline-block";
  backwardText.style.fontFamily = "SF-Pro";
  backwardText.style.color = "white";
  backwardText.style.fontSize = "18px";
  backwardText.style.position = "absolute";
  backwardText.style.top = "50%";
  backwardText.style.left = "50%";
  backwardText.style.transform = "translate(-50%, -50%)";
  backwardText.style.overflow = "hidden";

  backwardDiv.appendChild(backwardImg);
  backwardDiv.appendChild(backwardText);
  body.appendChild(backwardDiv);

  let jumpText = document.createElement("p");
  jumpText.innerHTML = "PRESS TO JUMP";
  jumpText.style.display = "inline-block";
  jumpText.style.fontFamily = "SF-Pro";
  jumpText.style.color = "white";
  jumpText.style.fontSize = "35px";
  jumpText.style.textShadow =
    "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, " +
    "1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000";
  jumpText.style.position = "absolute";
  jumpText.style.top = "35.25%";
  jumpText.style.left = "43.5%";
  jumpText.style.transform = "translate(-50%, -50%)";
  jumpText.style.animation = "gameText 1.5s infinite linear";
  jumpText.style.transformOrigin = "center";

  body.appendChild(jumpText);

  let jumpDiv = document.createElement("div");
  jumpDiv.style.display = "inline-block";
  jumpDiv.style.overflow = "hidden";
  jumpDiv.style.position = "absolute";
  jumpDiv.style.top = "45%";
  jumpDiv.style.left = "50%";
  jumpDiv.style.transform = "translate(-50%, -50%)";
  jumpDiv.style.width = "64px";
  jumpDiv.style.height = "64px";

  let jumpImg = document.createElement("img");
  jumpImg.src = "img/key.png";
  jumpImg.style.height = "100%";
  jumpImg.style.width = "100%";
  jumpImg.style.display = "block";

  let jumpButtonText = document.createElement("p");
  jumpButtonText.id = "jumpText";
  jumpButtonText.innerHTML = playerData.Game[game - 1].Movement.Jump;
  jumpButtonText.style.display = "inline-block";
  jumpButtonText.style.fontFamily = "SF-Pro";
  jumpButtonText.style.color = "white";
  jumpButtonText.style.fontSize = "18px";
  jumpButtonText.style.position = "absolute";
  jumpButtonText.style.top = "50%";
  jumpButtonText.style.left = "50%";
  jumpButtonText.style.transform = "translate(-50%, -50%)";
  jumpButtonText.style.overflow = "hidden";

  jumpDiv.appendChild(jumpImg);
  jumpDiv.appendChild(jumpButtonText);
  body.appendChild(jumpDiv);

  let playerNameDiv = document.createElement("div");
  playerNameDiv.style.display = "inline-block";
  playerNameDiv.style.overflow = "hidden";
  playerNameDiv.style.position = "absolute";
  playerNameDiv.style.top = "5%";
  playerNameDiv.style.left = "50%";
  playerNameDiv.style.transform = "translate(-50%, -50%)";
  playerNameDiv.style.width = "256px";
  playerNameDiv.style.height = "32px";
  playerNameDiv.style.backgroundColor = "rgb(53, 53, 53)";
  playerNameDiv.style.borderRadius = "10px";
  playerNameDiv.style.border = "3px solid rgb(35, 35, 35)";

  let playerName = document.createElement("p");
  playerName.innerHTML = playerData.Game[game - 1].PlayerName;
  playerName.style.display = "inline-block";
  playerName.style.fontFamily = "SF-Pro";
  playerName.style.color = "white";
  playerName.style.fontSize = "20px";
  playerName.style.textShadow =
    "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, " +
    "1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000";
  playerName.style.position = "absolute";
  playerName.style.top = "50%";
  playerName.style.left = "50%";
  playerName.style.transform = "translate(-50%, -50%)";
  playerName.style.overflow = "hidden";

  playerNameDiv.appendChild(playerName);
  body.appendChild(playerNameDiv);

  let shopButton = document.createElement("button");
  shopButton.style.display = "inline-block";
  shopButton.style.borderRadius = "100px";
  shopButton.style.overflow = "hidden";
  shopButton.style.border = "none";
  shopButton.style.backgroundColor = "transparent";
  shopButton.style.position = "absolute";
  shopButton.style.top = "3%";
  shopButton.style.left = "95%";
  shopButton.style.transform = "translate(-50%, -50%)";
  shopButton.style.width = "48px";
  shopButton.style.height = "38px";

  let shopButtonImg = document.createElement("img");
  shopButtonImg.src = "img/blue_button.png";
  shopButtonImg.style.height = "100%";
  shopButtonImg.style.width = "100%";
  shopButtonImg.style.display = "block";

  let shopButtonIcon = document.createElement("img");
  shopButtonIcon.src = "img/shop-icon.png";
  shopButtonIcon.style.width = "80%";
  shopButtonIcon.style.height = "75%";
  shopButtonIcon.style.display = "block";
  shopButtonIcon.style.position = "absolute";
  shopButtonIcon.style.top = "50%";
  shopButtonIcon.style.left = "50%";
  shopButtonIcon.style.transform = "translate(-50%, -50%)";

  shopButton.addEventListener("mouseover", () => {
    shopButton.style.cursor = "pointer";
    shopButton.style.filter = "grayscale(50%)";
  });

  shopButton.addEventListener("mouseleave", () => {
    shopButton.style.cursor = "auto";
    shopButton.style.filter = "grayscale(0%)";
  });

  shopButton.addEventListener("click", () => {
    //shop(game)
  });

  shopButton.appendChild(shopButtonImg);
  shopButton.appendChild(shopButtonIcon);
  body.appendChild(shopButton);

  let statsDiv = document.createElement("div");
  statsDiv.style.display = "inline-block";
  statsDiv.style.overflow = "hidden";
  statsDiv.style.position = "absolute";
  statsDiv.style.top = "7.5%";
  statsDiv.style.left = "7.5%";
  statsDiv.style.transform = "translate(-50%, -50%)";
  statsDiv.style.width = "256px";
  statsDiv.style.height = "100px";
  statsDiv.style.backgroundColor = "rgb(53, 53, 53, 0.7)";
  statsDiv.style.borderRadius = "20px";
  statsDiv.style.border = "3px solid rgb(35, 35, 35, 0.7)";

  let score = document.createElement("p");
  score.innerHTML = `Best Score: ${playerData.Game[game - 1].BestScore}`;
  score.style.display = "inline-block";
  score.style.fontFamily = "SF-Pro";
  score.style.color = "white";
  score.style.fontSize = "20px";
  score.style.position = "absolute";
  score.style.top = "7.5%";
  score.style.left = "2%";

  let coinsImg = document.createElement("img");
  coinsImg.src = `img/${coinImg}`;
  coinsImg.style.display = "block";
  coinsImg.style.width = "85px";
  coinsImg.style.height = "64px";
  coinsImg.style.position = "absolute";
  coinsImg.style.top = "55%";
  coinsImg.style.left = "10%";
  coinsImg.style.transform = "translate(-50%, -50%)";
  coinsImg.style.overflow = "hidden";

  let coins = document.createElement("p");
  coins.innerHTML = `: ${playerData.Game[game - 1].Coins}`;
  coins.style.display = "inline-block";
  coins.style.fontFamily = "SF-Pro";
  coins.style.color = "white";
  coins.style.fontSize = "20px";
  coins.style.position = "absolute";
  coins.style.top = "51.5%";
  coins.style.left = "17.5%";
  coins.style.transform = "translate(0, -50%)";
  coins.style.overflow = "hidden";

  statsDiv.appendChild(score);
  statsDiv.appendChild(coinsImg);
  statsDiv.appendChild(coins);
  body.appendChild(statsDiv);
}

function gameStarted(game) {
  body.innerHTML = "";
  body.removeAttribute("style");

  body.style.backgroundImage = "url(img/classroom_without-tables.png)";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
  body.style.overflow = "hidden";

  settingsButton(game);

  let shopButton = document.createElement("button");
  shopButton.style.display = "inline-block";
  shopButton.style.borderRadius = "100px";
  shopButton.style.overflow = "hidden";
  shopButton.style.border = "none";
  shopButton.style.backgroundColor = "transparent";
  shopButton.style.position = "absolute";
  shopButton.style.top = "3%";
  shopButton.style.left = "95%";
  shopButton.style.transform = "translate(-50%, -50%)";
  shopButton.style.width = "48px";
  shopButton.style.height = "38px";

  let shopButtonImg = document.createElement("img");
  shopButtonImg.src = "img/blue_button.png";
  shopButtonImg.style.height = "100%";
  shopButtonImg.style.width = "100%";
  shopButtonImg.style.display = "block";

  let shopButtonIcon = document.createElement("img");
  shopButtonIcon.src = "img/shop-icon.png";
  shopButtonIcon.style.width = "80%";
  shopButtonIcon.style.height = "75%";
  shopButtonIcon.style.display = "block";
  shopButtonIcon.style.position = "absolute";
  shopButtonIcon.style.top = "50%";
  shopButtonIcon.style.left = "50%";
  shopButtonIcon.style.transform = "translate(-50%, -50%)";

  shopButton.addEventListener("mouseover", () => {
    shopButton.style.cursor = "pointer";
    shopButton.style.filter = "grayscale(50%)";
  });

  shopButton.addEventListener("mouseleave", () => {
    shopButton.style.cursor = "auto";
    shopButton.style.filter = "grayscale(0%)";
  });

  shopButton.addEventListener("click", () => {
    //shop(game)
  });

  shopButton.appendChild(shopButtonImg);
  shopButton.appendChild(shopButtonIcon);
  body.appendChild(shopButton);

  let playerNameDiv = document.createElement("div");
  playerNameDiv.style.display = "inline-block";
  playerNameDiv.style.overflow = "hidden";
  playerNameDiv.style.position = "absolute";
  playerNameDiv.style.top = "5%";
  playerNameDiv.style.left = "50%";
  playerNameDiv.style.transform = "translate(-50%, -50%)";
  playerNameDiv.style.width = "256px";
  playerNameDiv.style.height = "32px";
  playerNameDiv.style.backgroundColor = "rgb(53, 53, 53)";
  playerNameDiv.style.borderRadius = "10px";
  playerNameDiv.style.border = "3px solid rgb(35, 35, 35)";

  let playerName = document.createElement("p");
  playerName.innerHTML = playerData.Game[game - 1].PlayerName;
  playerName.style.display = "inline-block";
  playerName.style.fontFamily = "SF-Pro";
  playerName.style.color = "white";
  playerName.style.fontSize = "20px";
  playerName.style.textShadow =
    "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, " +
    "1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000";
  playerName.style.position = "absolute";
  playerName.style.top = "50%";
  playerName.style.left = "50%";
  playerName.style.transform = "translate(-50%, -50%)";
  playerName.style.overflow = "hidden";

  playerNameDiv.appendChild(playerName);
  body.appendChild(playerNameDiv);

  let statsDiv = document.createElement("div");
  statsDiv.style.display = "inline-block";
  statsDiv.style.overflow = "hidden";
  statsDiv.style.position = "absolute";
  statsDiv.style.top = "7.5%";
  statsDiv.style.left = "7.5%";
  statsDiv.style.transform = "translate(-50%, -50%)";
  statsDiv.style.width = "256px";
  statsDiv.style.height = "100px";
  statsDiv.style.backgroundColor = "rgb(53, 53, 53, 0.7)";
  statsDiv.style.borderRadius = "20px";
  statsDiv.style.border = "3px solid rgb(35, 35, 35, 0.7)";

  let score = document.createElement("p");
  score.innerHTML = `Best Score: ${playerData.Game[game - 1].BestScore}`;
  score.style.display = "inline-block";
  score.style.fontFamily = "SF-Pro";
  score.style.color = "white";
  score.style.fontSize = "20px";
  score.style.position = "absolute";
  score.style.top = "7.5%";
  score.style.left = "2%";

  let coinsImg = document.createElement("img");
  coinsImg.src = `img/${coinImg}`;
  coinsImg.style.display = "block";
  coinsImg.style.width = "85px";
  coinsImg.style.height = "64px";
  coinsImg.style.position = "absolute";
  coinsImg.style.top = "55%";
  coinsImg.style.left = "10%";
  coinsImg.style.transform = "translate(-50%, -50%)";
  coinsImg.style.overflow = "hidden";

  let coins = document.createElement("p");
  coins.innerHTML = `: ${playerData.Game[game - 1].Coins}`;
  coins.style.display = "inline-block";
  coins.style.fontFamily = "SF-Pro";
  coins.style.color = "white";
  coins.style.fontSize = "20px";
  coins.style.position = "absolute";
  coins.style.top = "51.5%";
  coins.style.left = "17.5%";
  coins.style.transform = "translate(0, -50%)";
  coins.style.overflow = "hidden";

  statsDiv.appendChild(score);
  statsDiv.appendChild(coinsImg);
  statsDiv.appendChild(coins);
  body.appendChild(statsDiv);

  let canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  let ctx = canvas.getContext("2d");

  let groundHeight = 100;
  let playerWidth = 50;
  let playerHeight = 70;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let playerX = 0;
  let playerY = canvas.height - groundHeight - playerHeight;
  let playerSpeed = 6;
  let playerDirection = 0;
  let velocityY = 0;
  let gravity = 0.8;
  let jumpPower = -15;
  let isJumping = false;
  let jumpTimer = 0;
  let maxJumpTime = 60;

  let isInAir = false;

  let groundImage = new Image();
  groundImage.src = "img/cyan_button.png";

  let ground = [];
  let groundSpeed = 4;
  let gameStarted = false;

  function drawPlayer() {
    ctx.fillStyle = "red";
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
  }

  function drawGround() {
    ground.forEach((segment) => {
      ctx.drawImage(
        groundImage,
        segment.x,
        canvas.height - groundHeight,
        segment.width,
        groundHeight
      );
    });
  }

  function movePlayer() {
    let wasOnGround = false;

    for (let i = 0; i < ground.length; i++) {
      let platform = ground[i];

      let platformTop = canvas.height - groundHeight;
      let playerBottom = playerY + playerHeight;
      let nextPlayerBottom = playerBottom + velocityY;

      let isFallingOntoPlatform =
        playerBottom <= platformTop &&
        nextPlayerBottom >= platformTop &&
        playerX + playerWidth > platform.x &&
        playerX < platform.x + platform.width;

      if (isFallingOntoPlatform) {
        playerY = platformTop - playerHeight;
        velocityY = 0;
        isJumping = false;
        wasOnGround = true;
        break;
      }
    }

    if (!wasOnGround) {
      velocityY += gravity;
      isJumping = true;
    }

    playerY += velocityY;

    let groundY = canvas.height - groundHeight - playerHeight;
    if (playerY >= groundY) {
      playerY = groundY;
      velocityY = 0;
      isJumping = false;
    }

    playerX += playerSpeed * playerDirection;
    playerX = Math.max(0, Math.min(playerX, canvas.width / 2 - playerWidth));
  }

  function jump() {
    let isGrounded = false;
    let groundY = canvas.height - groundHeight - playerHeight;

    if (playerY >= groundY - 1 && playerY <= groundY + 1) {
      isGrounded = true;
    } else {
      for (let i = 0; i < ground.length; i++) {
        let platform = ground[i];
        let platformTop = canvas.height - groundHeight;
        let playerBottom = playerY + playerHeight;

        let isOnPlatform =
          playerBottom >= platformTop - 2 &&
          playerBottom <= platformTop + 2 &&
          playerX + playerWidth > platform.x &&
          playerX < platform.x + platform.width;

        if (isOnPlatform) {
          isGrounded = true;
          break;
        }
      }
    }

    if (isGrounded && !isJumping) {
      velocityY = jumpPower;
      isJumping = true;
    }
  }

  function moveGround() {
    for (let i = 0; i < ground.length; i++) {
      ground[i].x -= groundSpeed;
    }

    if (
      ground[ground.length - 1].x + ground[ground.length - 1].width <
      canvas.width
    ) {
      let width = Math.random() * (200 - 100) + 100;
      let gap = Math.random() * (200 - 100) + 100;
      ground.push({ x: canvas.width + gap, width: width });
    }

    if (ground[0].x + ground[0].width < 0) {
      ground.shift();
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGround();
    drawPlayer();
    movePlayer();

    if (playerX >= canvas.width / 2) {
      moveGround();
    }

    if (gameStarted) {
      requestAnimationFrame(draw);
    }
  }

  window.addEventListener("click", function () {
    if (!gameStarted) {
      gameStarted = true;
      gameLoop();
    }
  });

  for (let i = 0; i < 20; i++) {
    let width = Math.random() * (150 - 80) + 80;
    let xPos = i * (width + Math.random() * 100);
    ground.push({ x: xPos, width: width });
  }

  function gameLoop() {
    draw();
  }

  document.addEventListener("keydown", (e) => {
    let jumpKey = playerData.Game[game - 1].Movement.Jump;
    if (jumpKey === "space") jumpKey = " ";
    let forwardKey = playerData.Game[game - 1].Movement.Forward;
    let backwardKey = playerData.Game[game - 1].Movement.Backward;

    if (e.key === backwardKey) {
      playerDirection = -1;
    } else if (e.key === forwardKey) {
      playerDirection = 1;
    } else if (e.key === jumpKey) {
      jump();
    }
  });

  document.addEventListener("keyup", (e) => {
    let forwardKey = playerData.Game[game - 1].Movement.Forward;
    let backwardKey = playerData.Game[game - 1].Movement.Backward;

    if (e.key === backwardKey || e.key === forwardKey) {
      playerDirection = 0;
    }
  });
}
