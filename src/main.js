//Data 
const pokeData = window.POKEMON.pokemon;
/*  Función para crear un template literal
    o plantilla de cadena de texto para incrustar
    las propiedades de los objetos */
function pokeTemplate(pokemon) {
    /*  Retorna un div que contiene la imagen, número,
        nombre y tipo de Pokemon */
    return `
    <div class="poke-Box">
        <img class="poke-img" src="${pokemon.img}">
        <div class="wrap-text" id="text-footer">
        <p class=pokeNum>${pokemon.num}<span class="pokeName"> ${pokemon.name}</p>
        <p class=pokeType>${pokemon.type.join(" ")}</span></p>
        </div>
        </div>
    `
}
/*  Se manda a llamar al contenedor/div "root" de html para depositar
    los template generados por la función pokeTemplate */
document.getElementById('root').innerHTML=`
    ${pokeData.map(pokeTemplate).join("")}
`
let typeButtonsContainer = document.getElementById("type-buttons");
let typeButtons = ["Grass", "Poison", "Fire", "Ice", "Flying", "Psychic", "Water", "Ground", "Rock", "Electric", "Bug", "Fighting", "Fairy", "Ghost", "Dark", "Steel", "Dragon", "Normal"];
for (let i in typeButtons) {
    let pokeTypeButtons = document.createElement("button");
    pokeTypeButtons.value = typeButtons[i];
    pokeTypeButtons.id = typeButtons[i];
    pokeTypeButtons.innerHTML = typeButtons[i];
    typeButtonsContainer.appendChild(pokeTypeButtons);
}