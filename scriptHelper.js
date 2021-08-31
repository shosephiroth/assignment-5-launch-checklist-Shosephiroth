// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionTargetDiv = document.getElementById('missionTarget');
  miss.innerHTML = `
  <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imgUrl}">

  `;
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
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }       
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let faultyItemsDiv = document.getElementById("faultyItems");
  //let list = document.getElementById("faultyItems");
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
  
  if (Number(fuelLevelValue) < 10000 && Number(cargoLevelValue) > 10000) {
    fuelstatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "red";
    
  } else if (Number(fuelLevelValue) < 10000) {
    fuelstatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "red";

  } else if (Number(cargoLevelValue) > 10000) {
    fuelstatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color ="green";
  }

   
}

async function myFetch() {
  const planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json().then(
          function(json) {
          return json
          }
      );
  });
  return planetsReturned;
}

function pickPlanet(planets) {
let planetRoulette=planets[Math.floor(Math.random() * planets.length)];
return planetRoulette;
}

function pickPlanet(planets) {
  let planet = planets[Math.floor(Math.random()*planets.length)];
  return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;