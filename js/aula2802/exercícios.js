// Exercício I: Crie um array de palavras, para cada palavra
// verifique se o tamanho é menor que 5, se for transforme em BATATA
// Caso contrário retorne a palavra original em caixa alta.

let palavras = ['acai', 'banana', 'maçã', 'repolho', 'jabuticaba', 'mamão']

let newPalavras = palavras.map((el) => {
    if(el.length < 5) return 'BATATA'
    else return el.toUpperCase()
})

console.log(newPalavras)