export default class AgeInput {
  constructor(age, merAge, venAge, marAge, jupAge, earthYears) {
    this.age = age;
    this.mercury = merAge;
    this.venus = venAge;
    this.mars = marAge;
    this.jupiter = jupAge;
    this.years = earthYears;
  }

  earthYears() {
    let ageInput = this.age;
/* istanbul ignore else */
    if (ageInput < 90) {
      let yearsTill = 0
      yearsTill = Math.round(90 - ageInput);
      return yearsTill;
    } else {
      let yearsPast = 0
      yearsPast = Math.round(ageInput - 90);
      return yearsPast;
    }
  }

  findMercuryAge() {
    let mercuryAge = 0;
    mercuryAge = Math.round(this.age * .24);
    this.mercury = mercuryAge;
    return mercuryAge;
  }

  findVenusAge() {
    let venusAge = 0;
    venusAge = Math.round(this.age * .62);
    this.venus = venusAge;
    return venusAge;
  }

  findMarsAge() {
    let marsAge = 0;
    marsAge = Math.round(this.age * 1.88);
    this.mars = marsAge;
    return marsAge;
  }

  findJupiterAge() {
    let jupiterAge = 0;
    jupiterAge = Math.round(this.age * 11.86);
    this.jupiter = jupiterAge;
    return jupiterAge;
  }
}