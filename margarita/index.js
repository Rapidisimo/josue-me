const servings = document.getElementById('servings');
const ingredientList = document.getElementById('ingredient-list')


// Single Serving
// 45 ml tequila
// 30 ml orange liqueur
// 32.5 g orange (1/4 of a med orange)
// 1/4 lime, peeled
// 1/4 lemon, peeled
// 30 ml / 1 oz Syrup
// 195 g ice cubes



function ingredientQuantities () {
    const tequilaVol = (servings.value * 45 / 29.574).toFixed(1);
    const oLiqueurVol = (servings.value * 30 / 29.574).toFixed(1);
    let orange = .25;
    let lime = .25;
    let lemon = .25;
    const syrup = (servings.value * 30 / 29.574).toFixed(1);
    const iceCubes = (servings.value * 195).toFixed(1)
    ingredientList.innerHTML = `
    <li id="tequila"><strong>${tequilaVol}</strong> Oz of Tequila Blanco</li>
    <li id="cointreau"><strong>${oLiqueurVol}</strong> Oz of Cointreau</li>
    <li id="orange"><strong>${orange}</strong> Medium Orange Peeled</li>
    <li id="lime"><strong>${lime}</strong> Lime Peeled</li>
    <li id="lemon"><strong>${lemon}</strong> Lemon Peeled</li>
    <li id="syrup"><strong>${syrup}</strong> Oz Simple Syrup</li>
    <li id="ice"><strong>${iceCubes}</strong> g Ice</li>
    `;
}

ingredientQuantities()

servings.addEventListener('input', () => {
    ingredientQuantities()
})