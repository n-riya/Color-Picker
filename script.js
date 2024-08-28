let colorPickerContainerElement = document.getElementById("colorPickerContainer");
let backgroundChange = document.getElementById("selectedColorHexCode");


function bgwhite() {
    colorPickerContainerElement.style.backgroundColor = "#e0e0e0";
    backgroundChange.textContent = "#e0e0e0";
}

function bggreen() {
    colorPickerContainerElement.style.backgroundColor = "#6fcf97";
    backgroundChange.textContent = "#6fcf97";
}

function bgblue() {
    colorPickerContainerElement.style.backgroundColor = "#56ccf2";
    backgroundChange.textContent = "#56ccf2"

}

function bgpurple() {
    colorPickerContainerElement.style.backgroundColor = "#bb6bd9";
    backgroundChange.textContent = "#bb6bd9"

}