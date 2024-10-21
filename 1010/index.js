let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split("\n");

let variavel1 = lines[0];
let variavel2 = lines[1];
let [cod1, numPecas, valor] = variavel1;


// variavel1.forEach(variavel => {
//     cod1 = variavel.split().map((x) => parseInt(x));
//     numPecas = variavel.split().map((x) => parseInt(x));
//     valor = variavel.split().map((x) => parseFloat(x));
// });

// variavel1 = lines[0];
// variavel1 = lines[0];
// variavel1 = lines[0];

console.log(typeof cod1, cod1);
console.log(typeof numPecas, numPecas);
console.log(typeof valor, valor);


//Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, 
//o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. 
//Após, calcule e mostre o valor a ser pago.