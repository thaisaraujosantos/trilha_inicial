function Data(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano

    //Método de instância público (Comportamento)
    this.exibir = function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data(12, 4, 2024) 
const d2 = new Data(1, 1, 2023) 

console.log(d1.exibir())
console.log(d2.exibir())