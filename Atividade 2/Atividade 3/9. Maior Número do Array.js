/*Crie uma função que receba um array de números e retorne o maior valor.
Use um loop for...of. */
function maiorNum(array){
    let maior = array[0]
    for (let num of array){
        if(num > maior){
            maior = num
        }
    }
    return maior
}
console.log(maiorNum([70, 10, 40, 20, 80]))