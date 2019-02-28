//Data 
const pokeData = window.POKEMON.pokemon;

/*  Función para crear un template literal
    o plantilla de cadena de texto para incrustar
    las propiedades de los objetos */
function pokeTemplate(pokemon) {
    /*  Retorna un div que contiene la imagen, número,
        nombre y tipo de Pokemon */
        
    return `
    <div class="poke-box">
        <p id=poke-num>${pokemon.num}<span id="poke-name"> ${pokemon.name}</span></p>    
        <img class="poke-img" src="${pokemon.img}">
        <p id=poke-type>${pokemon.type.join(", ")}</span></p>
        <div class="wrap-text" id="text-footer">
            <class="poke-weight">Peso: ${pokemon.weight}<br>
            <class="poke-height">Altura: ${pokemon.height}<br>
            <class="poke-egg">Huevo: ${pokemon.egg}<br>
            <class="poke-weak">Debilidades:<br> ${pokemon.weaknesses.join(", ")}<br>
        </div>
    </div>
    `;
}
/*  Se manda a llamar al contenedor/div "" de html para depositar
    los template generados por la función pokeTemplate */
document.getElementById('root').innerHTML = `
    ${pokeData.map(pokeTemplate).join("")}
`;

//Selector
let typeSelector = document.getElementById("type-select");
let typeOptions = ["Grass", "Poison", "Fire", "Ice", "Flying", "Psychic", "Water", "Ground", "Rock", "Electric", "Bug", "Fighting", "Fairy", "Ghost", "Dark", "Steel", "Dragon", "Normal"];
// for(let i=0; i<typeButtons.length; i++){
//     let pokeOptions = typeButtons[i];
//     let options = document.createElement("option");
//     options.textContent = pokeOptions;
//     options.id = pokeOptions;
//     options.value = pokeOptions;
//     typeSelector.appendChild(options);
// }
typeOptions.forEach(optionType => {
    let options = document.createElement("option");
    options.textContent = optionType;
    options.id = optionType;
    options.value = optionType;
    typeSelector.appendChild(options);
});

const filterByType = document.getElementById("type-select");
filterByType.addEventListener("change", () =>{
    let pokeType =filterByType.value
    let filtered = window.pokeLovers.pokeFilter(pokeData, pokeType);

    //limpiar div
    root.innerHTML = "";
    filtered.forEach(pokemon =>{
        root.innerHTML += `
        <div class="poke-box">
        <p id=poke-num>${pokemon.num}<span id="poke-name"> ${pokemon.name}</span></p>    
        <img class="poke-img" src="${pokemon.img}">
        <p id=poke-type>${pokemon.type.join(", ")}</span></p>
        <div class="wrap-text" id="text-footer">
            <class="poke-weight">Peso: ${pokemon.weight}<br>
            <class="poke-height">Altura: ${pokemon.height}<br>
            <class="poke-egg">Huevo: ${pokemon.egg}<br>
            <class="poke-weak">Debilidades:<br> ${pokemon.weaknesses.join(", ")}<br>
        </div>
    </div>
    `;
    })
})

let sortSelector = document.getElementById("sort-select");
let sortOptions = ["A-Z", "Z-A", "001-151", "151-001"];
sortOptions.forEach(optionSort => {
    let options = document.createElement("option");
    options.textContent = optionSort;
    options.id = optionSort;
    options.value = optionSort;
    sortSelector.appendChild(options);
});

// const sortBy = document.getElementById("sort-select");
// sortBy.addEventListener("change", () =>{
//     let sortBy =sortBy.value

//     let sortered = window.pokeLovers.pokeSort(pokeData, sortBy, sortOrder);
const sortPokemon = (selectOrder) => {
    selectOrder.forEach(sorter => {
      sorter.addEventListener("change", (event) => {
        const idDivi = event.target.id;
        const sortBy = idDivi[0];
        const sortOrder = idDivi[1];
        const sortByOrder = window.pokeLovers.pokeSort(pokeData, sortBy, sortOrder);
            //limpiar div
    root.innerHTML = "";
    sortByOrder.forEach(pokemon =>{
        root.innerHTML += `
        <div class="poke-box">
        <p id=poke-num>${pokemon.num}<span id="poke-name"> ${pokemon.name}</span></p>    
        <img class="poke-img" src="${pokemon.img}">
        <p id=poke-type>${pokemon.type.join(", ")}</span></p>
        <div class="wrap-text" id="text-footer">
            <class="poke-weight">Peso: ${pokemon.weight}<br>
            <class="poke-height">Altura: ${pokemon.height}<br>
            <class="poke-egg">Huevo: ${pokemon.egg}<br>
            <class="poke-weak">Debilidades:<br> ${pokemon.weaknesses.join(", ")}<br>
        </div>
    </div>
    `;
  
        
  
      })
    })
  })
}