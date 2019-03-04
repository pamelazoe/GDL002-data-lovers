require('../src/data.js');
const pokemon = require('../src/data/pokemon/pokemon.json');



describe('pokemon',()=>{
  it('is an object',()=>{
    expect(typeof pokemon).toBe('object');
  });
});

describe('dataLovers',()=>{
  it('is an object',()=>{
    expect(typeof dataLovers).toBe('object');
  });
});

describe('pokeFilter()',()=>{
  it('is an function',()=>{
    expect(typeof dataLovers.pokeFilter).toBe('function');
  });
  it('debería retornar an array when filter by Grass type', () => {
    expect(Array.isArray(dataLovers.pokeFilter(pokemon.pokemon,"Grass"))).toBe(true); 
  });
  it('should return a subset of Grass pokemon', () => {
  });
});

describe('pokeSort()',()=>{
  it('is an function',()=>{
    expect(typeof dataLovers.pokeSort).toBe('function');
  });

  it('should return Abra first when sorted from a to z', () => {
    expect(window.dataLovers.pokeSort(pokemon.pokemon,  "a-Z")[0].name).toBe('Abra');
  });
  it('should return Zubat first when sorted from z to a', () => {
    expect(window.dataLovers.pokeSort(pokemon.pokemon,  "Z-a")[0].name).toBe('Zubat');
  });
  it('should return Bulbasaur first when sorted 001 to 151', () => {
    expect(window.dataLovers.pokeSort(pokemon.pokemon,  "001-151")[0].name).toBe('Bulbasaur');
  });
  it('should return Mew first when sorted from 151 to 001', () => {
    expect(window.dataLovers.pokeSort(pokemon.pokemon,  "151-001")[0].name).toBe('Mew');
  });
 
});


