let exibeMediaAvaliacoesS2 = dadosRestaurante => {
    const valorInicial = 0
    const funcaoRedutora = (acumulador, avaliacaoAtual) => acumulador += avaliacaoAtual.nota
    const somaAvaliacoes = dadosRestaurante.avaliacoes.reduce(funcaoRedutora, valorInicial)
    const mediaAvaliacoes = somaAvaliacoes/dadosRestaurante.avaliacoes.length
    
    console.log(`A média de avaliações do restaurante ${dadosRestaurante.restaurante} foi de ${mediaAvaliacoes.toFixed(2)}.`)
}


const dadosRestaurante = {
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
}

exibeMediaAvaliacoesS2(dadosRestaurante)