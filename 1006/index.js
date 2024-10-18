let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split('\n');

let valueA = parseFloat(lines[0]);
let valueB = parseFloat(lines[1]);
let valueC = parseFloat(lines[2]);

let average = 0;

function averageCalc (){
   
    let notaA = (valueA * 2)/10;
    let notaB = (valueB * 3)/10;
    let notaC = (valueC * 5)/10;

    average = (notaA + notaB + notaC).toFixed(1);
    console.log(`MEDIA = ${average}`);    
}
averageCalc();