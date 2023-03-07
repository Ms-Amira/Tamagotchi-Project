console.log('GigaPet')

// "." is for classes "#" is for id's 
// seleciting an element id doesn't need a #

// ask alexis about styling and adding my listeners to create functinos
// for the pet.

// Creating a class for my Gigapet
// class gigaPet {
  //     constructor(bored, hungry, sleepy) {
    //       this.bored = bored;
    //       this.hungry = hungry;
    //       this.sleepy = sleepy;
    //     }

// update whether the pet is hungry, bored, sleepy
// either feed, play with or put to bed
const gigaPet = {
  sleepy: 10,
  hungry: 10,
  bored: 10,
  age: 0,
  name: ''
};

// function feedPet() {
//   if (gigaPet.hungry === 0) {
//     statements1
//   } else {
//     statements2
//   }
// };

// function playPet() {
//   if (gigaPet.bored < 5) {
//     statements1
//   } else {
//     statements2
//   }
// };

// function sleepyPet() {
//   if (gigaPet.sleepy < 5) {
//     statements1
//   } else {
//     statements2
//   }
// };

// function agePet() {
//   if (gigaPet.age < 5) {
//     statements1
//   } else {
//     statements2
//   }
// };

// selecting the food div and storing in the foodEl variable
//inside of the food button function
// creating the variable to store the div id #foodBar in
const sleepEl = document.querySelector('#sleepBar')
console.log(sleepEl)

const buttonElSleep = document.querySelector('#sleep').addEventListener('click', function() {
  gigaPet.sleepy = (Number(gigaPet.sleepy) +1).toFixed(1)
  console.log(gigaPet)
  // connecting the sleepEl variable to my gigaPet object and accessing
  // the sleepy property
  sleepEl.innerText = gigaPet.sleepy;
});


const foodEl = document.querySelector('#foodBar')
console.log(foodEl)

const buttonElFood = document.querySelector('#food').addEventListener('click', function() {
  gigaPet.hungry = (Number(gigaPet.hungry) +1).toFixed(1)
  console.log(typeof(gigaPet.hungry))
  foodEl.innerText = gigaPet.hungry;
});

const playEl = document.querySelector('#boredBar')
console.log(playEl)

const buttonElPlay = document.querySelector('#play').addEventListener('click', function() {
  gigaPet.bored = (Number(gigaPet.bored) +1).toFixed(1)
  console.log(gigaPet)
  playEl.innerText = gigaPet.bored;
});


// decreasing the food, sleep and hunger of the pet by setting an
//interval every x amount of seconds
// a message will pop up if the pet powerbar hits zero

const sleepInterval = setInterval(() => {
  // decrease your sleep value in your gigaPet object
  // then update the DOM with the value, (Very similiar to what you did with the button)

  if (gigaPet.sleepy === 0) {
    const alertSleepyEl = document.querySelector(".alert")
    alertSleepyEl.innerHTML = '<b>Your pet is now a zombie.</b>'
    console.log(alertSleepyEl)
    intervalStop()
  }else {
    sleepEl.innerText = gigaPet.sleepy -= 1
  }}, 3000)
  
  // using foodInterval variable to set an interval
  const foodInterval = setInterval(() => {
    // grabbing my object gigaPet and the key hungry to compare it to
    // zero
    if (gigaPet.hungry === 0) {
      // using alertFoodEl to store the alert in the element by using
      // querySelector to select the div with a class of alert
    const alertFoodEl = document.querySelector(".alert")
    // updating the property from the html file to change the
    // property within the div tag
    alertFoodEl.innerHTML = '<b>Your pet has died of hunger.</b>'
    // checking to see if the alert was store correctly
    console.log(alertFoodEl)
    // clearing all of the foodInterval/playInterval/sleepInterval
    //function so that it stops the interval function from running
     intervalStop()
// if gigaPet.hungry doesn't equal zero then we decrement the hunger
// key by one and updating the text within the #foodBar div by one
  } else {
    foodEl.innerText = gigaPet.hungry -= 1
  }}, 3000)
  
  // using playInterval variable to set an interval
const playInterval = setInterval(() => {
  // grabbing my object gigaPet and the key bored to compare it to zero
if (gigaPet.bored === 0) {
  // using alertBoredEl to store the alert in the element by using
  // query selector to select the alert class
  const alertBoredEl = document.querySelector(".alert")
  // grabbing the tag from the html file to update the alert message
  alertBoredEl.innerHTML = '<b>Your pet was bored and ran away.</b>'
  // checking to see if the alert was stored correctly
  console.log(alertBoredEl)
  // clearing the playInterval function so that it stops the interval
  //function from running
  intervalStop()
  // if gigaPet.bored doesn't equal zero then we decrement the bored key
  // by one and updating the text within the #boredBar div by one
} else {
  playEl.innerText =  gigaPet.bored -= 1
}
}, 3000)

const intervalStop = function() {
  clearInterval(foodInterval)
  clearInterval(playInterval)
  clearInterval(sleepInterval)
  clearInterval(ageInterval)
}

// set another interval for the age of the pet
// x amount of seconds the pet increases in age
const ageEl = document.querySelector('#age')
console.log(ageEl)
const ageInterval = setInterval(() => {
  ageEl.innerText =  gigaPet.age += 1
  console.log(ageInterval)
  }, 3000)

//Add the ability to name your pet
// selecting the the name id tag and storing it within the nameEl 
const nameEl = document.getElementById('name');
// adding the click listener to the nameYourPet div id
nameEl.addEventListener('click', nameYourPet);
// making a function that will select the input tag 
function nameYourPet() { 
  // store it within inputEl
  const inputEl = document.querySelector('input')
  // clearing the value of the name input
  inputEl.value = '';
  console.log(inputEl.value)
}

  
// function updateSleep() {
//   const element = document.getElementById("sleepBar");   
//   let width = gigaPet.sleepy *10
//   let identity = setInterval(scene, 3000);
//   function scene() {
//     if (gigaPet.sleepy <= 0) {
//       clearInterval(identity);
//     } else {
//     gigaPet.sleepy = (gigaPet.sleepy -.1).toFixed(1);
//     width = gigaPet.sleepy *10
//       element.style.width = width + '%'; 
//       console.log(gigaPet.sleepy)
//     }
//   }
// }

// updateSleep()

// function updateFood() {
//   const element = document.getElementById("foodBar");   
//   let width = gigaPet.hungry *10;
//   let identity = setInterval(scene, 3000);
//   function scene() {
//     if (gigaPet.hungry <= 0) {
//       clearInterval(identity);
//     } else {
//       gigaPet.hungry = (gigaPet.hungry -.1).toFixed(1); 
//       width = gigaPet.hungry *10
//       element.style.width = width + '%'; 
//     }
//   }
// }
// updateFood()

// function updateBored() {
//   const element = document.getElementById("boredBar");   
//   let width = gigaPet.bored *10;
//   let identity = setInterval(scene, 0);
//   function scene() {
//     if (gigaPet.bored <= 0) {
//       clearInterval(identity);
//     } else {
//       gigaPet.bored = (gigaPet.bored -.1).toFixed(1);
//       width = gigaPet.bored *10
//       element.style.width = width + '%'; 
//     }
//   }
// }
// updateBored()
    
  
      
      
      
      
      
      
      
      
            
            
            
          
            
            
            /*----- state variables -----*/
            
            /*----- cached elements  -----*/
          
            /*----- constants -----*/ 
            
            /*----- functions -----*/
            
            /*----- event listeners -----*/