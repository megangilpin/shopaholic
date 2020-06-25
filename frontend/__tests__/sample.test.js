// use describe to group together related tests
describe('sample test 101', () => {
  // can use test instead of it
  // test();
  // new it for each section you wan to test 
it('works as expected', () => {
    const age = 100;
    expect(age).toEqual(100);
  });

  it('handles ranges just fine', () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });

  // use .skip or x to skip over a test
  // use .only or f to only run that one test
it('makes a list of dog namges', () => {
    const dogs = ['snickers', 'hugo'];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain('snickers')
  })

})