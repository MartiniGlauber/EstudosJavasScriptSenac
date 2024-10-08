let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split(" ").map((x) => parseInt(x));

 let entradaValor = lines[0];

 const calculaNumerosPares = (valor) => {
    let numerosPares = [];

     while(valor > 0){
         if(valor % 2 == 0){
            numerosPares.push(valor);
            }
         valor--;
     }
     numerosPares.sort((a, b) => a - b);

     numerosPares.forEach((numeroPar) =>{
        console.log(`${numeroPar} ^ 2 = ${numeroPar * numeroPar}`
        );
     });
 }
 calculaNumerosPares(entradaValor);
