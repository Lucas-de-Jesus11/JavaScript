// "Callbacks" é uma função que você passa para outra função
function saudacao(nome, Callbacks){
    console.log(`Olá ${nome}`)
    Callbacks()
}
function dpsSaudacao(){
    console.log("Isso foi executado depois da saudação")
}
saudacao("Lucas", dpsSaudacao)

//"Callbacks" podem ser utilizados como Map, Filter Reduce
//Exemplo 1
console.log("Inicio")
setTimeout(function(){
    console.log("Executando após 5 segundos")
}, 5000)
console.log("Fim")

//Exemplo 2:
// function mult(values){
//     for (let i = 0; i < values.length; i++){
//         values[i] *= values[i];
//     }
//     return values
// }
// const values = [1, 2, 3, 4, 10];
// console.log(mult(values))

//Usando callbacks
function mult(values, func){
    for (let i = 0; i < values.length; i++){
        values[i] = func(values[i]);
    }
    return values;
}
const values = [1, 2, 3, 4, 10];
const func = (n) => n * 3;
console.log(mult(values, func))

// Callbacks para operações matemáticas
function exec(a, b, Callbacks){
    return Callbacks(a, b)
}
function soma(x, y){
    return x + y
}
function mult(x, y){
    return x * y
}
console.log(exec(5, 3, soma))
console.log(exec(5, 3, mult))

// Callback em map 
let nomes = ["fernando", "lucas", "pedro", "joão"]
let maiusculo = nomes.map(function(nome){
    return nome.toUpperCase()
})
console.log(maiusculo)

// Callback em filter 
let idades = [10, 45, 18, 17, 3, 99]
let maiores = idades.filter(function(idades){
    return idades >= 18
})
console.log(maiores)

// Callback em forEach 
let numeros = [1,2,3,4,5]
numeros.forEach(function(n){
    console.log(n * n)
})

//Crie uma função "calcular" que receba um numero e dois callbacks:
//um para dobrar e outro para triplicar
function calcular(numero, callback1, callback2){
    //const dobro = dobrar(numero)
    //const triplo = triplicar(numero)
    console.log("Resultado1:", callback1(numero))
    console.log("Resultado1:", callback2(numero))
}
let dobrar = (n)=> n *2
let triplicar = (n)=> n *3
calcular(5, dobrar, triplicar)

