// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      //  const planet = pickPlanet()
      const planet = pickPlanet();
      //  addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
      addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
   })


   // get the form
   let form = document.querySelector("form");
   // add a listener to when the form submit
  //  form.addEventListener('submit', function(event) {
      // if it's not, preventDefault
    preventDefault();
      // get the value for each of the input field
      // let pilotInput = this.document.querySelector("input[name=pilotName]");
      // const pilotValue = pilotInput.value

      // let list = document.getElementById('faultyItems');
      // formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue)
    form.addEventListener('submit', function(event) {
        let pilotInput = document.querySelector("input[name=pilotValue]");
        const pilotValue = pilotInput.value;
        let copilotInput = document.querySelector("input[name=copilotValue]");
        const copilotValue = copilotInput.value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevelValue]");
        const fuelLevelValue = fuelLevelInput.value;
        let cargoLevelInput = document.querySelector("input[name=cargoLevelValue]");
        const cargoLevelValue = cargoLevelInput.value;

        let list = document.getElementById('faultyItems');
        formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue);
    });


});