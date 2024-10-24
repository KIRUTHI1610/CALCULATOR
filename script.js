let display = document.getElementById('display');

function appendCharacter(character) {
    display.value += character;
}

function calculate() {
    try {
        display.value = math.evaluate(display.value).toString();
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}
