// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
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
  // if it is, return 'Empty'
  // check if it's not a number
  // return 'Not a Number'
  // else
  // return 'Is a Number'

  if (testInput === "") {
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } else return "Is a Number";
}

function formSubmission(
  document,
  list,
  pilotValue,
  copilotValue,
  fuelLevelValue,
  cargoLevelValue
) {
  // check if any of the values are empty
  // if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty')
  // alert user that they need to fill out all the fields alert('message')
  // check if fuelLevelValue and cargoLevelValue are not numbers
  // alert the user that must enter valid input

  if (
    validateInput(pilotValue) === "Empty" ||
    validateInput(copilotValue) === "Empty" ||
    validateInput(fuelLevelValue) === "Empty" ||
    validateInput(cargoLevelValue) === "Empty"
  ) {
    alert("All fields required to be filled!");
  } else if (
    validateInput(fuelLevelValue) === "Not a Number" ||
    validateInput(cargoLevelValue) === "Not a Number"
  ) {
    alert("Must enter a Number for Fuel Level and Cargo Mass values");
  } else {
    // set the list.style.visibility = 'visible'
    //list.style.visibility = 'visible';
    // get the pilot status, update the inner HTML to say `Pilot ${pilotValue} is ready for launch`
    // get the copilot status, update the inner HTML to say `CoPilot ${copilotValue} is ready for launch`
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilotValue} is ready for launch`;
    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `CoPilot ${copilotValue} is ready for launch`;
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    fuelStatus.innerHTML = "Fuel status good for launch!";
    cargoStatus.innerHTML = "Cargo status is good for launch!";
    // check if the fuel level is less 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the fuelStatus to "Fuel level too low for launch"

    if (Number(fuelLevelValue) < 10000) {
      list.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
      fuelStatus.innerHTML = "Fuel level too low for launch";
    }

    // check if the cargo level is more than 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the cargoStatus to "Cargo level too high for launch"
    if (Number(cargoLevelValue) > 10000) {
      list.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
      cargoStatus.innerHTML = "Cargo level too high for launch";
    }

    // if both fuel and cargo are good
    // change the launchStatus to "Shuttle is Ready for Launch" and color to green
    if (Number(fuelLevelValue) < 10000 && Number(cargoLevelValue) > 10000) {
      launchStatus.innerHTML = "Shuttle is Ready for Launch";
      launchStatus.style.color = "green";
    }
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    // get the json from the response
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  // randomly pick a planet from the array
  // Math random for index
  let planet = planets[Math.floor(Math.random() * planets.length)];
  //return planet;
  addDestinationInfo(
    document,
    planet.name,
    planet.diameter,
    planet.star,
    planet.distance,
    planet.moons,
    planet.image
  );
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
