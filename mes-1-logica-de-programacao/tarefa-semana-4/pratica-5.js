let ordenaCrescenteS1 = lista => {
    return lista.sort((valorAnterior, valorAtual) => {
        return valorAnterior - valorAtual
    })
}
let listaNumeros = [4, 9, 7, 1, 8, 12]
console.log(ordenaCrescenteS1(listaNumeros))
