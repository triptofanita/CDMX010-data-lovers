import { getPokemones, filterData } from '../src/data.js';

describe('Probar Async/Await', () => {

  it('Realizar peticion a una api', async () => {

    await getPokemones().then(data => {

      expect(data.results).toBeGreaterThan[0];

    });
  });
});


describe('Probar filtrar pokemones', () => {
  it('Filtrar pokemones por tipo', async () => {
    await getPokemones().then(data => {
      expect(filterData(data.pokemon, "poison")[0].type).toContain( "poison");
     })
  })
});     
      

/*it('returns `example`', () => {
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
});*/
