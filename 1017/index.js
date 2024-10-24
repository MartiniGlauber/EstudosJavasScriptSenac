let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split('\n').map((x) => parseInt(x));

let time = lines[0];
let speed = lines[1];
let consume = 12;

function calcGas(){
    let gas = (speed / consume) * time;
    gas = (gas).toFixed(3);
    console.log(gas);
}
calcGas();

