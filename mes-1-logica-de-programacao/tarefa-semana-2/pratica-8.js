function parOuImpar(numero) {
    const ehPar = numero%2 === 0
    if (ehPar)
        console.log(`O número ${numero} é par`)
    else
        console.log(`O número ${numero} é ímpar`)
}


parOuImpar(-2)
parOuImpar(-1)
parOuImpar(0)
parOuImpar(1)
parOuImpar(2)
