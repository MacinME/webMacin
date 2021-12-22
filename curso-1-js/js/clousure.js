const papa = (nuevoEngendro) => {
    var cantidadDeHijos = 0;
    const crearEngendro = (nuevoEngendro) => {
        cantidadDeHijos += nuevoEngendro;
        console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
    }
    return crearEngendro;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1) // cantidad de engendritos = 1
traigamosHijosAlMundo(1) // cantidad de engendritos = 2
traigamosHijosAlMundo(1) // cantidad de engendritos = 3
traigamosHijosAlMundo(12)