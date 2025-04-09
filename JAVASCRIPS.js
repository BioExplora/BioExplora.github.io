function mostrarSeccion(idSeccion) {                                    // Función para mostrar u ocultar secciones
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('main section');
    secciones.forEach(seccion => {
        seccion.classList.remove('seccion-activa');
        seccion.classList.add('seccion-oculta');
    });

    // Mostrar la sección seleccionada
    const seccionActiva = document.getElementById(idSeccion);
    if (seccionActiva) {
        seccionActiva.classList.remove('seccion-oculta');
        seccionActiva.classList.add('seccion-activa');
    }
}

// Función para mostrar más información
function mostrarMas(tema) {
    const elemento = document.getElementById(`mas${tema.charAt(0).toUpperCase() + tema.slice(1)}`);
    if (elemento.classList.contains('hidden')) {
        elemento.classList.remove('hidden');
    } else {
        elemento.classList.add('hidden');
    }
}

// Función para iniciar el Quiz
function iniciarQuiz() {
    const preguntas = [
        { pregunta: "¿Qué es el ADN?", respuesta: "El material genético que contiene las instrucciones para el desarrollo y funcionamiento de los organismos." },
        { pregunta: "¿Qué es una célula eucariota?", respuesta: "Una célula que tiene un núcleo definido y orgánulos membranosos." },
    ];

    let respuestasCorrectas = 0;

    preguntas.forEach((pregunta, index) => {
        const respuestaUsuario = prompt(`Pregunta ${index + 1}: ${pregunta.pregunta}`);
        if (respuestaUsuario && respuestaUsuario.toLowerCase() === pregunta.respuesta.toLowerCase()) {
            respuestasCorrectas++;
        }
    });

    alert(`Obtuviste ${respuestasCorrectas} de ${preguntas.length} respuestas correctas.`);
}

// Función para iniciar la Sopa de Letras
function iniciarSopaLetras() {
    alert("¡Sopa de letras en construcción! Próximamente...");
}
