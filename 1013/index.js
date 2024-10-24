let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split(' ').map((x) => parseInt(x));

let a = lines[0];
let b = lines[1];
let c = lines[2];
let bigger = 0;
let biggerAb = 0;

function calcBigger(){
    biggerAb = (a + b + Math.abs(a-b))/2;
    bigger = (biggerAb + c + Math.abs(biggerAb -c))/2;
    console.log(`${bigger} eh o maior`);
}
calcBigger();
// function verifyBigger(){
//     if (a >= b && a >= c) {
//         bigger = a;
//     } else if (b >= a && b >= c) {
//         bigger = b;
//     } else {
//         bigger = c;
//     }
//     console.log(`${bigger} eh o maior`);
// }
// verifyBigger();