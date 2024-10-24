let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split(' ').map((x) => parseInt(x));

let value = lines[0];
function calcBallot(value){
    const ballots = [100, 50, 20, 10, 5, 2, 1];
    let result = {};
    ballots.forEach(ballot => {
        result[ballot] = Math.floor(value / ballot);
        value = value % ballot;
    });
    return result;
}
result = calcBallot(value);
let hundred = result[100];
let fifty = result[50];
let twenty = result[20];
let ten = result[10];
let five = result[5];
let two = result[2];
let one = result[1];
console.log(value);
console.log(`${hundred} nota(s) de R$ 100,00`);
console.log(`${fifty} nota(s) de R$ 50,00`);
console.log(`${twenty} nota(s) de R$ 20,00`);
console.log(`${ten} nota(s) de R$ 10,00`);
console.log(`${five} nota(s) de R$ 5,00`);
console.log(`${two} nota(s) de R$ 2,00`);
console.log(`${one} nota(s) de R$ 1,00`);

//Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor 
//pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. 
//A seguir mostre o valor lido e a relação de notas necessárias.

