/*7. Crie uma variável ano e diga se ele é bissexto (dica: divisível por 4 e não por 100,
exceto se divisível por 400).*/

let ano = 2024
console.log(ano % 4 == 0 && !(ano % 100 == 0)? 'Bissexto' : 'Falso')
