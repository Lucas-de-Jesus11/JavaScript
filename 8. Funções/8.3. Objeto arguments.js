function sum(n1, n2, n3) {
    return n1 + n2 + n3
}
console.log(sum(10, 20, 30))

//Se tiver mais valores
function sum(n1, n2, n3, n4, n5, n6) {
    return n1 + n2 + n3 + n4 + n5 + n6
}
console.log(sum(10, 20, 30, 40, 50, 60))

// Para isso temos o "arguments" que mostra as posições
function sum(n1, n2) {
    console.log(arguments)
    return n1 + n2
}
console.log(sum(99, 3, 44, 23, 67, 87))

//Como fica usando "arguments"
function sum() {
    let res = 0
    for (const n of arguments) {
        res += n
    }
    return res
}
console.log(sum(99, 3, 44, 23, 67, 87))