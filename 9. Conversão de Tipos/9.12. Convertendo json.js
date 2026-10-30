const people = [
    {
        id: 1,
        name: "Lucas",
        lastName: "de Jesus",
        bornDate: new Date(2005, 2, 10) ,
        address: {
            place: "Av. Brasil, 2117",
            zipcode: "12345",
            city: "São Paulo"
        }
    },
    {
        id: 2,
        name: "Gabriel",
        lastName: "Brito",
        bornDate: new Date(1999, 3, 22) ,
        address: {
            place: "Rua Correia de Andrade, 242",
            zipcode: "67890",
            city: "Itu"
        }
    },

]
console.log(people)

// Se tentarmos passar isso para outra aplicação(BD, API, etc), ele não vai interpretar...
// Para isso, então utilizamos JSON 

// JSON -> JavaScript Object Notation 
// JSON.stringify()
console.log("Em JSON:")
console.log(JSON.stringify(people)) //Converte object -> string/json

// Oposto
const json = '[{"id":1,"name":"Lucas","lastName":"de Jesus","bornDate":"2005-03-10T03:00:00.000Z","address":{"place":"Av. Brasil, 2117","zipcode":"12345","city":"São Paulo"}},{"id":2,"name":"Gabriel","lastName":"Brito","bornDate":"1999-04-22T03:00:00.000Z","address":{"place":"Rua Correia de Andrade, 242","zipcode":"67890","city":"Itu"}}]'
console.log("Em object:")
console.log(JSON.parse(json))