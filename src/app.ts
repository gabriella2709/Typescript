// Pobranie referencji do elementów HTML
const firstNumberInput = document.getElementById('firstNumber') as HTMLInputElement;
const secondNumberInput = document.getElementById('secondNumber') as HTMLInputElement;
const addButton = document.getElementById('addButton') as HTMLButtonElement;
const subtractButton = document.getElementById('subtractButton') as HTMLButtonElement;
const multiplyButton = document.getElementById('multiplyButton') as HTMLButtonElement;
const divideButton = document.getElementById('divideButton') as HTMLButtonElement;
const resultLabel = document.getElementById('result') as HTMLLabelElement;

// Funkcje matematyczne
function add(x: number, y: number): number {
    return x + y;
}

function subtract(x: number, y: number): number {
    return x - y;
}

function multiply(x: number, y: number): number {
    return x * y;
}

function divide(x: number, y: number): number {
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
    } catch (error) {
        resultLabel.textContent = "Błąd: " + error.message;
    }
});
