let input = require("fs").readFileSync("dev/stdin", "utf-8");
let entradaValor = input.split(" ").map((x) => parseInt(x));

 const calculaNumerosPares = (valor) => {
    for (let i = 1; i <= valor; i++) {
        if (i % 2 === 0){
            console.log(`${i}^2 = ${i ** 2}`);
         }
    }
 }
 calculaNumerosPares(entradaValor);