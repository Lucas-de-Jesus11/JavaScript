function exemplo() {
    if (true) {
        var x = 10
        let y = 20
        console.log("Dentro do bloco", x, y)
    }
    console.log("Fora do bloco", x)
    // console.log("Fora do bloco", y)
}
exemplo()

const aluno = { nome: "Lucas", idade: 20 }
console.log(typeof {})

aluno.nome = "Pedro"
console.log(aluno)

/*
Mesmo "const" sendo um object ou Array, as propiedades
ainda podem ser alteradas*/

aluno = 10
console.log(aluno)
console.log(typeof [])// Listas e colchetes são cosiderado objeto
console.log(typeof {})