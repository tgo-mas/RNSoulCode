const semaforoImg = document.getElementById('semaforo-img')
const semaforoText = document.getElementById('semaforo-descricao')

function trocarVermelho(){
    console.log("Trocou pra vermelho!")
    semaforoImg.src = "https://i.postimg.cc/MKS3MpWx/vermelho.png";
    semaforoText.innerHTML = "PARE!"
}

function trocarAmarelo(){
    console.log("Trocou pra Amarelo!")
    semaforoImg.src = "https://i.postimg.cc/RCfbZHxX/amarelo.png";
    semaforoText.innerHTML = "ATENÇÂO!"
}

function trocarVerde(){
    console.log("Trocou pra Verde!")
    semaforoImg.src = "https://i.postimg.cc/vHtqWwBn/verde.png";
    semaforoText.innerHTML = "SIGA!"
}
