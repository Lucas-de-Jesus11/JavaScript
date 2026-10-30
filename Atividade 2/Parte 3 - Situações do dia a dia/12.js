/*12. Em um jogo online:
• Se o jogador tiver mais de 1000 pontos, mostre “Nível Ouro”
• Entre 500 e 1000 → “Nível Prata”
• Menos de 500 → “Nível Bronze”*/ 
let pontos = 2000
console.log(pontos > 1000 ? 'Nível Ouro' : '')
console.log(pontos >=500 && pontos <= 1000 ? 'Nível Prata' : '')
console.log(pontos < 500 ? 'Nível Bronze' : '')