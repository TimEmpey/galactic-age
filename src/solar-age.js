export default class AgeInput {
  constructor(age, mercAge) {
    this.age = age;
    this.mercury = mercAge
  }

  findMercuryAge() {
    let mercuryAge = 0;
    mercuryAge = (this.age * .24);
    this.mercury = mercuryAge;
    return mercuryAge;
  }
}