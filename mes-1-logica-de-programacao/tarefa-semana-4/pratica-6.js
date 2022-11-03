let exibeDadosFilme = filme => {
    console.log(`O filme ${filme.titulo} que estreou em ${filme.lancamento} tem a avaliação de ${filme.nota} pelo IMDb.`)
}


const filme = {
    titulo: "Estrelas Além do Tempo",
    nota: 7.8,
    duracao: 127,
    lancamento: 2016,
    categoria: "Drama"
}
exibeDadosFilme(filme)