let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split(' ').map((x) => parseInt(x));


const segundosTotais = lines [0];

function calculaTempo(tempo){
    let horas = Math.floor(tempo/3600);
    let minutos = Math.floor((tempo % 3600) / 60);
    let segundos = tempo % 60;

    
console.log(`${horas}:${minutos}:${segundos}`);
}

calculaTempo(segundosTotais);
