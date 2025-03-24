let body = document.body;
const resetConfirmText =
  "Are you sure you want to reset this profile?<br>Please note that all progress, settings, <br>and data associated with this profile will be permanently lost <br>if you proceed with the reset!";

loadPlayerData();

document.addEventListener("keydown", function (event) {
  if (event.key === "k") {
    resetAllPlayerData();
    window.location.reload();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "c") {
    confirmScreen(-1, resetConfirmText);
  }
});

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
    confirmScreen(game, resetConfirmText);
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
  backButton.style.height = "23px";

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
  gameText.style.fontSize = "12px";
  gameText.style.color = "black";

  gameDisplay.style.display = "inline-block";
  gameDisplay.style.overflow = "hidden";
  gameDisplay.style.position = "absolute";
  gameDisplay.style.top = "3%";
  gameDisplay.style.left = "96.5%";
  gameDisplay.style.transform = "translate(-50%, -50%)";
  gameDisplay.style.width = "95px";
  gameDisplay.style.height = "23px";

  gameDisplay.appendChild(gameImg);
  gameDisplay.appendChild(gameText);
  body.appendChild(gameDisplay);
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
}
