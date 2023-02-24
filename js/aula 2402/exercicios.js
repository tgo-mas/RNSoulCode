
function calc(a, b, op){
    if(op == '+'){
        console.log(`${a} + ${b} = ${a + b}` )
    }else if(op == '-'){
        console.log(`${a} - ${b} = ${a - b}` )
    }else if(op == '*'){ 
        console.log(`${a} * ${b} = ${a * b}` )
    }else if(op == '/'){
        console.log(`${a} / ${b} = ${a / b}` )
    }else{
        console.log('Operação inválida')
    }
}

calc(4, 6, '*')

function fahrToCelsius(fahr){
    return (fahr - 32) / 1.8;
}

function checarTemperatura(temp){
    if(temp <= 10){
        console.log("Muito frio!")
    }else if(temp >= 11 && temp <= 15){
        console.log('Clima bom!')
    }else if(temp >= 16 && temp <= 30){
        console.log("Agradável")
    }else{
        console.log("Hell!")
    }
}

checarTemperatura(fahrToCelsius(45))
