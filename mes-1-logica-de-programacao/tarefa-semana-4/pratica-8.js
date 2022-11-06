let exibeInfoFilmes = listaFilmes => {
    listaFilmes.forEach(filme => {
        console.log(`${filme.titulo} (Nota: ${filme.notaAvaliacao})`)
        console.log(`• Duração: ${filme.duracao} minutos`)
        console.log(`• Ano de publicação: ${filme.anoPublicacao}`)

        const generosMenosUltimo = filme.genero.slice(0, -1)
        const ultimoGenero = filme.genero.slice(-1)
        const infoGeneros = generosMenosUltimo.join(',') + ' e ' + ultimoGenero

        const resultadoGenero = filme.genero.length > 1 ? infoGeneros : genero[0]

        console.log(`• Gênero: ${resultadoGenero}\n`)
    })
}

const listaFilmes = [{
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    genero: ["Biografia", "Drama", "História"]
  },
  {
    titulo: "Top Gun",
    notaAvaliacao: 8.6,
    duracao: 130,
    anoPublicacao: 2022,
    genero: ["Ação", "Drama"]
  },
  {
    titulo: "O Jogo da Imitação",
    notaAvaliacao: 8.0,
    duracao: 114,
    anoPublicacao: 2014,
    genero: ["Biografia", "Drama", "Suspense", "Guerra"]
  }]
  exibeInfoFilmes(listaFilmes)