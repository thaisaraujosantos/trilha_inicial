const produto = {
    //Atributo (valor)
    nome: 'iPad',
    marca: 'Apple',
    anoFabricacao: 2023,
    preco: 7500,
    fragil: true,
    desconto: 0.15,
    //Comportamento (função)
    precoComDesconto: function() {
        return (1 - this.desconto) * this.preco
    }
}

const precoFinal = produto.precoComDesconto()
console.log(`O ${produto.nome} tem preço R$ ${precoFinal}.`)