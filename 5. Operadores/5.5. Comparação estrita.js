console.log("1" == 1); //true
console.log(1 == "1"); //true
console.log(1 == 1.0); //true
console.log("1.0" == 1); //true

/*O JS tenta converter dados. Por isso o uso do "==" pode ocasionar problemas
Para solucionar este problema, utilizamos a comparação estrita(identico)*/

console.log("1" === 1); //false
console.log(1 == true) //true
console.log(1 === true) //false

// == -> Comparação só de valor(faz conversão do tipo)
// === -> Compara o valor e o tipo(sem conversão)

console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(null != undefined); //false

// É aconselhavel a se utilizar o estrito. Mais seguro 