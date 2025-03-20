let body = document.body;

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
  gameName1.style.fontSize = "50px"
  gameName1.style.textShadow = 
  "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, " +
  "1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000";
  gameName1.style.transform = "rotateZ(-15deg)"
  gameNameDiv.appendChild(gameName1);
  
  gameName2.innerHTML = "RUNNER";
  gameName2.style.display = "inline-block";
  gameName2.style.fontFamily = "Pixel-Font";
  gameName2.style.color = "white";
  gameName2.style.fontSize = "50px"
  gameName2.style.textShadow = 
  "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, " +
  "1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000";
  gameName2.style.marginLeft = "50%"
  gameName2.style.transform = "rotateZ(-15deg)"
  gameNameDiv.appendChild(gameName2);
  
  gameNameDiv.style.display = "flex"
  gameNameDiv.style.flexDirection = "column"
  gameNameDiv.style.position = "absolute"
  gameNameDiv.style.top = "25%"
  gameNameDiv.style.right = "35%"
  gameNameDiv.style.animation = "gameText 2s infinite linear"

  body.appendChild(gameNameDiv);
}

chooseGame();
