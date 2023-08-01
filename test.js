// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});



const app = require('./app.js');
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = app;

test("One euro should be 1.2 dollars", function () {
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("Convert dollars to yen", function () {
    expect(fromDollarToYen(1)).toBe(106.5);
});

test("Convert yen to pounds", function () {
    expect(fromYenToPound(1)).toBe(0.0063);
});





