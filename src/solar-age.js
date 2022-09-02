export default class AgeInput {
  constructor(age, merAge, venAge, marAge, jupAge, earthYears, mercuryYears) {
    this.age = age;
    this.mercury = merAge;
    this.venus = venAge;
    this.mars = marAge;
    this.jupiter = jupAge;
    this.years = earthYears;
    this.merYears = mercuryYears; 
  }

  findMercuryAge() {
    let mercuryAge = 0;
    mercuryAge = Math.round(this.age * .24);
    this.mercury = mercuryAge;
    return this.mercury;
  }

  findVenusAge() {
    let venusAge = 0;
    venusAge = Math.round(this.age * .62);
    this.venus = venusAge;
    return this.venus;
  }

  findMarsAge() {
    let marsAge = 0;
    marsAge = Math.round(this.age * 1.88);
    this.mars = marsAge;
    return this.mars;
  }

  findJupiterAge() {
    let jupiterAge = 0;
    jupiterAge = Math.round(this.age * 11.86);
    this.jupiter = jupiterAge;
    return this.jupiter;
  }

  earthYears() {
    let ageSpan = this.age;
/* istanbul ignore else */
    if (ageSpan < 90) {
      let yearsTill = 0
      yearsTill = Math.round(90 - ageSpan);
      this.years = yearsTill;
      return yearsTill;
    } else {
      let yearsPast = 0
      yearsPast = Math.round(ageSpan - 90);
      this.years = yearsPast;
      return yearsPast;
    }
  }

  mercuryYears() {
    let mercurySpan = this.mercury;
      if (mercurySpan < 22) {
        let yearsTillMer = 0
        yearsTillMer = Math.round(22 - mercurySpan);
        this.merYears = yearsTillMer;
        return yearsTillMer;
      } else {
        let yearsPastMer = 0
        yearsPastMer = Math.round(mercurySpan - 22);
        this.merYears = yearsPastMer;
        return yearsPastMer;
      }
  }
}