let filtraLista = (lista, valor) => {
    return lista.filter(valorAtual => valorAtual.includes(valor))
}

const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
console.log(filtraLista(listaSeriados, "Th"))
console.log(filtraLista(listaSeriados, "xasd"))