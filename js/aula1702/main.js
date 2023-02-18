// Exercício I - Tabuada do 5

let result, cont = 1
while(cont <= 10){
    result = cont * 5
    console.log(cont + " * 5 = " + result)
    cont++
}

console.log("---------------------------------")

// Exercícios II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do WHILE)

let contador = 1

while(contador < 100){
    if(contador % 2 == 1){
        console.log(contador)
    }
    contador++
}

console.log("---------------------------------")

// Exercícios III: Conte de 50 até 75

let conta = 50

while(conta <= 75){
    console.log(conta)
    conta++
}

console.log("---------------------------------")

// Fazer os 3 exercícios usando for
// Exercício I - Tabuada do 5

let res
for(let i = 1; i <= 10; i++){
    res = i * 5
    console.log(i + ' * 5 = ' + res)
}

console.log("---------------------------------")

// Exercício II - Vá do 1 até o 99 e mostre apenas os valores ímpares.

let num
for(let i = 1; i < 100; i += 2){
    console.log(i)
}

console.log("---------------------------------")

// Exercício III - Conte de 50 até 75

for(let num = 50; num <= 75; num++){
    console.log(num)
}

console.log("---------------------------------")
