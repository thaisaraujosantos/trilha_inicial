const executar = (fn) => fn()

const bomDia = () => 'Bom dia!'
const boaTarde = () => 'Boa Tarde!'

let resultado = executar(bomDia)
console.log(resultado)

resultado = executar(boaTarde)
console.log(resultado)