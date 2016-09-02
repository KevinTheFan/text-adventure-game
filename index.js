var game = {
  start: function() {
    var readline = require('readline');

    var readlineThing = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

      readlineThing.question("What is your name? ", function(answer) {
      Name(answer);
      console.log("Hi there " + answer + ", welcome to the game!")
      readlineThing.question("Choose your class: (Mage, Warrior, Thief) ", function(answer) {
      chooseClass(answer);
      console.log(Player)
      readlineThing.close();
    })
  })
  },
    restart: function() {
    game.start();
  }
}

var Player = {
  name: "Khan",
  race: "Human",
  class: "Warrior",
  gender: "Male",
  health: "20",
  skill: {
    1: null,
    2: null,
    3: null
  },
  eat: function() {
    if (Player.health == 19) {
      health = 20;
    } else if (Player.health == 20) {
      console.log("You are on full health. Stop eating.")
    } else {
      health = health + 2
    }
  }
}

var FinalBoss = {
  name: "Alan the Terrible",
  health: 100,
  skill: {
    attack: function() {
      console.log("Get rekt scrub, mlg 360 no scope");
      Player.health = Player.health - 10;
    },
    taunt: function() {
      console.log("Go home noob");
    }
  }
}

function Name(answer) {
  Player.name = answer;
}

function chooseClass(answer) {
  Player.class = answer;
  if (Player.class == "Mage") {
    Player.skill["1"] = function() {
      console.log("Take this Motherf*cker!")
      finalBoss.health = finalBoss.health - 10;
    }
    Player.skill["2"] = function() {
      console.log("Eat fire");
      finalBoss.health = finalBoss.health - 20;
    }
    Player.skill["3"] = function() {
      console.log("I haz more health")
      if (Player.health > 10) {
        Player.health = 20;
      } else {
        Player.health = Player.health + 8;
      }
    }
  } else if (Player.class == "Warrior") {
      Player.skill["1"] = function() {
        console.log("Take this Motherf*cker!")
        finalBoss.health = finalBoss.health - 7;
      }
      Player.skill["2"] = function() {
        console.log("Stab Stab Stab");
        finalBoss.health = finalBoss.health - 12;
      }
      Player.skill["3"] = function() {
        console.log("Boom!")
        finalBoss.health = finalBoss.health - 20
      }
    } else if (Player.class == "Thief") {
        Player.skill["1"] = function() {
          console.log("Take this Motherf*cker!")
          finalBoss.health = finalBoss.health - 7;
        }
        Player.skill["2"] = function() {
          console.log("Shanking Intensifies");
          finalBoss.health = finalBoss.health - 9;
        }
        Player.skill["3"] = function() {
          console.log("Eat arrow")
          finalBoss.health = finalBoss.health - 5
        }
          }
        }

game.start();
