// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;
// const POKEMON = () =>{
//   return POKEMON;
//};

window.pokeLovers = {
  pokeFilter: (pokeData, pokeType) => {
    //console.log(pokeType)
    let filterByType = pokeData.filter(pokeData => pokeData.type.includes(pokeType));
    return filterByType;
  },


  sort: (pokeData, sortBy, sortOrder) =>{
    if (sortBy == "name" && sortOrder == "A-Z") {
      return pokeData.sort((a, b) => (a.name) - (b.name));
    } else if (sortBy == "name" && sortOrder == "Z-A") {
      return pokeData.sort((a, b) => (b.name)- (a.name));
    } else if (sortBy == "number" && sortOrder == "001-151") {
      return pokeData.sort((a, b) => parseFloat(a.number) - parseFloat(b.number));
    } else if (sortBy == "number" && sortOrder == "151-001") {
      return pokeData.sort((a, b) => parseFloat(b.number) - parseFloat(a.number));
    } else {
      return pokeData;
    }

  }

}

