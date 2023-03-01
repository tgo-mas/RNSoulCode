// Aula 01.03
// Tópicos: Objetos

// Objetos = servem para estruturar dados
// - propriedades (características)
// - métodos (ações)

const pet = {
    nome: "Fred", // propriedade-valor
    idade: 2, // propriedade-valor
    peso: 3.5,
    especie: "gato",
}; // {} indica que estou declarando um objeto

let pet2 = {
    nome: "Dorothy",
    idade: 5,
    peso: 4.5,
    especie: "gato",
};

// Tip: crie um objeto "pet3" com seu pet e coloque uma
// nova propriedade: comida favorita

let pet3 = {
    nome: "Kiara",
    idade: 5,
    peso: 3.5,
    especie: "gato",
    comidaFavorita: "sachê",
};

// Acesso de propriedades
console.log(pet.nome);
console.log(pet.idade);
console.log(pet.peso);
console.log(pet.especie);
console.log(pet.fullstack); // essa propriedade não existe
console.log(pet["nome"]); // equivale a pet.nome

// Alterar valores das propriedades
pet.nome = "Neo"; // alteração do nome do pet
// pet.idade = 6;
// pet.peso = 100;
pet.idade++;
pet.peso += 3;
console.log(pet);
// pet = {}; // com const podemos alterar as propriedades
pet["nome"] = "Batata"; // peso.nome = "Batata"
console.log(pet);

// Tip: altere as informações do seu pet usando uma das sintaxes acima
// adicione novas propriedades ao seu pet

pet3.nome = "murisca"
pet3.pelo = "estampado"

console.log(pet3)

// Tip: crie no objeto pet o método brincar e coloque uma mensagem
// do console.log

pet3.brincar = () => {
    console.log("Estou brincando uhu!")
}

pet3.brincar()

// Melhore o método 'dizerOi' do seguinte objeto:
let pessoa = {
    // Atributos
    nome: "João",
    idade: 25,
    nacionalidade: "brasileiro",
    // Métodos
    dizerOi() {
      // this = representa o objeto dono do método
      console.log(
        `Oi, meu nome é ${this.nome} e tenho ${this.idade} anos, e sou ${this.nacionalidade}`
      );
    },
    envelhecer() {
      this.idade++;
    },
    cuidarPet(animal) {
      console.log(`Estou cuidando do ${animal.nome}`);
      animal.comer("Batata");
      animal.peso += 0.2;
    },
  };
  
  pessoa.cuidarPet(pet);
  console.log(pet.peso);
  
  // pessoa.dizerOi();
  // pessoa.nome = "Claudio";
  // pessoa.nome += " Silva";
  // pessoa.dizerOi(); // Chama o método com o nome alterado
  // pessoa.envelhecer();
  // pessoa.envelhecer();
  // pessoa.envelhecer();
  // pessoa.dizerOi();