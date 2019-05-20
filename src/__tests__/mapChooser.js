import mapChooser from '../mapChooser'

describe("mapChooser", () => {
  it('Should return an image based on the input given to it', () => {
    const expected = 'portland.png';
    const actual = mapChooser('portland');
    expect(actual).toEqual(expected);
  });
  it('Should a default image when no input is given', () => {
    const expected = 'none.png';
    const actual = mapChooser("");
    expect(actual).toEqual(expected);
  });
});