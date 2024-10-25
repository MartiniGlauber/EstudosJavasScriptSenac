let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split('\n').map((x) => parseInt(x));

let a = lines[0];
let b = lines[1];
let x = 0;

x = a + b;

console.log(`X = ${x}`);

//Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B 
//atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. 
//Não apresente mensagem alguma além daquilo que está sendo especificado e não esqueça de imprimir 
//o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".