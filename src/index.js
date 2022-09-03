import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeInput from '../src/solar-age.js';

function handleForm1 (e) {
  e.preventDefault();
  document.getElementById("mercury-till").setAttribute("class", "hidden");
  document.getElementById("mercury-past").setAttribute("class", "hidden");
  let age1 = document.getElementById("mercury-age-input").value;
  let ageInput1 = new AgeInput(age1);
  ageInput1.findMercuryAge();
  let outputAgeMer = ageInput1.mercury;
  let resultsMer = document.getElementById("mercury-age-output");
  resultsMer.innerText = outputAgeMer;
  ageInput1.mercuryYears();
  let outputTillMer = ageInput1.merTill;
  let resultsMerTill = document.getElementById("mercury-till-year");
  resultsMerTill.innerText = outputTillMer;
  let outputPastMer = ageInput1.merPast;
  let resultsMerPast = document.getElementById("mercury-past-year");
  resultsMerPast.innerText = outputPastMer;
  if(outputTillMer !== undefined) {
    document.getElementById("mercury-till").removeAttribute("class");
    document.getElementById("mercury-age").removeAttribute("class");
  } else if (outputPastMer !== undefined) {
    document.getElementById("mercury-past").removeAttribute("class");
    document.getElementById("mercury-age").removeAttribute("class");
  }
}
function handleForm2 (e) {
  document.getElementById("venus-till").setAttribute("class", "hidden");
  document.getElementById("venus-past").setAttribute("class", "hidden");
  e.preventDefault();
  let age2 = document.getElementById("venus-age-input").value;
  let ageInput2 = new AgeInput(age2);
  ageInput2.findVenusAge();
  let outputAgeVen = ageInput2.venus;
  let resultsVen = document.getElementById("venus-age-output");
  resultsVen.innerText = outputAgeVen;
  ageInput2.venusYears();
  let outputTillVen = ageInput2.venTill;
  let resultsVenTill = document.getElementById("venus-till-year");
  resultsVenTill.innerText = outputTillVen;
  let outputPastVen = ageInput2.venPast;
  let resultsVenPast = document.getElementById("venus-past-year");
  resultsVenPast.innerText = outputPastVen;
  if(outputTillVen !== undefined) {
    document.getElementById("venus-till").removeAttribute("class");
    document.getElementById("venus-age").removeAttribute("class");
  } else if (outputPastVen !== undefined) {
    document.getElementById("venus-past").removeAttribute("class");
    document.getElementById("venus-age").removeAttribute("class");
  }
}
function handleForm3 (e) {
  e.preventDefault();
  document.getElementById("mars-till").setAttribute("class", "hidden");
  document.getElementById("mars-past").setAttribute("class", "hidden");
  let age3 = document.getElementById("mars-age-input").value;
  let ageInput3 = new AgeInput(age3);
  ageInput3.findMarsAge();
  let outputAgeMar = ageInput3.mars;
  let resultsMar = document.getElementById("mars-age-output");
  resultsMar.innerText = outputAgeMar;
  ageInput3.marsYears();
  let outputTillMar = ageInput3.marTill;
  let resultsMarTill = document.getElementById("mars-till-year");
  resultsMarTill.innerText = outputTillMar;
  let outputPastMar = ageInput3.marPast;
  let resultsMarPast = document.getElementById("mars-past-year");
  resultsMarPast.innerText = outputPastMar;
  if(outputTillMar !== undefined) {
    document.getElementById("mars-till").removeAttribute("class");
    document.getElementById("mars-age").removeAttribute("class");
  } else if (outputPastMar !== undefined) {
    document.getElementById("mars-past").removeAttribute("class");
    document.getElementById("mars-age").removeAttribute("class");
  }
}
function handleForm4 (e) {
  e.preventDefault();
  document.getElementById("jupiter-till").setAttribute("class", "hidden");
  document.getElementById("jupiter-past").setAttribute("class", "hidden");
  let age4 = document.getElementById("jupiter-age-input").value;
  let ageInput4 = new AgeInput(age4);
  ageInput4.findJupiterAge();
  let outputAgeJup = ageInput4.jupiter;
  let resultsJup = document.getElementById("jupiter-age-output");
  resultsJup.innerText = outputAgeJup;
  ageInput4.jupiterYears();
  let outputTillJup = ageInput4.jupTill;
  let resultsJupiterTill = document.getElementById("jupiter-till-year");
  resultsJupiterTill.innerText = outputTillJup;
  let outputPastJup = ageInput4.jupPast;
  let resultsJupiterPast = document.getElementById("jupiter-past-year");
  resultsJupiterPast.innerText = outputPastJup;
  console.log("hello")
  if(outputTillJup !== undefined) {
    console.log("hello again")
    document.getElementById("jupiter-till").removeAttribute("class");
    document.getElementById("jupiter-age").removeAttribute("class");
  } else if (outputPastJup !== undefined) {
    document.getElementById("jupiter-past").removeAttribute("class");
    document.getElementById("jupiter-age").removeAttribute("class");
  }
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