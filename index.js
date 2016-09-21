var readline = require('readline');

var readlineThing = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function wait(ms) {
  var start = new Date().getTime();
  for (var end = start; end < start + ms;) {
    end = new Date().getTime();
  }
}

function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}

var game = {
  start: function() {
    scroll()
    wait(5000);
    console.log("[Character Customization Begin]")
    wait(500);
    initialize();
  },
    restart: function() {
    game.start();
  }
}

function scroll() {
  console.log(" ");
  wait(1000);
  console.log("   ---=====---");
  wait(1000);
  console.log("  Game Starting");
  wait(1000);
  console.log("   ---=====---");
  wait(1000);
  console.log(" ");
}

function initialize() {
  readlineThing.question("What is your name? ", function(answer) {
    Name(answer);
      console.log("Hi there " + answer + ", welcome to the game!")
      askClass()
  })
}

function askClass() {
  readlineThing.question("Choose your class: (Mage, Paladin, Thief) ", function(answer) {
  chooseClass(answer);
  askGender()
  })
}

function askGender() {
  readlineThing.question("Choose your gender: (Male, Female) ", function(answer) {
  chooseGender(answer);
  askRace()
  })
}

function askRace() {
  readlineThing.question("Choose your race: (Dwarf, Human, Elf) ", function(answer) {
    var raceCorrect = false;
    if (answer == "Human" || answer == "Elf" || answer == "Dwarf") {
      chooseRace(answer);
      raceCorrect = true;
    } else {
      askRace();
    }
    if (raceCorrect) {
      console.log("[Character Customization Complete]")
      delayedText()
    }
  })
}

var enemies = {
  finalBoss: {
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
  },
  goblin: {
    name: "Crimp",
    health: 10,
    skill: {
      attack: function() {
        console.log("Poke")
        Player.health = Player.health - 5;
      },
      goblinEat: function() {
        console.log("Gotta have my munchies");
        enemies.goblin.health = enemies.goblin.health + 2;
      }
    }
  }
}

var location = {
  town: {
    name: "Armondale",
    NPC: [],
    Monsters: null
  },
  woods: {
    name: "Nivia Forest",
    NPC: [],
    Monsters: enemies.finalBoss
  }
}

var currentEnemy = null;

var Player = {
  name: "",
  race: "",
  class: "",
  gender: "",
  health: "20",
  currentLocation : location.town,
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

function Name(answer) {
  Player.name = answer;
}

function chooseGender(answer) {
  Player.gender = answer;
  if (Player.gender != "Male" && Player.gender != "Female")
    readlineThing.question("Please enter a valid gender: ", function(answer) {
    chooseGender(answer);
    askRace()
    })
}

function chooseRace(answer) {
  Player.race = answer;
}

function chooseClass(answer) {
  Player.class = answer;
  if (Player.class == "Mage") {
    Player.skill["1"] = function() {
      console.log("Take this Motherf*cker!")
      currentEnemy.health = currentEnemy.health - 10;
    }
    Player.skill["2"] = function() {
      console.log("Eat fire");
      currentEnemy.health = currentEnemy.health - 20;
    }
    Player.skill["3"] = function() {
      console.log("I haz more health")
      if (Player.health > 10) {
        Player.health = 20;
      } else {
        Player.health = Player.health + 9;
      }
    }
  } else if (Player.class == "Paladin") {
      Player.skill["1"]d = function() {
        console.log("Take this Motherf*cker!")
        currentEnemy.health = currentEnemy.health - 7;
      }
      Player.skill["2"] = function() {
        console.log("Stab Jab Stab");
        currentEnemy.health = currentEnemy.health - 12;
      }
      Player.skill["3"] = function() {
        console.log("Boom!")
        currentEnemy.health = currentEnemy.health - 20
      }
    } else if (Player.class == "Thief") {
        Player.skill["1"] = function() {
          console.log("Take this Motherf*cker!")
          currentEnemy.health = currentEnemy.health - 7;
        }
        Player.skill["2"] = function() {
          console.log("Shanking Intensifies");
          currentEnemy.health = currentEnemy.health - 9;
        }
        Player.skill["3"] = function() {
          console.log("Eat arrow")
          currentEnemy.health = currentEnemy.health - 15;
        }
      } else {
        readlineThing.question("Please enter a valid class: ", function(answer) {
          chooseClass(answer);
          askGender()
        })
      }
    }

game.start();

function delayedText() {
  console.log("Loading...")
  wait(1000)
  console.log(" ");
  wait(1000)
  console.log("    ---=====---");
  wait(1000)
  console.log("   -=Greetings=-");
  wait(1000)
  console.log("Welcome to the Game");
  wait(1000)
  console.log("    ---=====---");
  wait(1000)
  console.log(" ")
  wait(1000)
  battle()
}

function battle() {
    console.log("You have encountered an enemy")
    wait(1000)
    readlineThing.question("Would you like to run or fight? (Run, Fight) ", function(answer) {
          if (answer == "Run") {
        console.log("You run away!");
      } else if (answer == "Fight") {
        console.log("You decide to fight!");
        if (Player.class == "Mage") {
          readlineThing.question("Choose an attack: (Bash, Fireball, Heal) ", function(answer) {
            if (answer == "Bash") {
              playerSkill2()
              if (Player.health == 0) {
                console.log("You are dead!")
              } else if (currentEnemy.health == 0) {
                console.log("Enemy defeated!")
              } else {
              }
            } else if (answer == "Fireball") {
              playerSkill1()
            } else if (answer == "Heal") {
              playerSkill3()
            } else {
              readlineThing.question("Please enter a valid action: ", function(answer) {

              })
            }
        })} else if (Player.class == "Paladin") {
          readlineThing.question("Choose an attack: (Bash, Stab, Bombing) ", function(answer) {
            if (answer == "Bash") {
              playerSkill2()
            } else if (answer == "Stab") {
              playerSkill1()
            } else if (answer == "Bombing") {
              playerSkill3()
            } else {
              readlineThing.question("Please enter a valid action: ", function(answer) {

              }) 
            }
        })} else if (Player.class == "Thief") {
          readlineThing.question("Choose an attack: (Bash, Shank, Shoot) ", function(answer) {
            if (answer == "Bash") {
              playerSkill2()
            } else if (answer == "Shank") {
              playerSkill1()
            } else if (answer == "Shoot") {
              playerSkill3()
            } else {
              readlineThing.question("Please enter a valid action: ",function(answer) {
                
              })
            }
        })
      } else {
        readlineThing.question("Please enter a valid action: ", function(answer) {
        })
      }
    }
    });
}