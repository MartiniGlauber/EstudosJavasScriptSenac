let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split(' ');

let km = lines[0];

function calcTime(){
    let time = km * 2;
    console.log(`${time} minutos`);
}
calcTime();

