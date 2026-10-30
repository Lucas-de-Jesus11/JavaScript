// OR(ou) ==> ||
//Sempre que houver "true" dentro da expressão lógica OR, ele será verdadeiro
console.log(false || false); //false
console.log(false || true); //true
console.log(true || false); //true
console.log(true || true); //true

//AND(e) ==> &&
//Sempre que houver "false" dentro da expressão lógica AND, ele será falso
console.log(false && false); //false
console.log(false && true); //false
console.log(true && false); //false
console.log(true && true); //true

//Misto and e or
console.log(false || false || true); //true
console.log(true && true && false); //false
console.log(false || (false && true)); //false
console.log((false || false) && true); //false

//NOT(não) ==> !
console.log(true);
console.log(!true);
console.log(23 < 24);
console.log(!(23 < 24));

// Resultado de uma expressão(comparação) é boolenao
console.log(23 < 24 && "A" == "A"); //true

//Variáveis
let a = 10;
let b = 20;
console.log(a < b); //true

let idade = 20;
let temCarteira = true;
console.log(idade >= 18 && temCarteira);

let usuario = "";
let nome = usuario || "visitante";
console.log(nome);
