// ==========================================
// BASE DE DATOS DEL JUEGO
// ==========================================

// ==========================================
// BASE DE DATOS DEL JUEGO
// ==========================================

const jugadoresJuego = [

{
    id:1,
    nombre:"Lionel Messi",
    pais:"Argentina",
    probabilidad:5,
    urlImagen:"img/messi.jpg",

    preguntas:[

        {
            pregunta:"¿En qué país nació Lionel Messi?",
            opciones:["Argentina","España","Brasil","Uruguay"],
            correcta:0
        },

        {
            pregunta:"¿Cuál es la posición de Messi?",
            opciones:["Portero","Defensa","Delantero","Mediocampista"],
            correcta:2
        },

        {
            pregunta:"¿Qué número suele usar Messi?",
            opciones:["7","9","10","11"],
            correcta:2
        },

        {
            pregunta:"¿Qué selección representa Messi?",
            opciones:["Brasil","Argentina","Chile","España"],
            correcta:1
        },

        {
            pregunta:"¿Qué Mundial ganó Messi?",
            opciones:["2014","2018","2022","2010"],
            correcta:2
        },

        {
            pregunta:"¿Qué pie utiliza principalmente?",
            opciones:["Derecho","Izquierdo","Ambos","Ninguno"],
            correcta:1
        },

        {
            pregunta:"¿Cuál fue su primer club profesional?",
            opciones:["River Plate","Barcelona","PSG","Inter Miami"],
            correcta:1
        },

        {
            pregunta:"¿Qué premio ganó varias veces?",
            opciones:["Balón de Oro","Bota de Plata","Golden Boy","Puskás"],
            correcta:0
        },

        {
            pregunta:"¿Qué posición ocupa habitualmente?",
            opciones:["Delantero","Arquero","Lateral","Central"],
            correcta:0
        },

        {
            pregunta:"¿Contra qué selección ganó la final del Mundial 2022?",
            opciones:["Brasil","Francia","Croacia","Alemania"],
            correcta:1
        }

    ]
},


{
    id:2,
    nombre:"Emiliano Martínez",
    pais:"Argentina",
    probabilidad:10,
    urlImagen:"img/dibu.jpg",

    preguntas:[

        {
            pregunta:"¿Cuál es la posición de Emiliano Martínez?",
            opciones:["Portero","Defensa","Delantero","Mediocampista"],
            correcta:0
        },

        {
            pregunta:"¿Qué selección representa?",
            opciones:["Uruguay","Argentina","Chile","Brasil"],
            correcta:1
        },

        {
            pregunta:"¿Cómo es conocido popularmente?",
            opciones:["Dibu","Toro","Fideo","Pulga"],
            correcta:0
        },

        {
            pregunta:"¿Qué premio ganó en Qatar 2022?",
            opciones:["Bota de Oro","Guante de Oro","Balón de Oro","Puskás"],
            correcta:1
        },

        {
            pregunta:"¿Qué pie usa principalmente?",
            opciones:["Izquierdo","Derecho","Ambos","Ninguno"],
            correcta:1
        },

        {
            pregunta:"¿En qué posición juega?",
            opciones:["Arquero","Lateral","Delantero","Volante"],
            correcta:0
        },

        {
            pregunta:"¿En qué continente nació?",
            opciones:["Europa","América","Asia","África"],
            correcta:1
        },

        {
            pregunta:"¿Qué color tiene la bandera argentina?",
            opciones:["Rojo y blanco","Celeste y blanco","Azul y amarillo","Verde y blanco"],
            correcta:1
        },

        {
            pregunta:"¿En qué Mundial fue figura?",
            opciones:["2014","2018","2022","2006"],
            correcta:2
        },

        {
            pregunta:"¿Qué debe hacer un portero principalmente?",
            opciones:["Anotar goles","Atajar","Dirigir al árbitro","Sacar laterales"],
            correcta:1
        }

    ]
},


{
    id:3,
    nombre:"Julián Álvarez",
    pais:"Argentina",
    probabilidad:10,
    urlImagen:"img/julian.jpg",

    preguntas:[

        {
            pregunta:"¿Cuál es la posición de Julián Álvarez?",
            opciones:["Portero","Delantero","Defensa","Volante"],
            correcta:1
        },

        {
            pregunta:"¿Qué selección representa?",
            opciones:["Argentina","Brasil","Chile","Uruguay"],
            correcta:0
        },

        {
            pregunta:"¿Cuál es su apodo?",
            opciones:["La Araña","El Toro","Dibu","Fideo"],
            correcta:0
        },

        {
            pregunta:"¿Qué Mundial ganó?",
            opciones:["2018","2014","2022","2010"],
            correcta:2
        },

        {
            pregunta:"¿En qué país nació?",
            opciones:["Argentina","España","Brasil","México"],
            correcta:0
        },

        {
            pregunta:"¿Qué hace principalmente un delantero?",
            opciones:["Ataja","Defiende","Marca goles","Es árbitro"],
            correcta:2
        },

        {
            pregunta:"¿Qué número suele usar con Argentina?",
            opciones:["9","22","4","1"],
            correcta:0
        },

        {
            pregunta:"¿Qué pie usa principalmente?",
            opciones:["Derecho","Izquierdo","Ambos","Ninguno"],
            correcta:0
        },

        {
            pregunta:"¿Qué colores tiene la bandera argentina?",
            opciones:["Azul y amarillo","Celeste y blanco","Rojo y blanco","Verde y blanco"],
            correcta:1
        },

        {
            pregunta:"¿Qué deporte practica Julián Álvarez?",
            opciones:["Baloncesto","Tenis","Fútbol","Vóley"],
            correcta:2
        }

    ]
},


{
    id:4,
    nombre:"Moisés Caicedo",
    pais:"Ecuador",
    probabilidad:10,
    urlImagen:"img/caicedo.jpg",

    preguntas:[

        {
            pregunta:"¿De qué país es Moisés Caicedo?",
            opciones:["Perú","Ecuador","Colombia","Chile"],
            correcta:1
        },

        {
            pregunta:"¿Cuál es su posición?",
            opciones:["Portero","Defensa","Centrocampista","Delantero"],
            correcta:2
        },

        {
            pregunta:"¿Qué selección representa?",
            opciones:["Ecuador","Brasil","Argentina","Uruguay"],
            correcta:0
        },

        {
            pregunta:"¿Qué pie utiliza principalmente?",
            opciones:["Derecho","Izquierdo","Ambos","Ninguno"],
            correcta:0
        },

        {
            pregunta:"¿Qué colores tiene la bandera de Ecuador?",
            opciones:["Rojo y blanco","Amarillo, azul y rojo","Verde y amarillo","Azul y blanco"],
            correcta:1
        },

        {
            pregunta:"¿Cuál es su función principal?",
            opciones:["Atajar","Crear juego","Ser árbitro","Narrar partidos"],
            correcta:1
        },

        {
            pregunta:"¿En qué continente juega Ecuador?",
            opciones:["Europa","América","Asia","África"],
            correcta:1
        },

        {
            pregunta:"¿Qué deporte practica?",
            opciones:["Tenis","Fútbol","Baloncesto","Vóley"],
            correcta:1
        },

        {
            pregunta:"¿Qué posición ocupa en el campo?",
            opciones:["Centrocampista","Arquero","Lateral","Delantero"],
            correcta:0
        },

        {
            pregunta:"¿Qué selección representa internacionalmente?",
            opciones:["Ecuador","Brasil","Chile","México"],
            correcta:0
        }

    ]
},
{
    id:5,
    nombre:"Enner Valencia",
    pais:"Ecuador",
    probabilidad:10,
    urlImagen:"img/enner.jpg",

    preguntas:[

        {
            pregunta:"¿De qué país es Enner Valencia?",
            opciones:["Perú","Ecuador","Argentina","Brasil"],
            correcta:1
        },

        {
            pregunta:"¿Cuál es su posición?",
            opciones:["Delantero","Arquero","Defensa","Portero"],
            correcta:0
        },

        {
            pregunta:"¿Qué selección representa?",
            opciones:["Chile","Ecuador","Colombia","Uruguay"],
            correcta:1
        },

        {
            pregunta:"¿Qué característica destaca de Enner?",
            opciones:["Es goleador","Es portero","Es árbitro","Es entrenador"],
            correcta:0
        },

        {
            pregunta:"¿Qué colores tiene la bandera ecuatoriana?",
            opciones:["Rojo y blanco","Amarillo, azul y rojo","Azul y blanco","Verde y amarillo"],
            correcta:1
        },

        {
            pregunta:"¿Qué hace un delantero?",
            opciones:["Ataja","Marca goles","Dirige el partido","Saca laterales"],
            correcta:1
        },

        {
            pregunta:"¿Qué pie usa principalmente?",
            opciones:["Derecho","Izquierdo","Ambos","Ninguno"],
            correcta:0
        },

        {
            pregunta:"¿En qué deporte compite?",
            opciones:["Baloncesto","Fútbol","Vóley","Tenis"],
            correcta:1
        },

        {
            pregunta:"¿Qué selección capitanea frecuentemente?",
            opciones:["Argentina","Brasil","Ecuador","Chile"],
            correcta:2
        },

        {
            pregunta:"¿Cuál es su principal función?",
            opciones:["Defender","Marcar goles","Atajar","Arbitrar"],
            correcta:1
        }

    ]
},


{
    id:6,
    nombre:"Neymar Jr.",
    pais:"Brasil",
    probabilidad:10,
    urlImagen:"img/neymar.jpg",

    preguntas:[

        {
            pregunta:"¿De qué país es Neymar?",
            opciones:["Argentina","Brasil","Portugal","España"],
            correcta:1
        },

        {
            pregunta:"¿Cuál es su posición?",
            opciones:["Delantero","Arquero","Defensa","Portero"],
            correcta:0
        },

        {
            pregunta:"¿Qué selección representa?",
            opciones:["Brasil","Argentina","Chile","Francia"],
            correcta:0
        },

        {
            pregunta:"¿Qué colores tiene la bandera brasileña?",
            opciones:["Rojo y blanco","Verde, amarillo y azul","Azul y blanco","Negro y rojo"],
            correcta:1
        },

        {
            pregunta:"¿Qué pie utiliza principalmente?",
            opciones:["Derecho","Izquierdo","Ambos","Ninguno"],
            correcta:0
        },

        {
            pregunta:"¿Qué hace principalmente un delantero?",
            opciones:["Ataja","Marca goles","Dirige el partido","Es árbitro"],
            correcta:1
        },

        {
            pregunta:"¿En qué continente está Brasil?",
            opciones:["Europa","Asia","América","África"],
            correcta:2
        },

        {
            pregunta:"¿Qué deporte practica Neymar?",
            opciones:["Tenis","Baloncesto","Fútbol","Golf"],
            correcta:2
        },

        {
            pregunta:"¿Cuál es su selección nacional?",
            opciones:["Brasil","Portugal","España","México"],
            correcta:0
        },

        {
            pregunta:"¿Qué posición ocupa normalmente?",
            opciones:["Portero","Defensa","Delantero","Árbitro"],
            correcta:2
        }

    ]
},


{
    id:7,
    nombre:"Vinícius Jr.",
    pais:"Brasil",
    probabilidad:10,
    urlImagen:"img/vinicius.jpg",

    preguntas:[

        {
            pregunta:"¿De qué país es Vinícius Jr.?",
            opciones:["Argentina","Brasil","Portugal","Uruguay"],
            correcta:1
        },

        {
            pregunta:"¿Cuál es su posición?",
            opciones:["Delantero","Portero","Defensa","Árbitro"],
            correcta:0
        },

        {
            pregunta:"¿Qué selección representa?",
            opciones:["Brasil","España","Francia","Argentina"],
            correcta:0
        },

        {
            pregunta:"¿Qué pie utiliza principalmente?",
            opciones:["Derecho","Izquierdo","Ambos","Ninguno"],
            correcta:1
        },

        {
            pregunta:"¿Qué colores tiene la bandera de Brasil?",
            opciones:["Rojo y blanco","Verde, amarillo y azul","Azul y blanco","Negro y rojo"],
            correcta:1
        },

        {
            pregunta:"¿Cuál es su función principal?",
            opciones:["Atajar","Marcar goles","Ser árbitro","Defender el arco"],
            correcta:1
        },

        {
            pregunta:"¿En qué continente está Brasil?",
            opciones:["Europa","Asia","América","África"],
            correcta:2
        },

        {
            pregunta:"¿Qué deporte practica?",
            opciones:["Baloncesto","Tenis","Fútbol","Vóley"],
            correcta:2
        },

        {
            pregunta:"¿Qué posición ocupa normalmente?",
            opciones:["Portero","Delantero","Defensa","Árbitro"],
            correcta:1
        },

        {
            pregunta:"¿Qué selección nacional representa?",
            opciones:["Brasil","Portugal","España","México"],
            correcta:0
        }

    ]
},


{
    id:8,
    nombre:"Kylian Mbappé",
    pais:"Francia",
    probabilidad:10,
    urlImagen:"img/mbappe.jpg",

    preguntas:[

        {
            pregunta:"¿De qué país es Kylian Mbappé?",
            opciones:["Francia","Brasil","Argentina","España"],
            correcta:0
        },

        {
            pregunta:"¿Cuál es su posición?",
            opciones:["Portero","Delantero","Defensa","Árbitro"],
            correcta:1
        },

        {
            pregunta:"¿Qué selección representa?",
            opciones:["Francia","Alemania","Italia","Portugal"],
            correcta:0
        },

        {
            pregunta:"¿Qué Mundial ganó?",
            opciones:["2014","2018","2022","2010"],
            correcta:1
        },

        {
            pregunta:"¿Qué pie utiliza principalmente?",
            opciones:["Derecho","Izquierdo","Ambos","Ninguno"],
            correcta:0
        },

        {
            pregunta:"¿Qué colores tiene la bandera francesa?",
            opciones:["Azul, blanco y rojo","Verde y amarillo","Rojo y blanco","Azul y amarillo"],
            correcta:0
        },

        {
            pregunta:"¿Qué hace principalmente un delantero?",
            opciones:["Atajar","Marcar goles","Dirigir el partido","Ser árbitro"],
            correcta:1
        },

        {
            pregunta:"¿En qué continente está Francia?",
            opciones:["América","Europa","Asia","África"],
            correcta:1
        },

        {
            pregunta:"¿Qué deporte practica Mbappé?",
            opciones:["Tenis","Fútbol","Baloncesto","Golf"],
            correcta:1
        },

        {
            pregunta:"¿Qué selección representa internacionalmente?",
            opciones:["Francia","España","Portugal","Brasil"],
            correcta:0
        }

    ]
},
{
    id:9,
    nombre:"Antoine Griezmann",
    pais:"Francia",
    probabilidad:10,
    urlImagen:"img/griezmann.jpg",

    preguntas:[

        {
            pregunta:"¿De qué país es Antoine Griezmann?",
            opciones:["España","Francia","Italia","Alemania"],
            correcta:1
        },

        {
            pregunta:"¿Cuál es su posición?",
            opciones:["Delantero","Portero","Defensa","Árbitro"],
            correcta:0
        },

        {
            pregunta:"¿Qué selección representa?",
            opciones:["Portugal","Francia","Brasil","Argentina"],
            correcta:1
        },

        {
            pregunta:"¿Qué pie utiliza principalmente?",
            opciones:["Derecho","Izquierdo","Ambos","Ninguno"],
            correcta:1
        },

        {
            pregunta:"¿Qué colores tiene la bandera francesa?",
            opciones:["Azul, blanco y rojo","Rojo y blanco","Verde y amarillo","Azul y amarillo"],
            correcta:0
        },

        {
            pregunta:"¿Qué hace principalmente un delantero?",
            opciones:["Atajar","Marcar goles","Ser árbitro","Dirigir el partido"],
            correcta:1
        },

        {
            pregunta:"¿En qué continente está Francia?",
            opciones:["Europa","Asia","África","América"],
            correcta:0
        },

        {
            pregunta:"¿Qué deporte practica?",
            opciones:["Fútbol","Baloncesto","Tenis","Natación"],
            correcta:0
        },

        {
            pregunta:"¿Qué selección nacional representa?",
            opciones:["Francia","España","Portugal","Italia"],
            correcta:0
        },

        {
            pregunta:"¿Cuál es su función principal?",
            opciones:["Defender","Marcar goles","Atajar","Arbitrar"],
            correcta:1
        }

    ]
},

{
    id:10,
    nombre:"Cristiano Ronaldo",
    pais:"Portugal",
    probabilidad:10,
    urlImagen:"img/cristiano.jpg",

    preguntas:[

        {
            pregunta:"¿De qué país es Cristiano Ronaldo?",
            opciones:["Portugal","España","Brasil","Italia"],
            correcta:0
        },

        {
            pregunta:"¿Cuál es la posición de Cristiano Ronaldo?",
            opciones:["Portero","Delantero","Defensa","Centrocampista"],
            correcta:1
        },

        {
            pregunta:"¿Qué selección representa?",
            opciones:["España","Portugal","Francia","Brasil"],
            correcta:1
        },

        {
            pregunta:"¿Qué número ha utilizado durante gran parte de su carrera?",
            opciones:["7","9","10","11"],
            correcta:0
        },

        {
            pregunta:"¿Qué pie utiliza principalmente?",
            opciones:["Derecho","Izquierdo","Ambos","Ninguno"],
            correcta:0
        },

        {
            pregunta:"¿En qué continente está Portugal?",
            opciones:["Europa","América","Asia","África"],
            correcta:0
        },

        {
            pregunta:"¿Qué deporte practica Cristiano Ronaldo?",
            opciones:["Tenis","Fútbol","Baloncesto","Golf"],
            correcta:1
        },

        {
            pregunta:"¿Cuál es su principal función en el campo?",
            opciones:["Atajar","Marcar goles","Arbitrar","Defender"],
            correcta:1
        },

        {
            pregunta:"¿Qué selección capitanea habitualmente?",
            opciones:["Portugal","España","Brasil","Italia"],
            correcta:0
        },

        {
            pregunta:"¿Cuál es su apodo más conocido?",
            opciones:["CR7","O Fenómeno","La Pulga","El Tigre"],
            correcta:0
        }

    ]
},

{
    id:11,
    nombre:"Bruno Fernandes",
    pais:"Portugal",
    probabilidad:10,
    urlImagen:"img/bruno.jpg",

    preguntas:[

        {
            pregunta:"¿De qué país es Bruno Fernandes?",
            opciones:["Portugal","España","Brasil","Italia"],
            correcta:0
        },

        {
            pregunta:"¿Cuál es su posición?",
            opciones:["Portero","Centrocampista","Defensa","Delantero"],
            correcta:1
        },

        {
            pregunta:"¿Qué selección representa?",
            opciones:["Portugal","Francia","España","Brasil"],
            correcta:0
        },

        {
            pregunta:"¿En qué continente está Portugal?",
            opciones:["Europa","Asia","América","África"],
            correcta:0
        },

        {
            pregunta:"¿Qué deporte practica?",
            opciones:["Baloncesto","Tenis","Fútbol","Vóley"],
            correcta:2
        },

        {
            pregunta:"¿Cuál es su función principal?",
            opciones:["Crear juego","Atajar","Defender el arco","Arbitrar"],
            correcta:0
        },

        {
            pregunta:"¿Qué pie utiliza principalmente?",
            opciones:["Derecho","Izquierdo","Ambos","Ninguno"],
            correcta:0
        },

        {
            pregunta:"¿Qué selección nacional representa?",
            opciones:["Portugal","España","Italia","Brasil"],
            correcta:0
        },

        {
            pregunta:"¿En qué zona del campo juega normalmente?",
            opciones:["Centrocampo","Portería","Defensa central","Lateral"],
            correcta:0
        },

        {
            pregunta:"¿Qué número ha usado frecuentemente con Portugal?",
            opciones:["8","10","14","18"],
            correcta:0
        }

    ]
},

{
    id:12,
    nombre:"James Rodríguez",
    pais:"Colombia",
    probabilidad:10,
    urlImagen:"img/james.jpg",

    preguntas:[

        {
            pregunta:"¿De qué país es James Rodríguez?",
            opciones:["Colombia","Ecuador","Perú","Chile"],
            correcta:0
        },

        {
            pregunta:"¿Cuál es su posición?",
            opciones:["Centrocampista","Portero","Defensa","Delantero"],
            correcta:0
        },

        {
            pregunta:"¿Qué selección representa?",
            opciones:["Colombia","Brasil","Argentina","Uruguay"],
            correcta:0
        },

        {
            pregunta:"¿Qué premio ganó en el Mundial 2014?",
            opciones:["Bota de Oro","Balón de Oro","Guante de Oro","Puskás"],
            correcta:0
        },

        {
            pregunta:"¿En qué continente está Colombia?",
            opciones:["Europa","América","Asia","África"],
            correcta:1
        },

        {
            pregunta:"¿Qué deporte practica?",
            opciones:["Fútbol","Tenis","Baloncesto","Vóley"],
            correcta:0
        },

        {
            pregunta:"¿Qué colores tiene la bandera de Colombia?",
            opciones:["Amarillo, azul y rojo","Rojo y blanco","Azul y blanco","Verde y amarillo"],
            correcta:0
        },

        {
            pregunta:"¿Qué función cumple principalmente?",
            opciones:["Crear jugadas","Atajar","Arbitrar","Defender el arco"],
            correcta:0
        },

        {
            pregunta:"¿Qué pie utiliza principalmente?",
            opciones:["Izquierdo","Derecho","Ambos","Ninguno"],
            correcta:0
        },

        {
            pregunta:"¿Qué selección representa internacionalmente?",
            opciones:["Colombia","Ecuador","Perú","Chile"],
            correcta:0
        }

    ]
},

{
    id:13,
    nombre:"Luis Díaz",
    pais:"Colombia",
    probabilidad:10,
    urlImagen:"img/luisdiaz.jpg",

    preguntas:[

        {
            pregunta:"¿De qué país es Luis Díaz?",
            opciones:["Colombia","Ecuador","Brasil","Perú"],
            correcta:0
        },

        {
            pregunta:"¿Cuál es su posición?",
            opciones:["Extremo","Portero","Defensa","Centrocampista"],
            correcta:0
        },

        {
            pregunta:"¿Qué selección representa?",
            opciones:["Colombia","Argentina","Brasil","Chile"],
            correcta:0
        },

        {
            pregunta:"¿Qué característica destaca de Luis Díaz?",
            opciones:["Velocidad y regate","Atajadas","Arbitraje","Defensa aérea"],
            correcta:0
        },

        {
            pregunta:"¿En qué continente está Colombia?",
            opciones:["Europa","Asia","América","África"],
            correcta:2
        },

        {
            pregunta:"¿Qué deporte practica?",
            opciones:["Fútbol","Tenis","Baloncesto","Natación"],
            correcta:0
        },

        {
            pregunta:"¿Qué colores tiene la bandera colombiana?",
            opciones:["Amarillo, azul y rojo","Rojo y blanco","Azul y blanco","Verde y amarillo"],
            correcta:0
        },

        {
            pregunta:"¿Qué pie utiliza principalmente?",
            opciones:["Derecho","Izquierdo","Ambos","Ninguno"],
            correcta:1
        },

        {
            pregunta:"¿Cuál es su función principal?",
            opciones:["Crear peligro y marcar goles","Atajar","Dirigir el partido","Defender el arco"],
            correcta:0
        },

        {
            pregunta:"¿Qué selección nacional representa?",
            opciones:["Colombia","Perú","Ecuador","Chile"],
            correcta:0
        }

    ]
}

];
// ==========================================
// VARIABLES DEL JUEGO
// ==========================================


