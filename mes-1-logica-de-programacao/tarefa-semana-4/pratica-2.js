let procuraItemEmLista = (lista, valor) => {
    let indiceValorEncontrado = undefined

   
    lista.forEach((valorAtual, indice) => {
        if (valorAtual === valor)
            indiceValorEncontrado = indice
    })

    return indiceValorEncontrado
}



const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
console.log(procuraItemEmLista(listaSeriados, "Game of Thrones"))
console.log(procuraItemEmLista(listaSeriados, "Friends"))