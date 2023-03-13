// Exercício I: Crie um objeto que representa uma conta bancária.
// Propriedades: codigo, saldo, cpf do titular e nome do titular
// Métodos:
// - saque(valor): retirar o valor ao saldo
// - deposito(valor): adicionar o valor do saldo

let conta = {
    codigo: 43453,
    saldo: 500.0,
    cpfTitular: '109.164.864-60',
    nomeTitular: 'Thomas',
    saque(valor){
        if(this.saldo >= valor){
            this.saldo -= valor
            console.log(`Retirado ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}, saldo restante: ${this.saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
        }else
            console.log("Saldo insuficiente!")
    },
    deposito(valor){
        this.saldo += valor
        console.log(`Depositado ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}, novo saldo: ${this.saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
    }
}

// conta.saque(40)
// conta.deposito(200)
// conta.saque(350)

// Exercício II: Crie um objeto que representa um produto.
// Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
// Métodos:
// - calcularPrecoDesconto(): retorna o valor aplicado ao desconto
// - apresentacao(): mostra as informações das propriedades
// - comprar(total): reduz a quantidade em relação ao total

let produto = {
    nome: 'Faca',
    descricao: 'Muito afiada!',
    quantidade: 34,
    precoOriginal: 13.9,
    desconto: 2.5,
    calcularPrecoDesconto(){
        return this.precoOriginal - this.desconto},
    apresentacao(){
        console.log(`Nome do produto: ${this.nome}\nDescrição: ${this.descricao}\nQuantidade: ${this.quantidade}\nPreço: ${this.calcularPrecoDesconto}`)
    },
    comprar(total){
        this.quantidade -= total;
    }
}

// produto.apresentacao()
// produto.comprar(4)
// produto.apresentacao()