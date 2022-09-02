import AgeInput from '../src/solar-age.js';

describe('AgeInput', () => {

  test('should collect users inputted age and create an object with it', () => {
    let input = new AgeInput(25);
    expect(input.age).toEqual(25);
  });

  test('should take age and compute Mercury age', () => {
    let input = new AgeInput(25);
    expect(input.findMercuryAge()).toEqual(6)
  });

  test('should take age and compute Venus age', () => {
    let input = new AgeInput(25);
    expect(input.findVenusAge()).toEqual(16)
  });
  
  test('should take age and compute Mars age', () => {
    let input = new AgeInput(25);
    expect(input.findMarsAge()).toEqual(47)
  });

  test('should take age and compute Jupiter age', () => {
    let input = new AgeInput(25);
    expect(input.findJupiterAge()).toEqual(297)
  });

  test('should say how many years until user is 90 or how many years past 90 on Earth', () => {
    let input = new AgeInput(25);
    expect(input.earthYears()).toEqual(65);
  });

  test('should say how many years until user is 22 or how many years past 22 on Mercury', () => {
    let input = new AgeInput(25, 6);
    expect(input.mercuryYears()).toEqual(16);
  });

  test('should say how many years until user is 56 or how many years past 56 on Venus', () => {
    let input = new AgeInput(25, 6, 16);
    expect(input.venusYears()).toEqual(40);
  });

  test('should say how many years until user is 169 or how many years past 169 on Mars', () => {
    let input = new AgeInput(25, 6, 16, 47);
    expect(input.marsYears()).toEqual(122);
  });

  test('should say how many years until user is 1067 or how many years past 1067 on Jupiter', () => {
    let input = new AgeInput(25, 6, 16, 47, 297);
    expect(input.jupiterYears()).toEqual(770);
  });
});