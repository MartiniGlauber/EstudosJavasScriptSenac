let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split(' ').map((x) => parseInt(x));

const a = lines[0];
const b = lines[1];
const c = lines[2];
const d = lines[3];

let somaAb = a + b;
let somaCd = c + d;

function verificaSoma(somaAb, somaCd){
    if(a % 2 == 0 && b > c && d > a && somaCd > somaAb && c > 0 && d > 0){
        console.log("Valores aceitos")
    }else{
        console.log("Valores nao aceitos")
    }
}

verificaSoma(somaAb, somaCd);


