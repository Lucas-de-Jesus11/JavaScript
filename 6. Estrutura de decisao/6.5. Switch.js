// "Switch Case" é menos poderoso que o IF ELSE. Ele faz comparação simples

let variavel = 4;

switch (variavel) {
  case 1:
    console.log("Condição 1");
    break;
  case 2:
    console.log("Condição 2");
    break;
  case 3: //Se o valor for 3 ou 4, vai cair nessa case
  case 4:
    console.log("Condição 3 e 4");
    break;
  default:
    console.log("Condição outra");
    break;
}
