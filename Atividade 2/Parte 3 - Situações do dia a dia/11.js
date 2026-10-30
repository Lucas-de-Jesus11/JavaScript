/*11. Crie um programa que receba a idade de uma pessoa e diga se ela pode:
• Apenas votar (≥ 16 e < 18 ou ≥ 70)
• Votar e dirigir (≥ 18)
• Apenas estudar (≤ 15)*/ 
let idade = 18

console.log(idade >= 16 && idade < 18 || idade >=70 ? 'Apenas votar' : '')
console.log(idade >= 18 ? 'Votar e dirigir' : '')
console.log(idade <= 15 ? 'Apenas estudar' : '')