let PlayerBluePrint = {
  Used: false,
  Tutorial: false,
  PlayerName: "NAME",
  Coins: 0,
  BestScore: 0,
  GlobalScoreMultiplier: 1,
  Life: 1,
  SpeedMultiplier: 1,
  JumpPower: 0,
  Luck: 1,
  Sprite: "thomas_sprite",
  ItemUnlocked: {
    Skins: {
      0: {
        // Kohrer
        Bought: false,
        Active: false,
        Sprite: "kohrer_sprite",
      },
      1: {
        // Thomas
        Bought: true,
        Active: true,
        Sprite: "thomas_sprite",
      },
    },
    Items: {
      0: false, // 0 = Watch
      1: false, // 1 = Eistee
      2: false, // 2 = Crocs
      3: false, // 3 = belt
      4: false, // 4 = lotto
      5: false, // 5 = E53 Coupe
      6: false, // 7 = Kohrer
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
      Tutorial: false,
      PlayerName: "NAME",
      Coins: 0,
      BestScore: 0,
      GlobalScoreMultiplier: 1,
      Life: 1,
      SpeedMultiplier: 1,
      JumpPower: 0,
      Luck: 1,
      Sprite: "thomas_sprite",
      ItemUnlocked: {
        Skins: {
          0: {
            // Kohrer
            Bought: false,
            Active: false,
            Sprite: "kohrer_sprite",
          },
          1: {
            // Thomas
            Bought: true,
            Active: true,
            Sprite: "thomas_sprite",
          },
        },
        Items: {
          0: false, // 0 = Watch
          1: false, // 1 = Eistee
          2: false, // 2 = Crocs
          3: false, // 3 = belt
          4: false, // 4 = lotto
          5: false, // 5 = E53 Coupe
          6: false, // 7 = Kohrer
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
      Tutorial: false,
      PlayerName: "NAME",
      Coins: 0,
      BestScore: 0,
      GlobalScoreMultiplier: 1,
      Life: 1,
      SpeedMultiplier: 1,
      JumpPower: 0,
      Luck: 1,
      Sprite: "thomas_sprite",
      ItemUnlocked: {
        Skins: {
          0: {
            // Kohrer
            Bought: false,
            Active: false,
            Sprite: "kohrer_sprite",
          },
          1: {
            // Thomas
            Bought: true,
            Active: true,
            Sprite: "thomas_sprite",
          },
        },
        Items: {
          0: false, // 0 = Watch
          1: false, // 1 = Eistee
          2: false, // 2 = Crocs
          3: false, // 3 = belt
          4: false, // 4 = lotto
          5: false, // 5 = E53 Coupe
          6: false, // 7 = Kohrer
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
      Tutorial: false,
      PlayerName: "NAME",
      Coins: 0,
      BestScore: 0,
      GlobalScoreMultiplier: 1,
      Life: 1,
      SpeedMultiplier: 1,
      JumpPower: 0,
      Luck: 1,
      Sprite: "thomas_sprite",
      ItemUnlocked: {
        Skins: {
          0: {
            // Kohrer
            Bought: false,
            Active: false,
            Sprite: "kohrer_sprite",
          },
          1: {
            // Thomas
            Bought: true,
            Active: true,
            Sprite: "thomas_sprite",
          },
        },
        Items: {
          0: false, // 0 = Watch
          1: false, // 1 = Eistee
          2: false, // 2 = Crocs
          3: false, // 3 = belt
          4: false, // 4 = lotto
          5: false, // 5 = E53 Coupe
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

function buyShop(game) {
  for (let i = 0; i < playerData.Game[game].ItemUnlocked.Items.length; i++) {
    playerData.Game[game].ItemUnlocked.Items[i] = true;
  }
  savePlayerData();
}

function buyItem(game, item) {
  playerData.Game[game].ItemUnlocked.Items[item] = true;
  savePlayerData();
}

function buySkin(game, skin) {
  playerData.Game[game].ItemUnlocked.Skins[skin].Bought = true;
  savePlayerData();
}

function addCoins(game, coins) {
  playerData.Game[game].Coins += coins;
  savePlayerData();
}

function addLife(game, life) {
  playerData.Game[game].Life += life;
  savePlayerData();
}

function addLuck(game, luck) {
  playerData.Game[game].Luck += luck;
  savePlayerData();
}

function addSpeedMultiplier(game, speed) {
  playerData.Game[game].SpeedMultiplier += speed;
  savePlayerData();
}

function addJumpPower(game, jump) {
  playerData.Game[game].JumpPower += jump;
  savePlayerData();
}

function addGlobalScoreMultiplier(game, multiplier) {
  playerData.Game[game].GlobalScoreMultiplier += multiplier;
  savePlayerData();
}

