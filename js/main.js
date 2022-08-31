// elements of form
const squareInput =   document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');
//radio buttons
const radioType =  document.querySelectorAll('input[name="type"]');
const radioBuilding =  document.querySelectorAll('input[name="building"]');
const radioRooms =  document.querySelectorAll('input[name="rooms"]');

//checkbox
const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');


const basePrice = 6000;
const totalPriseElement = document.querySelector('#total-price')

// conect range with text
//listenner input
squareRange.addEventListener('input', function() {
    squareInput.value= squareRange.value;
})

// conect range with text
squareInput.addEventListener('input', function() {
    squareRange.value = squareInput.value;
})

function calculate() {

    let totalPrise =   basePrice * parseInt(squareInput.value);

 for (const radio of radioType) {
    if (radio.checked === true) {
        totalPrise = totalPrise * parseFloat(radio.value);
    }
 }


 for (const radio of radioBuilding) {
    if (radio.checked === true) {
        totalPrise = totalPrise * parseFloat(radio.value);
    }
 }


 for (const radio of radioRooms) {
    if (radio.checked === true) {
        totalPrise = totalPrise * parseFloat(radio.value);
    }
 }

 
 if(ceilings.checked === true) {
    totalPrise = totalPrise * parseFloat(ceilings.value);
 }

 if(walls.checked === true) {
    totalPrise = totalPrise * parseFloat(walls.value);
 }

 if(floor.checked === true) {
    totalPrise = totalPrise * parseFloat(floor.value);
 }

 const formatter = new Intl.NumberFormat('ua');
 formatter.format(totalPrise);
 
 totalPriseElement.innerText = formatter.format(totalPrise);
 
}
calculate();


for (const input of inputs) {
    input.addEventListener('input', function() {
        calculate();
    })
    
}