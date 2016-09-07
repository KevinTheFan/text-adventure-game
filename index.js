console.log("    ---====---\n  Game Starting\n    ---====---")

var readline = require('readline');

var readlineThing = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var game = {
  start: function() {
    console.log("[Character Customization Begin]")
    initialize();
  },
    restart: function() {
    game.start();
  }
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
  chooseRace(answer);
  console.log("[Character Customization Complete]")
  readlineThing.close()
  delayedText();
  })
}

var Player = {
  name: "",
  race: "",
  class: "",
  gender: "",
  health: "20",
  start: "",
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
  if (Player.race != "Dwarf" && Player.race != "Human" && Player.race != "Elf") {
    readlineThing.question("Please enter a valid race: ", function(answer) {
    chooseRace(answer);
    console.log("[Character Customization Complete]")
    readlineThing.close()
    delayedText();
  })
}}

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
  } else if (Player.class == "Paladin") {
      Player.skill["1"] = function() {
        console.log("Take this Motherf*cker!")
        finalBoss.health = finalBoss.health - 7;
      }
      Player.skill["2"] = function() {
        console.log("Stab Jab Stab");
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
      } else {
        readlineThing.question("Please enter a valid class: ", function(answer) {
          chooseClass(answer);
          askGender()
        })
      }
    }

game.start();

var load;
function delayedText() {
  console.log("Loading...")
  load = setTimeout(start, 1000);
}
function start() {
  console.log("    ---=====---\n    -=Greetings=-\nWelcome to the Game\n    ---=====---");
  p1di1()
}

var p1di1
function p1di1() {
  p1di1 = setTimeout(text001, 1000);
}
function text001() {
  console.log("This is the magical world of Fandemonium...")
  p1di2()
}

var p1di2;
function p1di2() {
  p1di2 = setTimeout(text002, 2000)
}
function text002() {
  console.log("...in this game you have to defeat monsters...")
  p1di3()
}

var p1di3;
function p1di3() {
  p1di3 = setTimeout(text003, 2000)
}
function text003() {
  console.log("...and destroy the evil forces...")
  p1di4()
}

var p1di4;
function p1di4() {
  p1di4 = setTimeout(text004, 2000)
}
function text004() {
  console.log("...Good Luck!")
  menu();
}

function menu() {
  readlineThing.question("Type (Start) to begin ", function(answer) {
  menuAnswer(answer);
  readlineThing.close()
  })
}
function menuAnswer(answer) {
  Player.start = answer;
  if (Player.start != "Start")
    readlineThing.question("Type (Start) to begin ", function(answer) {
    menuAnswer(answer);
    readlineThing.close()
    })
}
