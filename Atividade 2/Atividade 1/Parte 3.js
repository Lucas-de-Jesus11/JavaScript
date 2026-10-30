/*11.Crie um objeto que represente um aluno com nome, idade e turma.
Exiba apenas o valor da propriedade turma.
Altere o valor da idade.
Adicione a propriedade curso ao objeto.*/
let aluno = {name:"Lucas", 
            idade: 20, 
            turma: "DEV3"}
console.log(person.turma)// Exibindo propriedade turma
person.idade = 21 //Alterando
person.curso = "Informática"//Adicionando propriedade curso
console.log(person)

/*12.Crie um objeto que represente um celular com marca, modelo e cor.
Altere a cor para "Preto".
Remova a propriedade modelo do objeto.*/
let celular = {
    marca: "Sansung",
    modelo: "Galaxy S22",
    cor : "Azul"
}
celular.cor = "Preto"
delete celular.modelo
console.log(celular)

/*13.Crie um objeto pessoa com nome e cidade.
Adicione a propriedade profissao.
Exiba o objeto inteiro no console.*/
let pessoa = {
    nome : "Lucas",
    cidade: "São Paulo"
}
pessoa.profissao = "DBA"
console.log(pessoa)