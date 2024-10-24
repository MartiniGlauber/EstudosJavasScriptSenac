let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split('\n');

let pointA = lines[0];
let pointB = lines[1];

pointA = pointA.split(' ');
pointB = pointB.split(' ');

let [x1, y1] = pointA;
let [x2, y2] = pointB;

function distanceCalc(){
    let deltaPointA = Math.pow((x2 - x1), 2);
    let deltaPointb = Math.pow((y2 - y1), 2);
    let deltaUnified = deltaPointA + deltaPointb;
    let distance = (Math.sqrt(deltaUnified)).toFixed(4);
    console.log(`${distance}`);
}
distanceCalc();
//Leia os quatro valores correspondentes aos eixos x e y 
//de dois pontos quaisquer no plano, p1(x1,y1) 
//e p2(x2,y2) e calcule a distância entre eles, 
//mostrando 4 casas decimais, segundo a fórmula: