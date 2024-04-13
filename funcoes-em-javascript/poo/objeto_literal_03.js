// O problema da utilização de Objetos Literais 
const usuario1 = {
    nome: 'Ana',
    email: 'ana@abcgmail.com',
    senha: '123456',
    cadastro: new Date()
}

const usuario2 = {
    nome: 'Carlos',
    email: 'carlos@abcgmail.com',
    dataCadastro: new Date()
}

console.log(usuario1, usuario2)