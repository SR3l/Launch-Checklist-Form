// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/

window.addEventListener("load", function () {
   let planets = [];

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         let i = Math.floor(Math.random() * json.length);
         let missionTraget = document.getElementById("missionTarget");
         planets = json;
         missionTraget.innerHTML = `
         <h2>Mission Destination</h2>
         
         <ol>
         <li>Name: ${json[i].name}</li>
         <li>Diameter: ${json[i].diameter}</li>
         <li>Star: ${json[i].star}</li>
         <li>Distance from Earth: ${json[i].distance}</li>
         <li>Number of Moons: ${json[i].moons}</li>
         </ol>
         <img src="${json[i].image}"/>`; 
      });
}); 

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
   
   
   event.preventDefault();


   let pilotInput = document.querySelector("input[name=pilotName]");
   let copilotInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");
   if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
      alert("All fields are required");
   } else if (!pilotInput.value.match(/[A-Za-z ]+$/) || !copilotInput.value.match(/[A-Za-z ]+$/) || isNaN(Number(fuelLevelInput.value)) || isNaN(Number(cargoMassInput.value))) {
      alert("Enter valid Data type. ");

   }
  let itemStatus = document.getElementById("itemStatus");
  itemStatus.style.visibility = "visible";

  let pilotStatus = document.getElementById("pilotStatus");
  pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`;

  let copilotStatus = document.getElementById("copilotStatus");
  copilotStatus.innerHTML = `Copilot ${copilotInput.value} is ready for launch`;

  let fuelStatus = document.getElementById("fuelStatus");
  let fuelLevel = Number(fuelLevelInput.value);
  let launchStatus = document.getElementById("launchStatus");
  console.log(fuelStatus)
         if (fuelLevel < 10000) {
            fuelStatus.innerHTML = `WARNING! Fuel Level is TOO LOW for launch`;

         } else {
            fuelStatus.innerHTML = `Fuel level check: PASSED `;

         } 

         let cargoStatus = document.getElementById("cargoStatus");
         let cargoMass = Number(cargoMassInput.value);
         if (cargoMass > 10000) {
            cargoStatus.innerHTML = `Cargo mass is too high to launch`;

         } else {
            cargoStatus.innerHTML = `Cargo mass check: PASSED`;
            launchStatus.innerHTML = `Awaiting information before launch`
         }

         if (fuelLevel >= 10000 && cargoMass <= 10000 ) {
            launchStatus.innerHTML = `Shuttle is READY to launch`;
            launchStatus.style.color = "green";

         } else {
            launchStatus.innerHTML = `Shuttle us NOT ready to launch`;
            launchStatus.style.color = "red";
         }
      });

   });
