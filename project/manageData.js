let PlayerBluePrint = {
  Used: false,
  PlayerName: "NAME",
  Coins: 0,
  BestScore: 0,
  GlobalScoreMultiplier: 1,
  Life: 1,
  SpeedMultiplier: 1,
  JumpPower: 0,
  Luck: 1,
  Sprite: "img/thomas_sprite_all.png",
  ItemUnlocked: {
    Skins: {},
    Items: {
      0: false, // 0 = Watch
      1: false, // 1 = Eistee
      2: false, // 2 = Crocs
    },
  },
  Movement: {
    Forward: "d",
    Backward: "a",
    Jump: "space",
  },
};

let playerData = {
  Game: [
    {
      Used: false,
      PlayerName: "NAME",
      Coins: 0,
      BestScore: 0,
      GlobalScoreMultiplier: 1,
      Life: 1,
      SpeedMultiplier: 1,
      JumpPower: 0,
      Luck: 1,
      Sprite: "img/thomas_sprite_all.png",
      ItemUnlocked: {
        Skins: {},
        Items: {
          0: false, // 0 = Watch
          1: false, // 1 = Eistee
          2: false, // 2 = Crocs
        },
      },
      Movement: {
        Forward: "d",
        Backward: "a",
        Jump: "space",
      },
    },
    {
      Used: false,
      PlayerName: "NAME",
      Coins: 0,
      BestScore: 0,
      GlobalScoreMultiplier: 1,
      Life: 1,
      SpeedMultiplier: 1,
      JumpPower: 0,
      Luck: 1,
      Sprite: "img/thomas_sprite_all.png",
      ItemUnlocked: {
        Skins: {},
        Items: {
          0: false, // 0 = Watch
          1: false, // 1 = Eistee
          2: false, // 2 = Crocs
        },
      },
      Movement: {
        Forward: "d",
        Backward: "a",
        Jump: "space",
      },
    },
    {
      Used: false,
      PlayerName: "NAME",
      Coins: 0,
      BestScore: 0,
      GlobalScoreMultiplier: 1,
      Life: 1,
      SpeedMultiplier: 1,
      JumpPower: 0,
      Luck: 1,
      Sprite: "img/thomas_sprite_all.png",
      ItemUnlocked: {
        Skins: {},
        Items: {
          0: false, // 0 = Watch
          1: false, // 1 = Eistee
          2: false, // 2 = Crocs
        },
      },
      Movement: {
        Forward: "d",
        Backward: "a",
        Jump: "space",
      },
    },
  ],
};

function setPlayerData(game, data) {
  if (game != -1) {
    playerData.Game[game - 1] = data;
    localStorage.setItem("playerData", JSON.stringify(playerData));
  }
}

function getPlayerData(game) {
  if (game != -1) {
    return JSON.parse(localStorage.getItem("playerData")).Game[game - 1];
  }
}

function savePlayerData() {
  localStorage.setItem("playerData", JSON.stringify(playerData));
}

function loadPlayerData() {
  if (localStorage.getItem("playerData") !== null) {
    playerData = JSON.parse(localStorage.getItem("playerData"));
    //console.log(playerData)
  } else {
    savePlayerData();
    loadPlayerData();
  }
}

function removePlayerData(game) {
  if (game != -1) {
    playerData.Game[game - 1] = PlayerBluePrint;
    localStorage.setItem("playerData", JSON.stringify(playerData));
  }
}

function resetPlayerData(game) {
  if (game != -1) {
    playerData.Game[game - 1] = PlayerBluePrint;
    //console.log(playerData)
    savePlayerData();
  }
}

function resetAllPlayerData() {
  for (let i = 0; i < 3; i++) {
    playerData.Game[i] = PlayerBluePrint;
  }
  savePlayerData();
  console.log(playerData);
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
