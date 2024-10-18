let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split('\n');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let prod = 0;


function prodCalc (){
    prod = a * b;
    console.log(`PROD = ${prod}`);
}

prodCalc();