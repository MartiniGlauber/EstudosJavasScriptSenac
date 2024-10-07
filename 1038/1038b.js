let input = require("fs").readFileSync("stdin", "utf-8");
let lines = input.split(' ').map((x) => parseInt(x));


const valorLanche = {
    1: 4.00,
    2: 4.50,
    3: 5.00,
    4: 2.00,
    5: 1.50
}

const codigo = lines[0];
const qnt = lines[1];

function calculaLanche(id, quantidade){
    let resultado = valorLanche[id] * quantidade;
    return console.log(`Total: R$ ${resultado.toFixed(2)}`);
}
calculaLanche(codigo, qnt);
