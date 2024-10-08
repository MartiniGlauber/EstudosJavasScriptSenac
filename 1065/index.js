let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split("\n").map((x) => parseInt(x));

function verificaPar(numeros){
    let contadorPares = 0;

    numeros.forEach(numero => {
        if(numero % 2 == 0){
            contadorPares++
        }
    });
    console.log(`${contadorPares} valores pares`)
}
verificaPar(lines);


