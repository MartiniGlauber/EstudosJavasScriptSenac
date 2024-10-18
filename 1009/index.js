let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split('\n');

let name = lines[0];
let salary = parseFloat(lines[1]);
let sales = parseFloat(lines[2]);
let tip = 0;

console.log(typeof salary, salary);


function tipCalc(sales){
    tip = ((sales * 15)/100).toFixed(2);
    return tip; 
}
function grossSalaryCalc(){
    tip = parseFloat(tipCalc(sales));

    console.log(typeof tip, tip);

    let totalSalary = salary + tip;
    

    console.log(`TOTAL = R$ ${totalSalary}`);
}
grossSalaryCalc();


//Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas 
//por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, 
//informar o total a receber no final do mês, com duas casas decimais.