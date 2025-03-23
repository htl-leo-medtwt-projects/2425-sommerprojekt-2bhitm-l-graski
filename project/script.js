let body = document.body;

loadPlayerData();

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
  button1.style.backgroundColor = "rgba(0, 0, 0, 0)";
  button1.style.border = "0px solid rgba(0, 0, 0, 0)";

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
    startGame(1)
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
  button2.style.backgroundColor = "rgba(0, 0, 0, 0)";
  button2.style.border = "0px solid rgba(0, 0, 0, 0)";

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
    startGame(2)
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
  button3.style.backgroundColor = "rgba(0, 0, 0, 0)";
  button3.style.border = "0px solid rgba(0, 0, 0, 0)";

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
    startGame(3)
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
  body.innerHTML = ""
  body.removeAttribute("style");

  console.log(playerData)
  playerData.Game[game-1].Used = true
  savePlayerData()
  chooseGame()
}
