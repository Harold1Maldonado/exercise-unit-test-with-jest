console.log("Hello World")

// Función que suma
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// Exportamos funciones
module.exports = { sum };

// Tasas de conversión (1€ equivale a:)
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87,  // libra esterlina
};

// Convertir de dólares a yenes
function fromDollarToYen(dollar) {
    let euro = dollar / oneEuroIs["USD"]; // pasamos de USD a EUR
    let yen = euro * oneEuroIs["JPY"];   // de EUR a JPY
    return yen;
}

// Convertir de euros a dólares
function fromEuroToDollar(euro) {
    return euro * oneEuroIs["USD"];
}

// Convertir de yenes a libras
function fromYenToPound(yen) {
    let euro = yen / oneEuroIs["JPY"];  // de JPY a EUR
    let pound = euro * oneEuroIs["GBP"]; // de EUR a GBP
    return pound;
}

// Exportar las funciones
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };
