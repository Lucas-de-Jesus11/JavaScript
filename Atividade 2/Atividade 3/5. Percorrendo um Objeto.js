/*Dado o objeto:
let aluno = { nome: "Lucas", idade: 20, curso: "TI" };
Dentro de uma função, mostre todas as chaves e valores. */

let aluno = { nome: "Lucas", idade: 20, curso: "TI" }
function exibirAluno() {
    for (let chave in aluno) {
        console.log(chave + ": " + aluno[chave])
    }
}
exibirAluno()