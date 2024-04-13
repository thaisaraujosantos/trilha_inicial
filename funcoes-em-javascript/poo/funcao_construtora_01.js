// MOLDE => Função Construtora
function Data(dia, mes, ano) {
    //atributos públicos
    this.dia = dia
    this.mes = mes
    this.ano = ano
}

const d1 = new Data(12, 4, 2024) //objeto ou instância #1
const d2 = new Data(1, 1, 2023) //objeto ou instância #2

console.log(typeof d1, d1)
console.log(typeof d2, d2)

d1.mes = 6
d1.ano = 2025

console.log(`${d1.dia}/${d1.mes}/${d1.ano}`)
console.log(`${d2.dia}/${d2.mes}/${d2.ano}`)