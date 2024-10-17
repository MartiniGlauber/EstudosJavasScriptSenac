let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split('\n');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let soma = 0;

function sumCalc (){
    soma = a + b;
    console.log(`SOMA = ${soma}`);
}

sumCalc();