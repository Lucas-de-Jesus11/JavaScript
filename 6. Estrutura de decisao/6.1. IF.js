// --IF--
console.log("Inicio do programa");
// if(condição){} ---> Tudo que for "true" vai executar
if (true) {
  console.log("Desvio de fluxo 1");
}

if (false) {
  console.log("Desvio de fluxo 2");
}

if ("0") {
  console.log("Desvio de fluxo 3");
}

if (0) {
  console.log("Desvio de fluxo 4");
}

if ("") {
  console.log("Desvio de fluxo 5");
}

if (" ") {
  console.log("Desvio de fluxo 6");
}

if("1" == 1){
    console.log("Desvio de fluxo 7")
}
if("1" === 1){
    console.log("Desvio de fluxo 8")
}

if("1" != 1){
    console.log("Desvio de fluxo 9")
}

if(!(1 < 2) && !(2 < 3)){
    console.log("Desvio de fluxo 10")
}