let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split(" ").map((x) => parseFloat(x));

const a = lines [0];
const b = lines [1];
const c = lines [2];

function calculaBhaskara(a, b, c){
    let delta = b * b - 4 * a * c;

    if(delta < 0 || a == 0){
        return("Impossivel calcular");
    } else {
        let x1 = (- b + Math.sqrt(delta)) / (2 * a);
        let x2 = (- b - Math.sqrt(delta)) / (2 * a);

        return(`R1 = ${x1.toFixed(5)}\nR2 = ${x2.toFixed(5)}`);
    }    
}
console.log(calculaBhaskara(a,b,c));
