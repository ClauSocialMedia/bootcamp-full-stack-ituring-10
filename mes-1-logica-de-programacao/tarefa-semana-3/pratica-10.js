function contaVotos(votos) {
    let votosBrasil = 0

    for (voto in votos) {
        if (voto === 1) {
            votosBrasil++
        }
    }
    let votosArgentina = 0


    for (voto in votos) {
        if (voto === 2) {
            votosArgentina++
        }
    }
    let votosEspanha = 0


    for (voto in votos) {
        if (voto === 3) {
            votosEspanha++
        }
    }
    let votosPortugal = 0
    for (voto in votos) {
        if (voto === 4) {
            votosPortugal++
        }
    }
    console.log(`votos Brasil ${votosBrasil}`)
    console.log(`votos Argentina ${votosArgentina}`)
    console.log(`votos Espanha ${votosEspanha}`)
    console.log(`votos Portugal ${votosPortugal}`)
    if (votoBrasil > votoArgentina && votoBrasil > votoEspanha && votoBrasil > votoPortugal) {
        console.log("Brasil é o preferido para ganhar a Copa do Mundo")
    }

}



let votos = ([1, 1, 1, 4, 4, 2, 3, 2])


contaVotos(votos)

