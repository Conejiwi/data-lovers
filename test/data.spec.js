import { dataByName } from '../src/data.js';

describe("dataByName", () =>{
  it("verificar nombre de champ", () =>{
    const data = dataByName("Caitlyn")
    expect(data.name).toEqual("Caitlyn")
  })
})

/* describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
