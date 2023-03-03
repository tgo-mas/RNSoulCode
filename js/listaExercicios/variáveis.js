
// Crie uma variável que armazena uma temperatura em Kelvin. Converta
// para Celsius. A equação é:

// C = K − 273

function exercicio1(kelvin){

    let celsius = kelvin - 273;
    return celsius;

}

let k = 290
// console.log(`A temperatura ${k}K em Celsius é ` + exercicio1(k) + "°C");

// Crie uma variável ano e verifique se este ano é bissexto. Um ano é bis-
// sexto quando: Caso 1) É um número divisível por 4, mas não é divisível
// por 100. Caso 2) É um número divisível por 4, por 100 e por 400.

let ano = 2023

function exercicio2(ano){
    if((ano % 4 == 0 && ano % 100 != 0) || (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0)) {
        console.log(`O ano ${ano} é bissexto.`);
    }else{
        console.log(`O ano ${ano} não é bissexto.`)
    }
}

// exercicio2(ano);

// Defina uma variável para armazenar uma nota (de 0 a 10) e imprima a
// menção correspondente. Use um switch-case para implementar a ló-
// gica. Considere as seguintes faixas de notas: de 0 a 4 - Insuficiente, de
// 5 a 6 - Regular, de 7 a 8 - Bom, de 9 a 10 - Excelente.



function exercicio3(nota){
    switch(Math.floor(nota)){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            console.log("Insuficiente");
            break;
        case 5:
        case 6:
            console.log("Regular");
            break;
        case 7:
        case 8:
            console.log("Bom");
            break;
        case 9:
        case 10:
            console.log("Excelente");
            break;
        default:
            console.log("Nota inválida");
    }
}

// exercicio3(8.5);

// Escreva um programa que use um laço for para imprimir na tela os nú-
// meros de 10 a 1 (em ordem decrescente).

function exercicio4(){
    for(let i = 10; i > 0; i--){
        console.log(i)
    }
}

// exercicio4()

// Arrow Function
// 1. Escreva uma função que receba um número e retorne seu dobro.
// 2. Escreva uma função que receba um número e retorne seu quadrado.
// 3. Escreva uma função que receba nome, idade, endereço e retorne uma
// mensagem no formato: "Olá, eu sou X, tenho X ano(s) e moro em X". Faça
// uso da interpolação de strings.

let exercicio5 = (num) => num * 2
let exercicio6 = (num) => num ** 2 
let exercicio7 = (nome, idade, endereco) => (`Olá, eu sou ${nome}, tenho ${idade} anos, e moro em ${endereco}`)

// console.log(exercicio5(5) + ' ' + exercicio6(5))
// console.log(exercicio7('Thomas', 20, 'Santana do Seridó'))

// Escreva uma função que receba uma string e um caractere e retorne o
// número de ocorrências desse caractere na string.

function exercicio8(string, caractere){

    let cont = 0;

    for(let i = 0; i < string.length; i++){
        if(string[i] == caractere){
            cont++;
        }
    }

    return cont;
}

// console.log(exercicio8("batata", "a"))

// Crie uma função que recebe um número, em seguida retorne um array
// de números aleatórios com o tamanho especificado pelo número.

function exercicio9(length){

    let array = [];

    for(let i = 0; i < length; i++){
        array.push(Math.floor(Math.random() * 10));
    }

    return array;

}

// console.log(exercicio9(10))

// Crie um array de objetos pet com as propriedades: nome, idade, peso.
// Crie um objeto que representa uma pessoa com as propriedades: nome,
// cpf, pets (um array de pets). Em seguida, defina um método em pessoa
// que cuida de todos os pets no array.

function exercicio10(){

    let pets = [
        {nome: 'Kiara', idade: 5, peso: 4.5},
        {nome: 'Dudu', idade: 7, peso: 2.3},
        {nome: 'Emma', idade: 4, peso: 3},
        {nome: 'Chloe', idade: 9, peso: 4}
    ]

    let pessoa = {
        nome: 'Euzinho',
        cpf: '333.333.333-33',
        pets: pets,
        cuidarPets(){
            // this.pets.forEach((elemento) => {
            //     console.log(`Cuidando de ${elemento.nome}`)
            // })

            for(let i = 0; i < this.pets.length; i++){
                console.log("Cuidando de " + this.pets[i].nome)
            }
        },
    }

    pessoa.cuidarPets()

}

exercicio10()