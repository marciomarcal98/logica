const input = require("prompt-sync")()

// 6 variáveis de input
let codigo1 = Number(input("Digite o código do produto 1: "))
let quantidade1 = Number(input("Digite a quantidade do produto 1: "))
let valor1 = Number(input("Digite o valor unitário do produto 1: "))

let codigo2 = Number(input("Digite o código do produto 2: "))
let quantidade2 = Number(input("Digite a quantidade do produto 2: "))
let valor2 = Number(input("Digite o valor unitário do produto 2: "))
// 2 variáveis para calcular o valor a pagar por cada produto
// somar as 2 variáveis
let total = (quantidade1 * valor1) + (quantidade2 * valor2)

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)