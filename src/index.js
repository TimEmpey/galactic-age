import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeInput from '../src/solar-age.js';

function handleForm (e) {
  e.preventDefault();
  let age = document.getElementById("mercury-age-input").value;
  let ageInput = new AgeInput(age);
  ageInput.findMercuryAge();
  ageInput.findVenusAge();
  ageInput.findMarsAge();
  ageInput.findJupiterAge();
  let outputAgeMer = ageInput.mercury;
  let resultsMer = document.getElementById("mercury-age-output");
  resultsMer.innerText = outputAgeMer;
  let outputAgeVen = ageInput.venus;
  let resultsVen = document.getElementById("venus-age-output");
  resultsVen.innerText = outputAgeVen;
  let outputAgeMar = ageInput.mars;
  let resultsMar = document.getElementById("mars-age-output");
  resultsMar.innerText = outputAgeMar;
  let outputAgeJup = ageInput.jupiter;
  let resultsJup = document.getElementById("jupiter-age-output");
  resultsJup.innerText = outputAgeJup;
}

window.addEventListener("load", function() {
  document.querySelector("form#mercury").addEventListener("submit", handleForm);
  document.querySelector("form#venus").addEventListener("submit", handleForm);
  document.querySelector("form#mars").addEventListener("submit", handleForm);
  document.querySelector("form#jupiter").addEventListener("submit", handleForm);
});