console.log('GigaPet')

// "." is for classes "#" is for id's 


// Creating a class for my Gigapet
const tamagotchi = document.createElement('div')
tamagotchi.className = 'giga'
document.body.appendChild(tamagotchi)

/*----- constants -----*/
// variables for name and age
const gigaName = '';
const gigaAge = 0;

// update whether the pet is hungry, bored, sleepy
// either feed, play with or put to bed
const gigaPet = {
  sleepy: 0,
  hungry: 0,
  bored: 0
};

function feedPet() {
if (gigaPet.hungry < 50) {
  statements1
} else {
  statements2
}
};

function playPet() {
  if (gigaPet.bored < 50) {
    statements1
  } else {
    statements2
  }
  };

  function sleepyPet() {
    if (gigaPet.sleepy < 50) {
      statements1
    } else {
      statements2
    }
  };
  
  gigaPet.sleepy += 15
  gigaPet.bored += 15
  gigaPet.hungry += 15
  
  
  /*----- event listeners -----*/
  // adding the clicks to feed, play with and bed the pet
addEventListener('click', function() {
  gigaPet.sleepy += 15;
  gigaPet();
});

 addEventListener('click', function() {
  gigaPet.hungry += 15;
  gigaAge();
});

addEventListener('click', function() {
  gigaPet.bored += 15;
  gigaPet();
});

// class gigaPet {
//     constructor(bored, hungry, sleepy) {
//       this.bored = bored;
//       this.hungry = hungry;
//       this.sleepy = sleepy;
//     }
    
//   eat() {
//     this.isHungry = false
//   }



function animation() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}






//Iterating between adding HTML, CSS & JS is one approach.
// Start with some markup for the basic layout of the UI.
// Declare, but don't initialize, the application-wide variables (state). The initialization of the variables to their "start-up" state should be done within an initialize, or similarly named function, i.e., init, reset, etc.
// Write that initialize function.
// Invoke initialize() to "kick off" the app.
// Next stub up a render function. Be sure to call render after state has been updated in event handlers, the initialize function, etc.
// Register event listeners - browser apps are typically event-driven.
// If you have user stories, code them in a logical order.
// More recommendations for interactive browser app's, such as games

// Create a main render function that is responsible for rendering the state of the app to the DOM.
// If the render function becomes lengthy, add additional rendering oriented functions, for example:
// function render() {
// 	renderHands();
// 	renderControls();
// 	if (winner) {
// 		renderWinnerMessage();
// 	} else {
// 		renderTurnMessage();
// 	}
// }
// Avoid accessing the DOM from outside render-oriented functions. However, "eye candy" animations, a ticking time display, etc. are exceptions to this tip.
// Data (state) is the single source of truth of the app - when implementing an app's logic, the DOM is secondary to data manipulation. Get used to thinking about how to your app's data changes vs. the display.
// As the user interacts with the application (or other events such as timers trigger), code the app such that it:
// Updates state, then...
// Calls render()
























  /*----- state variables -----*/


  /*----- cached elements  -----*/



  /*----- functions -----*/