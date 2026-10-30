// Crie um laço que percorra todos os elementos da página usando
// querySelectorAll("*").
// Para cada elemento encontrado, mostre no console o nome da sua tag.
// Exemplo de saída:
// Elemento encontrado: H1
// Elemento encontrado: P
// Elemento encontrado: DIV

for(const elemento of document.querySelectorAll("*")){
    console.log("Elemento encontrado:", elemento)
}