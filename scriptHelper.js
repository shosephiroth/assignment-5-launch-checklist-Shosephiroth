// Write your helper functions here!
require('isomorphic-fetch');

// this code below doesn't work?
//window.alert('Hello');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // get the missionTarget div
  // set the inner HTML to this
  // fill in the information that is passed in
   // Here is the HTML formatting for our mission target div.
   /*
    `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
                `
   */
  let missionTargetDiv = document.getElementById("missionTarget");
  missionTargetDiv.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">  
  `;
  }

function validateInput(testInput) {   
//check if the test Input is empty
if (testInput === "") {
  return "Empty";
// check if it's not a number
  // return 'Not a Number'
} else if (isNaN(Number(testInput))) {
  return "Not a Number";
// else
  // return 'Is a Number'
} else {
  return "Is a Number";
}  
}

//test
//validateInput(document.getElementById("pilotName"))

function formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue) {  
    // window.addEventListener("load", function() { // not sure I need this here
  //   let form = document.querySelector("form");
  //   form.addEventListener("submit", function(event) {      
  //     alert("submit clicked");
  //   });
  // });  // end of unsure code

  // check if any of the values are empty
    // if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty')
    // alert user that they need to fill out all the fields alert('message')
  if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty' || validateInput(fuelLevelValue) === 'Empty' || validateInput(cargoLevelValue) === 'Empty') {
    alert('User needs to fill out all the fields');
  }
  // check if fuelLevelValue and cargoLevelValue are not numbers
    // alert the user that must enter valid input
  if (isNaN(Number(fuelLevelValue)) || (isNaN(Number(cargoLevelValue)))) {
    alert('User needs to fill out all the fields');
  }


  // set the list.style.visibility = 'visible'
  list.style.visibility = 'visible';
  // get the pilot status, update the inner HTML to say `Pilot ${pilotValue} is ready for launch`
  let pilotStatus = document.getElementById("pilotStatus");
  pilotStatus.innerHTML = `Pilot ${pilotValue} is ready for launch`
  // get the copilot status, update the inner HTML to say `CoPilot ${copilotValue} is ready for launch`
  let copilotStatus = document.getElementById("copilotStatus");
  copilotStatus.innerHTML = `CoPilot ${copilotValue} is ready for launch`
  let launchStatus = document.getElementById("launchStatus");
  // check if the fuel level is less 10,000
  if (fuelLevelValue < 10000) {
    // change launchStatus to "Shuttle not ready for launch", and color to red
    let launchStatus = "Shuttle not ready for launch";
    // change the fuelStatus to "Fuel level too low for launch"
    let fuelStatus = "Fuel level too low for launch";

  }

    // check if the cargo level is more than 10,000
    if (cargoLevelValue > 10000) {
      // change launchStatus to "Shuttle not ready for launch", and color to red
      launchStatus = "Shuttle not ready for launch";
      // change the cargoStatus to "Cargo level too high for launch"
      cargoStatus = "Cargo level too high for launch";

    }
    

    // if both fuel and cargo are good
    if (fuelStatus >= 10000 && cargoStatus <= 10000) {
      // change the launchStatus to "Shuttle is Ready for Launch" and color to green
      launchStatus = "Shuttle is Ready for Launch";
      
    }
      
}

async function myFetch() {
    let planetsReturned;

  planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
      // get the json from the response
      return response.json;
        });

    return planetsReturned;
}

function pickPlanet(planets) {
  // randomly pick a planet from the array  
  // Math random for index
  let planetPick = Math.floor(Math.random() * planets.length);
  return planets(planetPick);

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;