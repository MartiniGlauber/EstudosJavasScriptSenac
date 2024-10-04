let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split(' ').map((x) => parseFloat(x));

const salario = lines[0];
let faixa1 = 0.00;
let faixa2 = 0.00;
let faixa3 = 0.00;

if(salario <= 2000.00){
    console.log("Isento")
}else{
    calculaImposto(salario);
}
function calculaImposto(grana){
    if(salario > 2000 && salario <= 3000){
        faixa1 =  (salario - 2000)* 0.08;    
    }else if(salario > 3000 && salario <= 4500){
        faixa1 = 1000 * 0.08;
        faixa2 = (salario - 3000) * 0.18;
    }else{
        faixa1 = 1000 * 0.08;
        faixa2 = 1500 * 0.18;
        faixa3 = (salario - 4500) * 0.28;
    }
    
    let imposto = (faixa1 + faixa2 + faixa3).toFixed(2);
    
    console.log(`R$ ${imposto}`);
}

