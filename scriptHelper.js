// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
  window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      if (testInput === "") {
        return "Empty";
      } else if (isNaN(Number(testInput))) {
        return "Not a Number";
      } else {
        return "Is a Number";
      }     

    });

  });
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let faultyItemsDiv = document.getElementById("faultyItems");
  list = document.getElementById("faultyItems");
  list.style.visibility = 'visible';
  let pilotStatus = document.getElementById("pilotStatus");
  pilotStatus.innerHTML = `Pilot ${pilotValue} is ready for launch`;
  let copilotStatus = document.getElementById("copilotStatus");
  copilotStatus.innerHTML = `CoPilot ${copilotValue} is ready for launch`
  let launchStatus = document.getElementById("launchStatus");

  if (validateInput(pilotValue) === "Empty" || validateInput(copilotValue) === "Empty" || validateInput(fuelLevelValue) === "Empty" || validateInput(cargoLevelValue) === "Empty") {
    alert("Please fill in all required fields. All fields are required.");

  } else if (validateInput(fuelLevelValue) === "Not a Number" || validateInput(cargoLevelValue) === "Not a Number") {
    alert("Number required for fuel and cargo levels");

  } else if (validateInput(pilotValue) === 'Is a Number' || validateInput(copilotValue) === "Is a Number") {
    alert("Only enter letters for pilot and copilot names");
  }
  
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;