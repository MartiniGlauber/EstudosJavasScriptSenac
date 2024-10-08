let input = require("fs").readFileSync("dev/stdin", "utf-8");
let valores = input.split("\n").map((x) => parseInt(x));

valores.shift();
let dentroIntervalo = 0;
let foraIntervalo = 0;

const intervalo = (valor, min, max) => {
    return valor >= min && valor <= max;
};
const verificaNumero = (numeros) => {
    numeros.forEach((numero) => {
        if(intervalo(numero, 10, 20)){
            dentroIntervalo += 1;
        }else if(!isNaN(numero)){
            foraIntervalo += 1;
        }
    });
};
verificaNumero(valores);

console.log(`${dentroIntervalo} in`);
console.log(`${foraIntervalo} out`);