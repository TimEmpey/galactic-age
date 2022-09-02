import AgeInput from '../src/solar-age.js';

describe('AgeInput', () => {

  test('should collect users inputted age and create an object with it', () => {
    let input = new AgeInput(25);
    expect(input.age).toEqual(25);
  });

  test('should say how many years until user is 90 or how many years past 90 on Earth', () => {
    let input = new AgeInput(25);
    expect(input.earthYears).toEqual(65);
  });

  test('should take age and compute Mercury age', () => {
    let input = new AgeInput(25);
    expect(input.findMercuryAge()).toEqual(6)
  });

  test('should take age and compute Venus age', () => {
    let input = new AgeInput(25);
    expect(input.findVenusAge()).toEqual(16)
  });

  test('should take age and compute Jupiter age', () => {
    let input = new AgeInput(25);
    expect(input.findJupiterAge()).toEqual(47)
  });
});