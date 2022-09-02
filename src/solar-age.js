export default class AgeInput {
  constructor(age, merAge, venAge, marAge, jupAge, earthYears, mercuryYears, venusYears, marsYears, jupiterYears) {
    this.age = age;
    this.mercury = merAge;
    this.venus = venAge;
    this.mars = marAge;
    this.jupiter = jupAge;
    this.years = earthYears;
    this.merYears = mercuryYears; 
    this.venYears = venusYears;
    this.marYears = marsYears;
    this.jupYears = jupiterYears;
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
/* istanbul ignore else */
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

  venusYears() {
    let venusSpan = this.venus;
/* istanbul ignore else */
    if (venusSpan < 56) {
      let yearsTillVen = 0
      yearsTillVen = Math.round(56 - venusSpan);
      this.venYears = yearsTillVen;
      return yearsTillVen;
    } else {
      let yearsPastVen = 0
      yearsPastVen = Math.round(venusSpan - 56);
      this.venYears = yearsPastVen;
      return yearsPastVen;
    }
  }

  marsYears() {
    let marsSpan = this.mars;
/* istanbul ignore else */
    if (marsSpan < 169) {
      let yearsTillMar = 0
      yearsTillMar = Math.round(169 - marsSpan);
      this.marYears = yearsTillMar;
      return yearsTillMar;
    } else {
      let yearsPastMar = 0
      yearsPastMar = Math.round(marsSpan - 169);
      this.marYears = yearsPastMar;
      return yearsPastMar;
    }
  }

  jupiterYears() {
    let jupiterSpan = this.jupiter;
/* istanbul ignore else */
    if (jupiterSpan < 1067) {
      let yearsTillJup = 0
      yearsTillJup = Math.round(1067 - jupiterSpan);
      this.jupYears = yearsTillJup;
      return yearsTillJup;
    } else {
      let yearsPastJup = 0
      yearsPastJup = Math.round(jupiterSpan - 1067);
      this.jupYears = yearsPastJup;
      return yearsPastJup;
    }
  }
}