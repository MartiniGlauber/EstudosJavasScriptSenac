let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split('\n');

let valueA = parseFloat(lines[0]);
let valueB = parseFloat(lines[1]);

notaA = ((valueA * 3.5) /11).toFixed(2);
notaB = ((valueB * 7.5) /11).toFixed(2);

let average = 0;

function averageCalc (){
    average = notaA + notaB;
    console.log(notaA);
    console.log(notaB);
    console.log(`MEDIA = ${average}`);    
}

averageCalc();
//Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. 
//A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 
//(A soma dos pesos portanto é 11). Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.