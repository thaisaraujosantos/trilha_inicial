function Produto (nome, preco, desconto = 0) {
    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    this.precoFinal = function () {
        return (1 - this.desconto) * this.preco
    }
}

const p1 = new Produto('Caneta', 5, 0.15)
const p2 = new Produto('Caderno', 22.55, 0.30)
const p3 = new Produto('Computador', 6789, 0.30)

console.log(p1.precoFinal())
console.log(p2.precoFinal())
console.log(p3.precoFinal())