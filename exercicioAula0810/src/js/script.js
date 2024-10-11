const form = document.querySelector("form");
const input = document.querySelector("#inputList");
const addListBtn = document.querySelector("#addListBtn");
const list = document.querySelector(".list");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let inputValue = input.value.trim();
    if(validaInput()){
        return
    }
    addListBtn.innerText = "Adicionar item a lista";
    input.value = "";
    
    let li = document.createElement("li");
    li.innerText = inputValue;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Deletar item";
    li.appendChild(deleteBtn);
    list.appendChild(li);

    deleteBtn.addEventListener("click", (event) => {
        event.target.parentElement.remove();
    });    
});

function validaInput(){
    if(input.value == ''){
        alert('Você precisa inserir um item!');
        return true;
    }
    return false
}