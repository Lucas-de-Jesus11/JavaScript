// "For if" percorre indices/propriedades de um objeto e/ou arraws
const person = {
    name: "Lucas",
    age: 25,
    city: "São Paulo",
};
for (const prop in person){
    console.log(`Propriedade: ${prop}`)
}
for (const prop in person){
    console.log(`Propriedade ${prop}: ${person[prop]}`)
}