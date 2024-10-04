let input = require("fs").readFileSync("stdin", "utf-8");
let lines = input.split(' ').map((x) => parseInt(x));

const valorLanche = [4.00, 4.50, 5.00, 2.00, 1.50];
const codigo = lines[0] -1;
const qnt = lines[1];

function calculaLanche(id, quantidade){
    let resultado = valorLanche[id] * quantidade;
    return console.log(`Total: R$ ${resultado.toFixed(2)}`);
}
calculaLanche(codigo, qnt);

