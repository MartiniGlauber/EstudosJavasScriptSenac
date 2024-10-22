let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split("\n");

let productA = lines[0];
let productB = lines[1];

productA = productA.split(' ');
productB = productB.split(' ');

let dataA = productA.map(x => parseFloat(x));
let dataB = productB.map(x => parseFloat(x));

let calcDataA = dataA.slice(1); 
let [part1, value1] = calcDataA;
let calcDataB = dataB.slice(1);
let [part2, value2] = calcDataB;

let priceA = 0;
let priceB = 0;

function calcProductPrice(){
    priceA = part1 * value1;
    priceB = part2 * value2;
    totalPrice = (priceA + priceB).toFixed(2);
    console.log(`VALOR A PAGAR: R$ ${totalPrice}`);
}

calcProductPrice();


//Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, 
//o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. 
//Após, calcule e mostre o valor a ser pago.