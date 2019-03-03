//Data 
const pokeData = window.POKEMON.pokemon;
let root = document.getElementById("root");
/*  Función para crear un template literal
    o plantilla de cadena de texto para incrustar
    las propiedades de los objetos */

function showAllPokemons(pokemon) {
    /*  Retorna un div que contiene la imagen, número,
        nombre y tipo de Pokemon */    
    return `
    <div class="poke-box">
        <p id=poke-num>${pokemon.num}<span id="poke-name"> ${pokemon.name}</span></p>    
        <img class="poke-img" src="${pokemon.img}">
        <p id=poke-type>${pokemon.type.join("\u00A0\u00A0\u00A0\u00A0")}</span></p>
        <div class="wrap-text" id="text-footer">
            <class="poke-weight">Weight: ${pokemon.weight}<br>
            <class="poke-height">Height: ${pokemon.height}<br>
            <class="poke-egg">Egg: ${pokemon.egg}<br>
            <class="poke-weak">Weaknesses:<br> ${pokemon.weaknesses.join("\u00A0\u00A0")}<br>
            <class="poke-next">Next evolution: ${pokemon.evolution}<br>
            
        </div>
    </div>
    `;
    
}


/*  Se manda a llamar al contenedor/div "" de html para depositar
    los template generados por la función pokeTemplate */
document.getElementById('root').innerHTML = `
    ${pokeData.map(showAllPokemons).join("")}
`;

//Selector
let typeSelector = document.getElementById("type-select");
let typeOptions = ["Grass", "Poison", "Fire", "Ice", "Flying", "Psychic", "Water", "Ground", "Rock", "Electric", "Bug", "Fighting", "Ghost", "Dragon", "Normal"];
typeOptions.forEach(optionType => {
    let options = document.createElement("option");
    options.textContent = optionType;
    options.id = optionType;
    options.value = optionType;
    typeSelector.appendChild(options);
});

const filterByType = document.getElementById("type-select");
filterByType.addEventListener("change", () => {
    let pokeType =filterByType.value;
    let filtered = window.dataLovers.pokeFilter(pokeData, pokeType);
    pokeTemplate(filtered);
});


const sortByName = document.getElementById("sort-by");
sortByName.addEventListener("change", () => {
    let sortBy = sortByName.value;
    let sorted = window.dataLovers.pokeSort(pokeData, sortBy);
    pokeTemplate(sorted);
});

function pokeTemplate (filtered){
    let result = "";
    root.innerHTML = '';
   filtered.forEach(pokemon => {
       result = root.innerHTML +=`
            <div class="poke-box">
                <p id=poke-num>${pokemon.num}<span id="poke-name"> ${pokemon.name}</span></p>    
                <img class="poke-img" src="${pokemon.img}">
                <p id=poke-type>${pokemon.type.join("\u00A0\u00A0\u00A0\u00A0")}</span></p>
                <div class="wrap-text" id="text-footer">
                    <class="poke-weight">Weight: ${pokemon.weight}<br>
                    <class="poke-height">Height: ${pokemon.height}<br>
                    <class="poke-egg">Egg: ${pokemon.egg}<br>
                    <class="poke-weak">Weaknesses:<br> ${pokemon.weaknesses.join("\u00A0\u00A0")}<br>
                </div>
            </div>
            `;
     });
     return result;
}