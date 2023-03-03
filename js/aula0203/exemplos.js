
// Aula 10: Aninhação e array de objetos

let pessoa = {
    nome: "Thomas Almeida",
    cpf: "109.164.555-43",
    email: 'talmeida@gmail.com',
    endereco: {
        cidade: "Santana do Seridó",
        estado: "RN",
        cep: "59350-000",
        rua: "Nilton Ginae",
        numero: 45
    },
    formacao: [
        {nome: 'Ensino médio', periodo: '2016-2020'},
        {nome: 'Faculdade', periodo: '2020-2024'}
    ],
    
}

console.log(pessoa)
