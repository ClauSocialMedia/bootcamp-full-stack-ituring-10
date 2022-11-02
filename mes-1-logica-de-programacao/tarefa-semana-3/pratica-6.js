let filtraLista = (lista, valor) => {
    let novaLista = []
    for (item of lista)
        if (item.includes(valor))
            novaLista.push(item)
    return novaLista
}

/* TESTANDO A SOLUÇÃO */
const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
console.log(filtraLista(listaSeriados, "Th"))
console.log(filtraLista(listaSeriados, "xasd"))