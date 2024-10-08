const wrapper = document.querySelector(".wrapper");
const form = wrapper.querySelector("form");
const qrInput = wrapper.querySelector("#qrInput");
const generateBtn = form.querySelector("button");
const qrImg = wrapper.querySelector(".qr-code img");

let preValue;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let qrValue = qrInput.value.trim();
    console.log(qrValue);
    if(!qrValue || preValue == qrValue){
        alert("Preencha o campo para gerar o QR Code")
        return
    }

    preValue = qrValue;
    generateBtn.innerText = "Gerando QR Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "QR Code gerado";
        qrImg.removeAttribute("aria-hidden");
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()){
        wrapper.classList.remove("active");
        preValue = "";
        generateBtn.innerText = "Gerar QR Code";
    }
});