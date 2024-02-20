// Pobranie referencji do elementów HTML
const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const resultLabel = document.getElementById('result');
// Funkcje matematyczne
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    if (y === 0) {
        throw new Error("Nie można dzielić przez zero!");
    }
    return x / y;
}
// Obsługa zdarzeń kliknięcia przycisków
addButton.addEventListener('click', () => {
    const firstNumber = parseFloat(firstNumberInput.value);
    const secondNumber = parseFloat(secondNumberInput.value);
    const result = add(firstNumber, secondNumber);
    resultLabel.textContent = `Wynik: ${result}`;
});
subtractButton.addEventListener('click', () => {
    const firstNumber = parseFloat(firstNumberInput.value);
    const secondNumber = parseFloat(secondNumberInput.value);
    const result = subtract(firstNumber, secondNumber);
    resultLabel.textContent = `Wynik: ${result}`;
});
multiplyButton.addEventListener('click', () => {
    const firstNumber = parseFloat(firstNumberInput.value);
    const secondNumber = parseFloat(secondNumberInput.value);
    const result = multiply(firstNumber, secondNumber);
    resultLabel.textContent = `Wynik: ${result}`;
});
divideButton.addEventListener('click', () => {
    const firstNumber = parseFloat(firstNumberInput.value);
    const secondNumber = parseFloat(secondNumberInput.value);
    try {
        const result = divide(firstNumber, secondNumber);
        resultLabel.textContent = `Wynik: ${result}`;
    }
    catch (error) {
        resultLabel.textContent = "Błąd: " + error.message;
    }
});