let jugadorActual;

let preguntasActuales=[];

let preguntaNumero=0;

let puntos=0;






// ==========================================
// ELEMENTOS HTML
// ==========================================

const nombreJugador = document.getElementById("nombreJugador");

const paisJugador = document.getElementById("paisJugador");

const imagenJugador = document.getElementById("imagenJugador");

const pregunta = document.getElementById("pregunta");

const opciones = document.getElementById("opciones");

const resultado = document.getElementById("resultado");

const puntosTexto = document.getElementById("puntos");

const btnJugar = document.getElementById("btnJugar");

const btnSiguiente = document.getElementById("btnSiguiente");

// ==========================================
// SELECCIONAR JUGADOR ALEATORIO
// CON PROBABILIDAD
// ==========================================

function seleccionarJugador(){

    let totalProbabilidad =
    jugadoresJuego.reduce(
        (total, jugador) => total + jugador.probabilidad,
        0
    );

    let random =
    Math.random() * totalProbabilidad;

    for (let jugador of jugadoresJuego){

        random -= jugador.probabilidad;

        if(random <= 0){

            return jugador;

        }

    }

}

// ==========================================
// INICIAR JUEGO
// ==========================================
function iniciarJuego(){

    jugadorActual =
    seleccionarJugador();

    nombreJugador.textContent =
    jugadorActual.nombre;

    paisJugador.textContent =
    "🌎 " + jugadorActual.pais;

    imagenJugador.src =
    jugadorActual.urlImagen;

    preguntasActuales =
    [...jugadorActual.preguntas]
    .sort(() => Math.random() - 0.5);

    preguntaNumero = 0;

    puntos = 0;

    puntosTexto.textContent = puntos;

    resultado.classList.add("d-none");

    btnSiguiente.classList.add("d-none");

    mostrarPregunta();

}

