let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split("\n");

function verificaNumero(){

    let numerosPares = 1;
    while (numerosPares <= 100){
        if(numerosPares % 2 == 0){
            console.log(numerosPares);
        }
        numerosPares++;
    }

}
verificaNumero();

