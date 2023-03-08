console.log('GigaPet')

// create an object to reference within the game
const gigaPet = {
  sleepy: 10,
  hungry: 10,
  bored: 10,
  age: 0,
  name: ''
};

/*----- event listeners -----*/
/*----- functions -----*/
/*----- constants -----*/ 


// Connecting the buttons to the progress bar div's

// creating the sleepEl variable to store the div id #sleepBar in
const sleepEl = document.querySelector('#sleepBar')
console.log(sleepEl)
// using querySelector to select the #sleep button and adding a click
//event listener to the button
const buttonElSleep = document.querySelector('#sleep').addEventListener('click', function() {
 // selecting the sleepy key within the gigaPet object and increasing 
//  the progress bar by one after you click the sleep button
  gigaPet.sleepy = (Number(gigaPet.sleepy) +1)
  console.log(gigaPet)
  // connecting the sleepEl variable to my gigaPet object and accessing
  // the sleepy property
  sleepEl.innerText = gigaPet.sleepy;
});

// creating the foodEl variable to store the div #foodBar in
const foodEl = document.querySelector('#foodBar')
console.log(foodEl)
// using querySelector to select the #food button and adding a click
// event listener to the button
const buttonElFood = document.querySelector('#food').addEventListener('click', function() {
 //selecting the hungry key within the gigaPet object and increasing
 // the progress bar by one after you click the food button
  gigaPet.hungry = (Number(gigaPet.hungry) +1)
  console.log(gigaPet)
  // connecting the foodEl variable to my gigaPet object and accessing
  // the hungry key
  foodEl.innerText = gigaPet.hungry;
});

// creating the playEl variable to store the div #boredBar in
const playEl = document.querySelector('#boredBar')
console.log(playEl)

const buttonElPlay = document.querySelector('#play').addEventListener('click', function() {
  // selecting the bored key within the gigaPet object and increasing
  // the progress bar by onea after you click the play button
  gigaPet.bored = (Number(gigaPet.bored) +1)
  console.log(gigaPet)
  // connecting the playEl variable to my gigaPet object and accessing
  // the bored key
  playEl.innerText = gigaPet.bored;
});


// Decreasing the food, sleep and hunger of the pet by setting an
//interval every 3 seconds
// a message will pop up if the pet powerbar hits zero

// using sleepInterval variable to set an interval
const sleepInterval = setInterval(() => {
  //grabbing my object gigaPet and the key sleepy to compare it to zero
  if (gigaPet.sleepy === 0) {
    // using alertSleepyEl to store the alert in the element by using
    // querySelector to select the dib with a class of alert
    const alertSleepyEl = document.querySelector(".alert")
    // updating the property from the html file to change the property
    // within the div tag
    alertSleepyEl.innerHTML = '<b>Your pet is now a zombie.</b>'
    //checking to see if the alert was stored correctly
    console.log(alertSleepyEl)
    //clearing all of the foodInterval/playInterval/sleepInterval
    // function so that it stops the interval function from running
    intervalStop()
    // if gigaPet.sleepy doesn't equal zero then we decrement the bored
    // key by one and updating the text within the #sleepbar div by one
  } else {
    sleepEl.innerText = gigaPet.sleepy -= 1
  }}, 3000)
  

  // using foodInterval variable to set an interval
  const foodInterval = setInterval(() => {
    // grabbing my object gigaPet and the key hungry to compare it to zero
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

// using querySelector to select the #age div id and storing it in
// theageEl 
const ageEl = document.querySelector('#age')
console.log(ageEl)
// using ageInterval to set an interval
const ageInterval = setInterval(() => {
  // taking the age key within the gigaPet object and increasing it by one
  // every 3 seconds
  ageEl.innerText =  gigaPet.age += 1
  console.log(ageInterval)
  }, 3000)

  // Ending the game if one of the three functions ever hits zero

// using the intervalStop function to stop the setInterval from repeating
// for foodInterval/playInterval/sleepInterval/ageInterval
const intervalStop = function() {
  clearInterval(foodInterval)
  clearInterval(playInterval)
  clearInterval(sleepInterval)
  clearInterval(ageInterval)
};

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
    
   