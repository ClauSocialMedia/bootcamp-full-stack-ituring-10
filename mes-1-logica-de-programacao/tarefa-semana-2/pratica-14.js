function checagemImc1 (peso, altura) {
    const imc = peso / (altura * altura)
    let classificacaoImc

    if (imc < 18,5)
        classificacaoImc = "Abaixo do Peso"
    else if (imc < 25)
        classificacaoImc = "Peso Normal"
  else if (imc < 30)
        classificacaoImc = "Sobrepeso"
   else
        classificacaoImc = "Obesidade"

   return classificacaoImc
}
