const wrapper = document.querySelector(".wrapper");
const form = wrapper.querySelector("form");
const inputList = wrapper.querySelector("#inputList");
const addListBtn = wrapper.querySelector("#addListBtn");
const list = wrapper.querySelector("#list");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    let listValue = inputList.value.trim();
    if(listValue) {
        let listItem = document.createElement("li");
        listItem.textContent = listValue;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Deletar item";
        deleteBtn.addEventListener("click", () => {
            listItem.remove();
        });
        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);

        inputList.value = "";
        inputList.focus();
    }
});