let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split(' ').map((x) => parseFloat(x));

let a = lines[0];
let b = lines[1];
let c = lines[2];

function calcTriangleArea(){
    let triangle = ((a * c) / 2).toFixed(3);
    console.log(`TRIANGULO: ${triangle}`);
}
function calcCircleArea(){
    let pi = 3.14159;
    let circle = (pi * Math.pow(c, 2)).toFixed(3);
    console.log(`CIRCULO: ${circle}`);
}
function calcTrapezeArea(){
    let trapeze = (((a + b) * c)/2).toFixed(3);
    console.log(`TRAPEZIO: ${trapeze}`);
}
function calcSquareArea(){
    let square = (Math.pow(b, 2)).toFixed(3);
    console.log(`QUADRADO: ${square}`);
}
function calcRectangleArea(){
    let rectangle = (a * b).toFixed(3);
    console.log(`RETANGULO: ${rectangle}`);
}
calcTriangleArea();
calcCircleArea();
calcTrapezeArea();
calcSquareArea();
calcRectangleArea();

//Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. 
//Em seguida, calcule e mostre:
//a) a área do triângulo retângulo que tem A por base e C por altura.
//b) a área do círculo de raio C. (pi = 3.14159)
//c) a área do trapézio que tem A e B por bases e C por altura.
//d) a área do quadrado que tem lado B.
//e) a área do retângulo que tem lados A e B. 