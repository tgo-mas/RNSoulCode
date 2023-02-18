// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.

let idade = 18, dinheiro = 30

if (idade >= 18 && dinheiro > 20) {
    dinheiro -= 20
    console.log("Bebida comprada, dinheiro atual: R$ " + dinheiro)
} else {
    console.log("Bebida não comprada.")
}

// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.

let sal = 560

if (sal < 500) {
    sal += 50
    console.log("Novo salário: R$ " + sal)
} else if (sal >= 500 && sal < 1000) {
    sal += 25
    console.log("Novo salário: R$ " + sal)
} else {
    console.log("Não houve aumento")
}

// Exercício III: Defina uma variavel numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)

let numero = Number.parseInt(Math.random() * 7)

switch (numero) {
    case 1:
        console.log('domingo')
        break;
    case 2:
        console.log('segunda')
        break;
    case 3:
        console.log('terça')
        break;
    case 4:
        console.log('quarta')
        break;
    case 5:
        console.log('quinta')
        break;
    case 6:
        console.log('sexta')
        break;
    case 7:
        console.log('sabado')
        break;
    default:
        console.log(numero)
}

// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.

let comida = 'carne'

switch(comida){
    case 'batata':
    case 'carne':
    case 'chocolate':
        console.log('Humm, adoro')
        break;
    case 'pizza':
    case 'sanduíche':
        console.log('As vezes')
        break;
    default:
        console.log('Quero não!')
}

// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.

let var1 = 5

if(var1 % 2 == 0){
    console.log("Par")
}else{
    console.log("Ímpar")
}
