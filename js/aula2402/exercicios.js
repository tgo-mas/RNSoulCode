
// function calc(a, b, op){
//     if(op == '+'){
//         console.log(`${a} + ${b} = ${a + b}` )
//     }else if(op == '-'){
//         console.log(`${a} - ${b} = ${a - b}` )
//     }else if(op == '*'){ 
//         console.log(`${a} * ${b} = ${a * b}` )
//     }else if(op == '/'){
//         console.log(`${a} / ${b} = ${a / b}` )
//     }else{
//         console.log('Operação inválida')
//     }
// }

// calc(4, 6, '*')

// function fahrToCelsius(fahr){
//     return (fahr - 32) / 1.8;
// }

// function checarTemperatura(temp){
//     if(temp <= 10){
//         console.log("Muito frio!")
//     }else if(temp >= 11 && temp <= 15){
//         console.log('Clima bom!')
//     }else if(temp >= 16 && temp <= 30){
//         console.log("Agradável")
//     }else{
//         console.log("Hell!")
//     }
// }

// checarTemperatura(fahrToCelsius(45))

// Exercício: Transforme as funções abaixo em arrow

const criarNomeCompleto = (nome, sobrenome) => {
    return nome + " " + sobrenome;
}

const contar = (maximo) => {
    for (let i = 1; i <= maximo; i++) {
        console.log(i);
    }
}

const imc = (peso, altura) => {
    let calculo = peso / (altura * altura);
    console.log(`O IMC é ${calculo}`);

    return calculo;
}