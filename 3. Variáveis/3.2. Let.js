// ---LET--- 

let x;
console.log(x)

// let x = 10; //Não pode criar a mesma variavel declarada anteriormente
x = 10
console.log(x)

{
    console.log(x)
    x = 20

    let y = 30
    console.log(y)
    {
        let nome = "Lucas"
        console.log(nome)
        console.log(y)

        let x = "Senai"
        console.log(x)
    }
}
console.log(x)

/*"let" tem escopo de bloco (entre{}), ela é local
Se declarar dentro de bloco do escopo, não consegue acessar fora do escopo.
É preciso respeitar a hierarquia da identação*/