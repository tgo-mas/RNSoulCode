const campoEmail = document.getElementById("email");
const campoCep = document.getElementById("cep");
const campoUf = document.getElementById("uf");
const campoLocalidade = document.getElementById("localidade");
const campoTelefone = document.getElementById("telefone");
const addBtn = document.getElementById("btn-add");
const resetBtn = document.getElementById("btn-reset");
const conteudoTab = document.getElementById("conteudo-tabela");

addBtn.addEventListener('click', () => {
    // Coleta dos inputs
    let user = {
        email: campoEmail.value,
        cep: campoCep.value,
        uf: campoUf.value,
        localidade: campoLocalidade.value,
        telefone: campoTelefone.value,
    };
    // Concatenação na tabela
    conteudoTab.innerHTML += `
    <tr>
        <td>${user.email}</td>
        <td>${user.cep}</td>
        <td>${user.uf}</td>
        <td>${user.localidade}</td>
        <td>${user.telefone}</td>
    </tr>`;
    // Resetar formulário
    resetBtn.click();
})

// Exercício: Aplicar estilizações na página empresa
// Limpar os campos após concatenar