// ==========================================
// MOSTRAR PREGUNTA
// ==========================================

function mostrarPregunta(){

    opciones.innerHTML = "";

    resultado.classList.add("d-none");

    btnSiguiente.classList.add("d-none");

    let preguntaActual = preguntasActuales[preguntaNumero];

    pregunta.textContent =
    (preguntaNumero + 1) +
    "/10 - " +
    preguntaActual.pregunta;

    preguntaActual.opciones.forEach(opcion => {

        const boton = document.createElement("button");

        boton.textContent = opcion;

        boton.className = "opcion";

        boton.addEventListener("click", () => {

            comprobarRespuesta(
                opcion,
                boton
            );

        });

        opciones.appendChild(boton);

    });

}
// ==========================================
// COMPROBAR RESPUESTA
// ==========================================

function comprobarRespuesta(
    respuesta,
    boton
){

    let indiceCorrecto =
    preguntasActuales[preguntaNumero].correcta;

    let correcta =
    preguntasActuales[preguntaNumero]
    .opciones[indiceCorrecto];

    const botones =
    document.querySelectorAll(".opcion");

    botones.forEach((btn, index)=>{

        btn.disabled = true;

        if(index === indiceCorrecto){

            btn.classList.add("correcta");

        }

    });

    if(respuesta === correcta){

        puntos++;

    }else{

        boton.classList.add("incorrecta");

    }

    puntosTexto.textContent = puntos;

    btnSiguiente.classList.remove("d-none");

}
// ==========================================
// SIGUIENTE PREGUNTA
// ==========================================

