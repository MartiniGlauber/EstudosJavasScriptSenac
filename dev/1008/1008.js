let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split("\n");

let number = Number(lines.shift());
let valueHour = Number(lines.shift());
let hours = parseFloat(lines.shift());

function calcsalary(valueHour, hours){
    return(valueHour * hours).toFixed(2);
}

function showResult(number, value, hours){
    var salary = calcsalary(value, hours);

    console.log(`NUMBER = ${number}\nSALARY = U$ ${salary}`);
}
showResult();
