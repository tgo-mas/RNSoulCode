
// Parte 2 da Avaliação prévia 

let nomeProduto, precoProduto, descProduto, descValido

nomeProduto = 'Caderno'
precoProduto = 39.9
descProduto = 9.9

descValido = true
let precoFinal = precoProduto

if(descValido){
    precoFinal -= descProduto
}

if(precoFinal > 1000){
    precoFinal -= 50
}

console.log(`O Preço final é: ${precoFinal}`)

let demandas = [10, 2, 1, 30, 5]
let totais = []
let soma = 0

demandas.forEach((el) => {
    let totalCli = el * precoFinal
    console.log(`O cliente ${demandas.indexOf(el)} deverá pagar R$ ${totalCli}`)
    totais.push(totalCli)
    soma += totalCli
})

console.log(`O lucro total é: R$ ${soma}`)