btnSiguiente.addEventListener(
"click",
()=>{

    preguntaNumero++;

    if(preguntaNumero < 10){
        mostrarPregunta();

        btnSiguiente.classList.add("d-none");

    }else{
        terminarJuego();
    }
});

// ==========================================
// FINAL DEL JUEGO
// ==========================================

function terminarJuego(){

    opciones.innerHTML="";

    pregunta.textContent =
    "Juego terminado";

    if(puntos>=7){
        resultado.textContent =
        "🎉 Felicidades desbloqueaste el cromo de "
        +jugadorActual.nombre;

        resultado.className=
        "alert exito";

        desbloquearCromo(
            jugadorActual.id
        );

    }else{
        resultado.textContent =
        "❌ No llegaste a 7 puntos. Intenta nuevamente";

        resultado.className=
        "alert error";
    }
    resultado.classList.remove(
        "d-none"
    );
}

// ==========================================
// GUARDAR CROMO DESBLOQUEADO
// ==========================================


function desbloquearCromo(id){
    let desbloqueados =
    JSON.parse(
        localStorage.getItem(
            "cromosDesbloqueados"
        )
    )
    ||
    [];

    if(!desbloqueados.includes(id)){
        desbloqueados.push(id);
    }

    localStorage.setItem(
        "cromosDesbloqueados",
        JSON.stringify(desbloqueados)
    );

}

// ==========================================
// BOTÓN JUGAR
// ==========================================

btnJugar.addEventListener(
"click",()=>{iniciarJuego();});