var input = require("fs").readFileSync("dev/stdin", "utf-8");
var tempo = parseInt(input.split("\n"));

function calculaTempo(tempo) {
    let dias = tempo;

    const ano = parseInt(dias / 365);
    dias = dias % 365;
    console.log(`${ano} ano(s)`);

    const mes = parseInt(dias / 30);
    dias = dias % 30;
    console.log(`${mes} mes(es)`);

    console.log(`${dias} dia(s)`);

}
  
  calculaTempo(tempo);