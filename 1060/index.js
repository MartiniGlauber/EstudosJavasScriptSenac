let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split("\n").map((x) => parseFloat(x));

function contadorPositivos(numeros){
    let contador = 0;

    numeros.forEach(numero => {
        if(numero > 0){
            contador++;
        } 
    });

    console.log(`${contador} valores positivos`);   
}
contadorPositivos(lines);