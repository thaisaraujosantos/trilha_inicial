// calcular a média dos 3 produtos frágeis

const  carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: false },
    { nome: 'Impressora', qtde: 5, preco: 1000, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'iPad', qtde: 2, preco: 7500, fragil: true },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: false },
    { nome: 'Computador', qtde: 2, preco: 5000, fragil: true },
]
// 1. fragil: true (filter)
const produtoFragil = produto => produto.fragil

// 2: qtde * preco => total (map)
const precoTotal = produto => produto.qtde * produto.preco

// 3. media totais (reduce)
// [5000, 15000, 10000]
const media = (acc, valor) => {
    const qtde = acc.qtde + 1
    const total = acc.total + valor
    return {qtde, total, media: total / qtde}
}

const carrinhoFinal = carrinho
    .filter(produtoFragil)
    .map(precoTotal)
    .reduce(media, {qtde: 0, total: 0, media: 0})

console.log(carrinhoFinal.media)

