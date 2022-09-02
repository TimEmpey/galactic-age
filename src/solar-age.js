export default class AgeInput {
  constructor(age, merAge, venAge, jupAge) {
    this.age = age;
    this.mercury = merAge;
    this.venus = venAge;
    this.jupiter = jupAge;
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

  findJupiterAge() {
    let jupiterAge = 0;
    jupiterAge = Math.round(this.age * 1.88);
    this.jupiter = jupiterAge;
    return jupiterAge;
  }
}