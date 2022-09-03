import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeInput from '../src/solar-age.js';

function handleForm1 (e) {
  e.preventDefault();
  let age1 = document.getElementById("mercury-age-input").value;
  let ageInput1 = new AgeInput(age1);
  ageInput1.findMercuryAge();
  ageInput1.findVenusAge();
  ageInput1.findMarsAge();
  ageInput1.findJupiterAge();
  let outputAgeMer = ageInput1.mercury;
  let resultsMer = document.getElementById("mercury-age-output");
  resultsMer.innerText = outputAgeMer;
  let outputAgeVen = ageInput1.venus;
  let resultsVen = document.getElementById("venus-age-output");
  resultsVen.innerText = outputAgeVen;
  let outputAgeMar = ageInput1.mars;
  let resultsMar = document.getElementById("mars-age-output");
  resultsMar.innerText = outputAgeMar;
  let outputAgeJup = ageInput1.jupiter;
  let resultsJup = document.getElementById("jupiter-age-output");
  resultsJup.innerText = outputAgeJup;
}
function handleForm2 (e) {
  e.preventDefault();
  let age2 = document.getElementById("venus-age-input").value;
  let ageInput2 = new AgeInput(age2);
  ageInput2.findMercuryAge();
  ageInput2.findVenusAge();
  ageInput2.findMarsAge();
  ageInput2.findJupiterAge();
  let outputAgeMer = ageInput2.mercury;
  let resultsMer = document.getElementById("mercury-age-output");
  resultsMer.innerText = outputAgeMer;
  let outputAgeVen = ageInput2.venus;
  let resultsVen = document.getElementById("venus-age-output");
  resultsVen.innerText = outputAgeVen;
  let outputAgeMar = ageInput2.mars;
  let resultsMar = document.getElementById("mars-age-output");
  resultsMar.innerText = outputAgeMar;
  let outputAgeJup = ageInput2.jupiter;
  let resultsJup = document.getElementById("jupiter-age-output");
  resultsJup.innerText = outputAgeJup;
}
function handleForm3 (e) {
  e.preventDefault();
  let age3 = document.getElementById("mars-age-input").value;
  let ageInput3 = new AgeInput(age3);
  ageInput3.findMercuryAge();
  ageInput3.findVenusAge();
  ageInput3.findMarsAge();
  ageInput3.findJupiterAge();
  let outputAgeMer = ageInput3.mercury;
  let resultsMer = document.getElementById("mercury-age-output");
  resultsMer.innerText = outputAgeMer;
  let outputAgeVen = ageInput3.venus;
  let resultsVen = document.getElementById("venus-age-output");
  resultsVen.innerText = outputAgeVen;
  let outputAgeMar = ageInput3.mars;
  let resultsMar = document.getElementById("mars-age-output");
  resultsMar.innerText = outputAgeMar;
  let outputAgeJup = ageInput3.jupiter;
  let resultsJup = document.getElementById("jupiter-age-output");
  resultsJup.innerText = outputAgeJup;
}
function handleForm4 (e) {
  e.preventDefault();
  let age4 = document.getElementById("jupiter-age-input").value;
  let ageInput4 = new AgeInput(age4);
  ageInput4.findMercuryAge();
  ageInput4.findVenusAge();
  ageInput4.findMarsAge();
  ageInput4.findJupiterAge();
  let outputAgeMer = ageInput4.mercury;
  let resultsMer = document.getElementById("mercury-age-output");
  resultsMer.innerText = outputAgeMer;
  let outputAgeVen = ageInput4.venus;
  let resultsVen = document.getElementById("venus-age-output");
  resultsVen.innerText = outputAgeVen;
  let outputAgeMar = ageInput4.mars;
  let resultsMar = document.getElementById("mars-age-output");
  resultsMar.innerText = outputAgeMar;
  let outputAgeJup = ageInput4.jupiter;
  let resultsJup = document.getElementById("jupiter-age-output");
  resultsJup.innerText = outputAgeJup;
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm1);
});
window.addEventListener("load", function() {
  document.querySelector("form#venus").addEventListener("submit", handleForm2);
});
window.addEventListener("load", function() {
  document.querySelector("form#mars").addEventListener("submit", handleForm3);
});
window.addEventListener("load", function() {
  document.querySelector("form#jupiter").addEventListener("submit", handleForm4);
});