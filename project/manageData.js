let PlayerBluePrint = {
    Used: false,
    PlayerName: "",
    Coins: 0,
    BestScore: 0,
    GlobalScoreMultiplier: 1,
    Life: 1,
    SpeedMultiplier: 1,
    ItemUnlocked: {
      Skins: {},
      Layouts: {},
    },
  }




let playerData = {
  Game: [
    {
      Used: false,
      PlayerName: "",
      Coins: 0,
      BestScore: 0,
      GlobalScoreMultiplier: 1,
      Life: 1,
      SpeedMultiplier: 1,
      ItemUnlocked: {
        Skins: {},
        Layouts: {},
      },
    },
    {
      Used: false,
      PlayerName: "",
      Coins: 0,
      BestScore: 0,
      GlobalScoreMultiplier: 1,
      Life: 1,
      SpeedMultiplier: 1,
      ItemUnlocked: {
        Skins: {},
        Layouts: {},
      },
    },
    {
      Used: false,
      PlayerName: "",
      Coins: 0,
      BestScore: 0,
      GlobalScoreMultiplier: 1,
      Life: 1,
      SpeedMultiplier: 1,
      ItemUnlocked: {
        Skins: {},
        Layouts: {},
      },
    },
  ],
};



function setPlayerData(game, data) {
  playerData.Game[game] = data;
  localStorage.setItem(playerData, JSON.stringify(playerData));
}

function getPlayerData(game) {
  return JSON.parse(localStorage.getItem(playerData)).Game[game];
}

function savePlayerData() {
  localStorage.setItem(playerData, JSON.stringify(playerData));
}

function removePlayerData(game) {
    playerData.Game[game] = PlayerBluePrint
    localStorage.setItem(playerData, JSON.stringify(playerData));
}



function setData(data, name) {
  localStorage.setItem(name, JSON.stringify(data));
}

function getData(name) {
  return JSON.parse(localStorage.getItem(name));
}

function removeData(name) {
  localStorage.removeItem(name);
}

function clearStorage() {
  localStorage.clear();
}
