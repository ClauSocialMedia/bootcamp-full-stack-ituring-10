
const calculoImc = (peso, altura) => peso / (altura * altura)

function classificacaoImc(imc) {
    if (imc < 18.5)
        return "Abaixo do Peso"
    if (imc < 25)
        return "Peso Normal"
    if (imc < 30)
        return "Sobrepeso"

    return "Obesidade"
}

function checagemImc(peso, altura) {
    const imc = calculoImc(peso, altura)
    console.log(classificacaoImc(imc))
}

checagemImc(70, 1.7)