// Importamos las funciones del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Prueba de la función sum
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Prueba de euro a dólar
test('One euro should be 1.07 dollars', () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

// Prueba de dólar a yen
test('One dollar should be around 146.26 yen', () => {
    // 1 USD → EUR → JPY
    let result = fromDollarToYen(1);
    expect(result).toBeCloseTo(146.26); 
});

// Prueba de yen a libra
test('One yen should be around 0.0055 pounds', () => {
    // 1 JPY → EUR → GBP
    let result = fromYenToPound(1);
    expect(result).toBeCloseTo(0.0055); 
});
