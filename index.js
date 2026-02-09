/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterFeetRate = 3.281
const literGallonRate = 0.264
const kilogramPoundRate = 2.204


const convertBtn = document.getElementById("convert-btn") 
const inputEl = document.getElementById("input-el")
const resultLength = document.getElementById("result-length")
const resultVolume = document.getElementById("result-volume")
const resultMass = document.getElementById("result-mass")
inputEl.focus()

convertBtn.addEventListener("click", function () {
    renderConversionResults()
})

inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        renderConversionResults()
    }
})

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        inputEl.value = ""
    }
})

function renderConversionResults() {
    const inputValue = parseFloat(inputEl.value)

    if (isNaN(inputValue) || inputValue < 0){
       resultLength.innerHTML = "Please enter a valid positive number"
       resultVolume.innerHTML = "Please enter a valid positive number"
       resultMass.innerHTML = "Please enter a valid positive number"

       inputEl.value = ""
       return
    }

    const metersToFeet = (inputValue * meterFeetRate).toFixed(3)
    const feetToMeters = (inputValue / meterFeetRate).toFixed(3)
    const lengthResult = `${inputValue} meters = ${metersToFeet} feet <span class="divider"></span> ${inputValue} feet = ${feetToMeters} meters` 
    resultLength.innerHTML = lengthResult

    const litersToGallons = (inputValue * literGallonRate).toFixed(3)
    const gallonsToLiters = (inputValue / literGallonRate).toFixed(3)
    const volumeResult = `${inputValue} liters = ${litersToGallons} gallons <span class="divider"></span> ${inputValue} gallons = ${gallonsToLiters} liters` 
    resultVolume.innerHTML = volumeResult

    const kilogramsToPounds = (inputValue * kilogramPoundRate).toFixed(3)
    const poundsToKilograms = (inputValue / kilogramPoundRate).toFixed(3)
    const massResult = `${inputValue} kilograms = ${kilogramsToPounds} pounds <span class="divider"></span> ${inputValue} pounds = ${poundsToKilograms} kilograms` 
    resultMass.innerHTML = massResult



}