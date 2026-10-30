/*8. Peça três notas de um aluno, calcule a média e mostre a situação:
• ≥ 7 → Aprovado
• Entre 5 e 6.9 → Recuperação
• < 5 → Reprovado*/

let num1 = 8
let num2 = 9
let num3 = 10
let media = (num1 + num2 + num3) / 3
console.log(media)
if(media >= 7){
    console.log("Aprovado")
}else if(media >= 5 && 6.9){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}