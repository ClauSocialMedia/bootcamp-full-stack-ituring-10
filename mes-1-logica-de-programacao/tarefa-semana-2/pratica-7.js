function helloWorld(idioma) {
    if (idioma === "en")
        console.log("Hello world")
    else if (idioma === "es")
        console.log("Hola Mundo!")
    else if (!idioma)
        console.log("Olá, Mundo!")
}


helloWorld("en")
helloWorld("es")
helloWorld()
