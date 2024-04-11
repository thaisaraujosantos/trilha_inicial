// https://www.mockaroo.com/

const alunos = [
  { nome: "Shandee", n1: 1.4, n2: 9.4, n3: 2.2, n4: 2.3 },
  { nome: "Charlena", n1: 9.5, n2: 4.8, n3: 0.1, n4: 0.1 },
  { nome: "Mead", n1: 6.2, n2: 6.6, n3: 5.5, n4: 0.1 },
  { nome: "Artie", n1: 0.2, n2: 4.9, n3: 4.1, n4: 7.5 },
  { nome: "Sarita", n1: 6.7, n2: 1.7, n3: 7.0, n4: 6.1 },
  { nome: "Merry", n1: 7.1, n2: 8.9, n3: 2.7, n4: 9.0 }
]

function calcularMedia(aluno) {
  return {
    nome: aluno.nome,
    media: (aluno.n1 + aluno.n2 + aluno.n3 + aluno.n4)
  }
}

console.log(alunos.map(calcularMedia))