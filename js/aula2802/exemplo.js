//  Arrays

// forEach e map

let numeros = [1, 2, 3];

function mostraValor(valor) {
    console.log(valor);
}



//  for(let num of numeros) {
//    mostraValor(num);   // para cada elemento da array ele executa o que está aqui dentro
//  }

// for(let i = 0; i < numeros.length; i++){
//    mostraValor(numeros[i]);   // para cada elemento da array ele executa o que está aqui dentro
// }

// esses dois FOR acima fazem exatamente a mesma coisa.

// console.log("------------------------"); 

// forEach:
//   numeros.forEach(mostraValor);  // o parametro do forEach vai ser uma função
// o resultado vai ser o mesmo dos outros for, porém esse método é mais simplificado.


numeros.forEach((numero) => {
    console.log(numero);       // numero é apenas o nome, poderia ser item, elemento, batata, etc - vale apenas dentro dessa função.
});


console.log("------------------------");

// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.

let soma = 0;

numeros.forEach((numero) => {
    soma += numero;
});

console.log(`A soma é ${soma}.`)


console.log("------------------------");

let nomes = ["Pedro", "Paulo", "João", "Lucas"];
let nomesCaixaAlta = [];

//  for(let nome of nomes){
//    nomesCaixaAlta.push(nome.toUpperCase())
//  }
//  console.log(nomesCaixaAlta);

nomes.forEach((nome) => {
    nomesCaixaAlta.push(nome.toUpperCase())
})
// console.log(nomesCaixaAlta);

let nomesCaixaAlta2 = nomes.map((nome) => {
    return nome.toUpperCase();
})
// console.log(nomesCaixaAlta2);

let nomesCaixaBaixa = nomes.map((nome) => {
    return nome.toLowerCase();
});

let nomesExclamacao = nomes.map((nome) => {
    return nome + "!";
});

// Parâmetro = generico, representa qualquer coisa
// Argumento = valor específico
let dados = [1, 2, 3, 4, 5];
let dadosPor100 = dados.map((dado) => {
    return dado * 100;
});

// console.log(dadosPor100);

