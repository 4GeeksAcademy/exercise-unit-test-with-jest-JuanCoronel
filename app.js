let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2,   // us dollar
    "GBP": 0.8,   // british pound
};


function sum (a,b) {
    return a + b;
}



// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


function fromDollarToYen(valueInDollar) {

    let valueInYen = valueInDollar * 106.5;
    return valueInYen;
}



const fromYenToPound = function (valueInYen) {

let valueInPound = valueInYen * 0.0063; 
    return valueInPound;

}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

