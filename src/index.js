import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeInput from '../src/solar-age.js';

function handleForm1 (e) {
  e.preventDefault();
  let age1 = document.getElementById("mercury-age-input").value;
  let ageInput1 = new AgeInput(age1);
  ageInput1.findMercuryAge();
  let outputAgeMer = ageInput1.mercury;
  let resultsMer = document.getElementById("mercury-age-output");
  resultsMer.innerText = outputAgeMer;
}
function handleForm2 (e) {
  e.preventDefault();
  let age2 = document.getElementById("venus-age-input").value;
  let ageInput2 = new AgeInput(age2);
  ageInput2.findVenusAge();
  let outputAgeVen = ageInput2.venus;
  let resultsVen = document.getElementById("venus-age-output");
  resultsVen.innerText = outputAgeVen;
}
function handleForm3 (e) {
  e.preventDefault();
  let age3 = document.getElementById("mars-age-input").value;
  let ageInput3 = new AgeInput(age3);
  ageInput3.findMarsAge();
  let outputAgeMar = ageInput3.mars;
  let resultsMar = document.getElementById("mars-age-output");
  resultsMar.innerText = outputAgeMar;
}
function handleForm4 (e) {
  e.preventDefault();
  let age4 = document.getElementById("jupiter-age-input").value;
  let ageInput4 = new AgeInput(age4);
  ageInput4.findJupiterAge();
  let outputAgeJup = ageInput4.jupiter;
  let resultsJup = document.getElementById("jupiter-age-output");
  resultsJup.innerText = outputAgeJup;
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm1);
});
window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm2);
});
window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm3);
});
window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm4);
});