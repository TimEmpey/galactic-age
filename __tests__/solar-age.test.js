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

  test('should take age and compute Mercury age', () => {
    let input = new AgeInput(25);
    expect(input.findVenusAge()).toEqual(16)
  });
});