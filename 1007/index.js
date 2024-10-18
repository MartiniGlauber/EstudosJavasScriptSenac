let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split('\n');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);
let d = parseInt(lines[3]);

let difference = 0;

function dataCalc (){
   
    let leftSide = parseInt(a * b);
    let rightSide = parseInt(c * d);
    difference = parseInt(leftSide - rightSide);
    
    console.log(`DIFERENCA = ${difference}`);    
}
dataCalc();
