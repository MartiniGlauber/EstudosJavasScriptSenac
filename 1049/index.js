var input = require("fs").readFileSync("dev/stdin", "utf-8");
var lines = input.split('\n');

let tipoEsqueleto = lines[0];
let tipoAnimal = lines[1];
let tipoAlimento = lines[2];

function verificaAnimal(esqueleto, animal, alimento){
    if(esqueleto == "vertebrado"){
        if(animal == "ave"){
            if(alimento == "carnivoro"){
                console.log("aguia");
            }else{
                console.log("pombo");
            }
        }else if(animal == "mamifero"){
            if(alimento == "onivoro"){
                console.log("homem");            
            }else{
                console.log("vaca");
            }
        }
    }else if(esqueleto == "invertebrado"){
        if(animal == "inseto"){
            if(alimento == "hematofago"){
                console.log("pulga");
            }else{
                console.log("lagarta");
            }
        }else if(animal == "anelideo"){        
            if(alimento == "hematofago"){
                console.log("sanguessuga");
            }else{
                console.log("minhoca");
            }
        }    
    }
}
verificaAnimal(tipoEsqueleto, tipoAnimal, tipoAlimento);