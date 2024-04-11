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
const calcularMedia = (total, valor, indice, array) => {
    const tamanho = array.length
    const ultimo = tamanho - 1 === indice
    const novoTotal = total + valor
    return ultimo? novoTotal / tamanho : novoTotal
}

const media = carrinho
    .filter(produtoFragil)
    .map(precoTotal)
    .reduce(calcularMedia)

console.log(media)

