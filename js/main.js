console.log('GigaPet')

// "." is for classes "#" is for id's 


// Creating a class for my Gigapet
const tamagotchi = document.createElement('div')
tamagotchi.className = 'giga'
document.body.appendChild(tamagotchi)

// variables for name and age
const gigaName = '';
const gigaAge = 0;

// update whether the pet is hungry, bored, sleepy
// either feed, play with or put to bed
const gigaPet = {
  sleepy: 0,
  hungry: 0,
  bored: 0,
  age: 0
};

function feedPet() {
  if (gigaPet.hungry === 0) {
    statements1
  } else {
    statements2
  }
};

function playPet() {
  if (gigaPet.bored < 5) {
    statements1
  } else {
    statements2
  }
};

function sleepyPet() {
  if (gigaPet.sleepy < 5) {
    statements1
  } else {
    statements2
  }
};

function agePet() {
  if (gigaPet.age < 5) {
    statements1
  } else {
    statements2
  }
};

gigaPet.sleepy += 1
gigaPet.bored += 1
gigaPet.hungry += 1


// selecting the food div and storing in the foodEl variable
//inside of the food button function
// creating the variable to store the div id #foodBar in
const sleepEl = document.querySelector('#sleepBar')
console.log(sleepEl)

const buttonElSleep = document.querySelector('#sleep').addEventListener('click', function() {
  gigaPet.sleepy += 1;
  console.log(gigaPet)
  // connecting the sleepEl variable to my gigaPet object and accessing
  // the sleepy property
  sleepEl.innerText = gigaPet.sleepy;
});


const foodEl = document.querySelector('#foodBar')
console.log(foodEl)

const buttonElFood = document.querySelector('#food').addEventListener('click', function() {
  gigaPet.hungry += 1
  console.log(gigaPet)
  foodEl.innerText = gigaPet.hungry;
});

const playEl = document.querySelector('#boredBar')
console.log(playEl)

const buttonElPlay = document.querySelector('#play').addEventListener('click', function() {
  gigaPet.bored += 1;
  console.log(gigaPet)
  playEl.innerText = gigaPet.bored;
});


const sleepInterval = setInterval(() => {
  // decrease your sleep value in your gigaPet object
  // then update the DOM with the value, (Very similiar to what you did with the button)
  sleepEl.innerText = gigaPet.sleepy - 1
  // console.log(sleepInterval)
}, 3000)


const foodInterval = setInterval(() => {
  foodEl.innerText = gigaPet.hungry - 1
  // console.log(foodInterval)
}, 3000)


const playInterval = setInterval(() => {
  playEl.innerText = gigaPet.bored - 1
  // console.log(playInterval)
}, 3000)


function updateSleep() {
  const element = document.getElementById("#sleepBar");   
  let width = 0;
  let identity = setInterval(scene, 10);
  function scene() {
    if (width >= 100) {
      clearInterval(identity);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}

function updateFood() {
  const element = document.getElementById("#foodBar");   
  let width = 0;
  let identity = setInterval(scene, 10);
  function scene() {
    if (width >= 100) {
      clearInterval(identity);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}

function updateBored() {
  const element = document.getElementById("#boredBar");   
  let width = 0;
  let identity = setInterval(scene, 10);
  function scene() {
    if (width >= 100) {
      clearInterval(identity);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}

// class gigaPet {
  //     constructor(bored, hungry, sleepy) {
    //       this.bored = bored;
    //       this.hungry = hungry;
    //       this.sleepy = sleepy;
    //     }
    
    //   eat() {
      //     this.isHungry = false
      //   }
      
      
      
      
      
      
      
      
      
      
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
          
            /*----- constants -----*/ 
            
            /*----- functions -----*/
            
            /*----- event listeners -----*/
            