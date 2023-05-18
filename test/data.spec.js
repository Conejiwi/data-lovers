import { dataByName, filterByName, ordenar } from '../src/data.js';

describe("dataByName", () =>{
  it("verificar nombre de champ", () =>{
    const data = dataByName("Caitlyn")
    expect(data.name).toEqual("Caitlyn")
  })
})

describe('ordenar', () => {
  it('verificar tipo de dato', () => {
    const data = ordenar(true)
    expect(typeof data).toBe('object');
  });
  it('ordenar AZ', () => {
    const data = ordenar(true)
    expect(data[0]).toEqual('Aatrox');
  });
  it('ordenar ZA', () => {
    const data = ordenar(false)
    expect(data[0]).toEqual('Zyra');
  });
});


describe('filterByName', () => {
  it('verificar tipo de dato', () => {
    const data = filterByName("Caitlyn")
    expect(typeof data).toBe('object');
  });
  it("verificar champ", () => {
    const data = filterByName("Caitlyn")
    expect(data.length).toEqual(1);
  });
  it("verificar champ 2", () => {
    const data = filterByName("Vi")
    expect(data.length).toEqual(4);
  });
});