
// Exercício I
// Defina 3 variáveis com notas de 0 a 10. Calcule a média
// das três notas. Em seguida mostre no console o status do aluno:
//      Maior ou igual 7 = Aprovado
//      Entre 5 e 7 = Reforço
//      Menor que 5 = Reprovação

let nota1 = 7, nota2 = 4, nota3 = 9
let media = (nota1 + nota2 + nota3) / 3

if(media >= 7) console.log("Aprovado!")
else if (media >= 5 && media < 7) console.log("Recuperação!")
else console.log("Reprovado!")

// Exercício II
// Simule a tabela do IMC com base no valor calculado
// no exercício anterior. Indique o status com base no valor do IMC.

let peso, altura, imc

peso = 80
altura = 1.78

imc = peso / (altura ** 2)

if(imc < 18.5) console.log("Abaixo do peso")
else if(imc >= 18.5 && imc <= 24.9) console.log("Peso normal")
else if(imc >= 25 && imc <= 29.9) console.log("Acima do peso")
else if(imc >= 30 && imc <= 34.9) console.log("Obesidade grau I")
else if(imc >= 35 && imc <= 39.9) console.log("Obesidade grau II")
else console.log("Obesidade grau III")


// Exercício III: Defina um número a e um número b.
// Verifica qual o maior, ou menor, ou se são iguais!

let a = 3, b = 10

if(a > b) console.log("A é maior que B")
else if (a == b) console.log("A e B são iguais")
else console.log("B é maior que A")
