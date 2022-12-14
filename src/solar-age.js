export default class AgeInput {
  constructor(age, merAge, venAge, marAge, jupAge, earthYears, mercuryTill, mercuryPast, venusTill,venusPast, marsTill, marsPast, jupiterTill, jupiterPast) {
    this.age = age;
    this.mercury = merAge;
    this.venus = venAge;
    this.mars = marAge;
    this.jupiter = jupAge;
    this.years = earthYears;
    this.merTill = mercuryTill; 
    this.merPast = mercuryPast; 
    this.venTill = venusTill;
    this.venPast = venusPast;
    this.marTill = marsTill;
    this.marPast = marsPast;
    this.jupTill = jupiterTill;
    this.jupPast = jupiterPast;
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
    if (ageSpan < 90) {
      let yearsTill = 0;
      yearsTill = Math.round(90 - ageSpan);
      this.years = yearsTill;
      return yearsTill;
    } else {
      let yearsPast = 0;
      yearsPast = Math.round(ageSpan - 90);
      this.years = yearsPast;
      return yearsPast;
    }
  }

  mercuryYears() {
    let mercurySpan = this.mercury;
    if (mercurySpan < 22) {
      let yearsTillMer = 0;
      yearsTillMer = Math.round(22 - mercurySpan);
      this.merTill = yearsTillMer;
      return yearsTillMer;
    } else {
      let yearsPastMer = 0;
      yearsPastMer = Math.round(mercurySpan - 22);
      this.merPast = yearsPastMer;
      return yearsPastMer;
    }
  }

  venusYears() {
    let venusSpan = this.venus;
    if (venusSpan < 56) {
      let yearsTillVen = 0;
      yearsTillVen = Math.round(56 - venusSpan);
      this.venTill = yearsTillVen;
      return yearsTillVen;
    } else {
      let yearsPastVen = 0;
      yearsPastVen = Math.round(venusSpan - 56);
      this.venPast = yearsPastVen;
      return yearsPastVen;
    }
  }

  marsYears() {
    let marsSpan = this.mars;
    if (marsSpan < 169) {
      let yearsTillMar = 0;
      yearsTillMar = Math.round(169 - marsSpan);
      this.marTill = yearsTillMar;
      return yearsTillMar;
    } else {
      let yearsPastMar = 0;
      yearsPastMar = Math.round(marsSpan - 169);
      this.marPast = yearsPastMar;
      return yearsPastMar;
    }
  }

  jupiterYears() {
    let jupiterSpan = this.jupiter;
    if (jupiterSpan < 1067) {
      let yearsTillJup = 0;
      yearsTillJup = Math.round(1067 - jupiterSpan);
      this.jupTill = yearsTillJup;
      return yearsTillJup;
    } else {
      let yearsPastJup = 0;
      yearsPastJup = Math.round(jupiterSpan - 1067);
      this.jupPast = yearsPastJup;
      return yearsPastJup;
    }
  }
}