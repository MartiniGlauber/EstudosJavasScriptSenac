let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split('\n');

let km = parseInt(lines[0]);
let gas = parseFloat(lines[1]);

function calcConsumeGas(){
    let consume = (km / gas).toFixed(3);
    console.log(`${consume} km/l`);
}
calcConsumeGas();
//Calcule o consumo médio de um automóvel 
//sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).