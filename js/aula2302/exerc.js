
// Declare uma função que recebe 3 notas e mostra a média entre elas.

function media(a, b, c){
    return (a + b + c) / 3;
}

console.log(media(5, 6, 7));

// IMC

function imc(peso, altura){
    return peso / (altura * altura);
}

console.log(`Seu IMC é: ${imc(70.5, 1.78).toFixed()}`);
