let letra = "A";
let valor;

//Ao invés de fazer assim:
if (letra == "A") {
  valor = "sim";
} else {
  valor = "não";
}
console.log("valor:", valor);

// Variável = (condição) ? IF : ELSE
// Podemos então fazer a comparação via ternário
valor = letra == "A" ? "Sim" : "Não";
console.log("valor:", valor);

// Outra alternativa:
letra == "A" ? console.log("Sim") : console.log("Não");
