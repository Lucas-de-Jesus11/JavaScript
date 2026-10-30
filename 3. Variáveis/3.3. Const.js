// ---CONST---
// const x;
// const não pode ser "underfined", precisa atribuir um valor;
const pi = Math.PI
console.log(pi)

const x = 10
console.log(x)

// x = 20 //Uma constante não pode ter seu valor alterado

{
    console.log(x)

    const y = 25
    console.log(y)
    {
        console.log(y)
        
        const x = 50
        console.log(x)
    }
}
console.log(x)
// console.log(y)
// const e let são similares na hierarquia de identação