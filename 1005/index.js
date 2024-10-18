let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split('\n');

let valueA = parseFloat(lines[0]);
let valueB = parseFloat(lines[1]);

notaA = ((valueA * 3.5) /11);
notaB = ((valueB * 7.5) /11);

let average = 0;

function averageCalc (){
    average = (parseFloat(notaA) + parseFloat(notaB)).toFixed(5);
    console.log(`MEDIA = ${average}`);    
}

averageCalc();