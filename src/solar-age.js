export default class AgeInput {
  constructor(age, merAge, venAge) {
    this.age = age;
    this.mercury = merAge;
    this.venus = venAge;
  }

  findMercuryAge() {
    let mercuryAge = 0;
    mercuryAge = (this.age * .24);
    this.mercury = mercuryAge;
    return mercuryAge;
  }

  findVenusAge() {

  }
}