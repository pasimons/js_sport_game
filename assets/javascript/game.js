


let teamoneShootButton = document.querySelector('#teamone-shoot-button');
let teamoneNumshots = document.querySelector('#teamone-numshots');
let teamoneNumgoals = document.querySelector('#teamone-numgoals')


teamoneShootButton.addEventListener("click", function () {
    // Any code you write in here, will run every time incrementButton
    // is clicked.
    // Run the console.log function to display some text in the console:
    console.log(" team one  button clicked");

    // Calculate the new value for our counter:
    let newshotValue = Number(teamoneNumshots.innerHTML) + 1;

    // Calculate the new value for our counter:
    teamoneNumshots.innerHTML = newshotValue;

    //   goal go here
    teamoneNumgoals.addEventListener("click", function(){
        console.log("teamone-numgoals button clicked")
        let newteamneNumgoals = Number(newteamneNumgoals.innerHTML) +1;
        newteamneNumgoals.innerHTML = newshotValue;
    }

}) // We have to close the curly braces and parentheses we opened above.



let teamtwoShootButton = document.querySelector('#teamtwo-shoot-button');
let teamtwoNumberShots = document.querySelector('#teamtwo-numbershots');
let teamtwoNumgoals = document.querySelector('#teamtwo-numgoals')



teamtwoShootButton.addEventListener("click", function () {
    // Any code you write in here, will run every time incrementButton
    // is clicked.
    // Run the console.log function to display some text in the console:
    console.log(" team two  button clicked");

    // Calculate the new value for our counter:
    let newshotValue = Number(teamtwoNumshots.innerHTML) + 1;

    // Calculate the new value for our counter:
    teamtwoNumberShots.innerHTML = newshotValue;

    teamtwoNumgoals.addEventListener("click", function(){
        console.log("teamtwo-numgoals button clicked")
        let newteamneNumgoals = Number(newteamneNumgoals.innerHTML) +1;
        newteamneNumgoals.innerHTML = newshotValue;
    }

    
    })
    //   goal gose here
 // We have to close the curly braces and parentheses we opened above.
