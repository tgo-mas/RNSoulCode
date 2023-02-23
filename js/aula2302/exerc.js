
// Declare uma função que recebe 3 notas e mostra a média entre elas.

function media(a, b, c){
    return (a + b + c) / 3;
}

// console.log(media(5, 6, 7));

// IMC

function imc(peso, altura){
    return peso / (altura * altura);
}

// console.log(`Seu IMC é: ${imc(70.5, 1.78).toFixed()}`);

function porcento(num){
    return (num * 100).toFixed(2) + '%';
}

// console.log(porcento(0.5457))

function isNegative(num){
    return (num < 0);
}

// console.log(isNegative(2));

function toReal(num){
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(num);
}

// console.log(toReal(465.422))

function contar(num){
    for(let i = 1; i <= num; i++){
        console.log(i)
    }
}

// contar(30)

function nomeCompleto(nome, sobrenome){
    return nome + ' ' + sobrenome;
}

// console.log(nomeCompleto('Thomas', "Almeida"))

function areaCirculo(raio){
    return Math.PI * (raio * raio)
}

function nivelCirculo(area){
    if(area >= 1 && area <= 20){
        return 'Nível I'
    }else if(area >= 21 && area <= 40){
        return 'Nivel II'
    }else{
        return 'Nivel Inválido'
    }
}

console.log(nivelCirculo(areaCirculo(3)))
