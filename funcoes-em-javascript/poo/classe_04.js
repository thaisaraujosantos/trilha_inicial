//atributos privados usando #
class Data {
    #dia = 1
    #mes = 1
    #ano = 1970

    // Getters

    get dia() { return this.#dia }
    get mes() { return this.#mes }
    get ano() { return this.#ano }

    //Setters

    set dia(novoDia) {
        if (novoDia >= 1 && novoDia <= 31) {
            this.#dia = novoDia
        }
    }

    set mes(novoMes) {
        if (novoMes >= 1 && novoMes <= 12) {
            this.#mes = novoMes
        }
    }

    set ano(novoAno) {
        if (novoAno >= 1970 && novoAno <= 2900) {
            this.#ano = novoAno
        }
    }
    exibir() {
        return `${this.#dia}/${this.#mes}/${this.#ano}`
    }
}

const d1 = new Data()
d1.dia = 13
d1.mes = 37
d1.ano = 2025

console.log(d1.dia)
console.log(d1.mes)
console.log(d1.ano)
console.log(d1.exibir())