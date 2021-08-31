// Write your JavaScript code here!

const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        const pilotValue = pilotInput.value;
        let copilotInput = document.querySelector("input[name=copilotName]");
        const copilotValue = copilotInput.value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        const fuelLevelValue = fuelLevelInput.value;
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        const cargoLevelValue = cargoMassInput.value;
        let list = document.getElementById('faultyItems');
        formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue)
        
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    })
    .then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(
            document,
            planet.name,
            planet.diameter,
            planet.star,
            planet.distance,
            planet.moons,
            planet.image            
        );

    })


    
 });