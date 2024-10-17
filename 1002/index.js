let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split(' ');

let raio = lines[0];
const pi =  3.14159;
let area = 0;

function areaCalc (){
    area = (pi * Math.pow(raio, 2)).toFixed(4);
    console.log(`A=${area}`)
}

areaCalc(raio);