console.log('GigaPet')

// "." is for classes "#" is for id's 


// Creating a class for my Gigapet
const tamagotchi = document.createElement('div')
tamagotchi.className = 'giga'
document.body.appendChild(tamagotchi)



// function render() {
// 	renderHands();
// 	renderControls();
// 	if (winner) {
// 		renderWinnerMessage();
// 	} else {
// 		renderTurnMessage();
// 	}
// }

// class Person {
//     //   // constructor function, 
//     //   // reservered word
//       constructor(name) {
//     //     // this is where we define our keys for the objects
//     //     // to be created from this class
//         this.name = name;
//         this.isHungry = true;
//         this.pockets = ['wallet'];
//       }
    
//       eat() {
//         console.log(this, " <- this");
//         this.isHungry = false
//       }
    

//Avoid accessing the DOM from outside render-oriented functions. However, "eye candy" animations, a ticking time display, etc. are exceptions to this tip.
// Data (state) is the single source of truth of the app - when implementing an app's logic, the DOM is secondary to data manipulation. Get used to thinking about how to your app's data changes vs. the display.
// As the user interacts with the application (or other events such as timers trigger), code the app such that it:
// Updates state, then...
// Calls render()




























/*----- constants -----*/


  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/