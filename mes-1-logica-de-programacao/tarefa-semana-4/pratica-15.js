let exibeCarroACaminho = listaVeiculos => {
    const veiculoMaisProximo = listaVeiculos.sort((veiculoAnterior, veiculoAtual) => 
    veiculoAnterior.tempoEstimado - veiculoAtual.tempoEstimado
    )[0]

    console.log(`${veiculoMaisProximo.motorista} está a caminho com o carro Fox de placa ${veiculoMaisProximo.placa}. Chega em ${veiculoMaisProximo.tempoEstimado} minutos.`)
}

const listaVeiculos = [{
    motorista: "Thais S.",
    avaliacao: 9.8,
    tempoEstimado: 7,
    veiculo: "Palio",
    placa: "ABC4321"
  },
  {
    motorista: "Thales Gonçalves",
    avaliacao: 8.9,
    tempoEstimado: 4,
    veiculo: "Celta",
    placa: "ABC0987"
  },
  {
    motorista: "José Lopes",
    avaliacao: 9.9,
    tempoEstimado: 5,
    veiculo: "Fox",
    placa: "ABC1234"
  },
  {
    motorista: "Cristina Souza",
    avaliacao: 9.3,
    tempoEstimado: 3,
    veiculo: "Fox",
    placa: "ABC1234"
  },
  {
    motorista: "Leo Garcia",
    avaliacao: 8.5,
    tempoEstimado: 9,
    veiculo: "Ka",
    placa: "ABC8765"
}]
exibeCarroACaminho(listaVeiculos)