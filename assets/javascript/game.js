// Right now there is an error which is making the whole thing not work. 
// You need to remove the addEventListener parts from lines 22 and 50.
// ou should only have 3 click handlers total.  
// One on each shot button, and one on the reset button.
// You also need to use the Math.random() with an if statement to increase 
// the goals counters only if the random number is above or below a certain value. 



let teamoneShootButton = document.querySelector('#teamone-shoot-button');
let teamoneNumshots = document.querySelector('#teamone-numshots');
let teamoneNumgoals = document.querySelector('#teamone-numgoals');
let resetButton = document.querySelector('#reset-button');


resetButton.addEventListener("click", function(){
    console.log("reset button");

    let newrestButton = Number(resetButton.innerHTML) +1;
    resetButton.innerHTML = newrestButton
})


teamoneShootButton.addEventListener("click", function () {
    // Any code you write in here, will run every time incrementButton
    // is clicked.
    // Run the console.log function to display some text in the console:
    console.log(" team one  button clicked");

    // Calculate the new value for our counter:


    // Calculate the new value for our counter:
   let newshotValue = Number(teamoneNumshots.innerHTML) +1; 
    teamoneNumshots.innerHTML = newshotValue;
    


    if (Math.random() < .3 ){
        console.log('I did math.random')
        let newgoalValue= Number(teamoneNumgoals.innerHTML) +1;
        teamoneNumgoals.innerHTML = newgoalValue;
    }

}) // We have to close the curly braces and parentheses we opened above.



let teamtwoShootButton = document.querySelector('#teamtwo-shoot-button');
let teamtwoNumberShots = document.querySelector('#teamtwo-numbershots');
let teamtwoNumgoals = document.querySelector('#teamtwo-numgoals');



teamtwoShootButton.addEventListener("click", function () {
    // Any code you write in here, will run every time incrementButton
    // is clicked.
    // Run the console.log function to display some text in the console:
    console.log(" team two  button clicked");

    // Calculate the new value for our counter:
    let newshotValue = Number(teamtwoNumberShots.innerHTML) +1; 
    teamtwoNumberShots.innerHTML = newshotValue;

    // Calculate the new value for our counter:
    
// 

   
    
      
        if (Math.random() < .3 ){
            console.log('I did math.random')
            let newtwogoalValue= Number(teamtwoNumgoals.innerHTML) +1;
            teamtwoNumgoals.innerHTML = newtwogoalValue;
        }
    })

    

    
    //   
 // We have to close the curly braces and parentheses we opened above.
