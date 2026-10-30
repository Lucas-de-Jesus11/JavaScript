const numbers = [1, 2, 3, 4, 5]
const double = numbers.map((n) => n * 2)
console.log(double)

const potencia = numbers.map((n) => Math.pow(n, 2))
console.log(potencia)

// Conversão de fahrenheit para celcius 
const fahrenheit = [0, 32, 45, 46, 91, 93, 121]
const celcius = fahrenheit.map((t) => Math.round(((t - 32) * 5 / 9)))
console.log(celcius)

const people =[
    {name: "felipe"},
    {name: "lucAs"},
    {name: "valDiNeI"},
    {name: "gabriEL"},
    {name: "jAmes"},
]
const maiuscula = people.map((p) => p.name.toUpperCase())
console.log(maiuscula)