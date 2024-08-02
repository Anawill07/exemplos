let resposta = null
let nota 

console.log(resposta, nota)

//symbol

let idunico = Symbol()

let produto={
    [idunico]: 123,
    nome: "camiseta"
}
console.log(produto[idunico], produto.nome)


//bigInt
let numerogrande = BigInt("123456789012345678901234567890")

console.log(numerogrande)