let input = require("fs").readFileSync("dev/stdin", "utf-8");
let lines = input.split("\n");

const teaFlavor = parseInt(lines[0]);
let answer = lines[1].split('').map((x) => parseInt(x));
let rightAnswer = 0;

function verifyAnswer() {
    for (let i = 0; i < answer.length; i++) {
        if(answer[i] == teaFlavor){
            rightAnswer++;
        }
    }
    return console.log(rightAnswer);
}

verifyAnswer();