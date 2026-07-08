// ======================================
// ARREGLO GLOBAL DE CROMOS
// ======================================

const cromosMundial = [];




// ======================================
// FUNCIÓN CREADORA DE JUGADORES
// ======================================

function crearJugador(
    id,
    nombre,
    pais,
    posicion,
    urlImagen,
    urlBandera,
    colorFondoHex,
    estadisticas,
    destacado,
    curiosidad
){

    return {

        id,
        nombre,
        pais,
        posicion,
        urlImagen,
        urlBandera,
        colorFondoHex,
        estadisticas,
        destacado,
        curiosidad,
        desbloqueado:false

    };

}






// ======================================
// DATOS DE JUGADORES
// ======================================


// ARGENTINA

cromosMundial.push(

crearJugador(
1,
"Lionel Messi",
"Argentina",
"Delantero",
"assets/img/jugadores/messi.jpg",
"assets/img/banderas/argentina.png",
"#75AADB",
{
    goles:112,
    partidos:191
},
true,
"Campeón del Mundo 2022"
)

);



cromosMundial.push(

crearJugador(
2,
"Emiliano Martínez",
"Argentina",
"Portero",
"assets/img/jugadores/martinez.jpg",
"assets/img/banderas/argentina.png",
"#75AADB",
{
    goles:0,
    partidos:42
},
false,
"Ganador del premio al mejor arquero del Mundial 2022"
)

);



cromosMundial.push(

crearJugador(
3,
"Julián Álvarez",
"Argentina",
"Delantero",
"assets/img/jugadores/alvarez.jpg",
"assets/img/banderas/argentina.png",
"#75AADB",
{
    goles:10,
    partidos:35
},
true,
"Joven delantero argentino"
)

);







// ECUADOR


cromosMundial.push(

crearJugador(
4,
"Moisés Caicedo",
"Ecuador",
"Centrocampista",
"assets/img/jugadores/caicedo.jpg",
"assets/img/banderas/ecuador.png",
"#FFD100",
{
    goles:6,
    partidos:45
},
true,
"Una de las figuras ecuatorianas"
)

);




cromosMundial.push(

crearJugador(
5,
"Enner Valencia",
"Ecuador",
"Delantero",
"assets/img/jugadores/valencia.jpg",
"assets/img/banderas/ecuador.png",
"#FFD100",
{
    goles:45,
    partidos:90
},
true,
"Máximo goleador histórico de Ecuador"
)

);







// BRASIL


cromosMundial.push(

crearJugador(
6,
"Neymar Jr",
"Brasil",
"Delantero",
"assets/img/jugadores/neymar.jpg",
"assets/img/banderas/brasil.png",
"#009739",
{
    goles:79,
    partidos:128
},
true,
"Uno de los máximos goleadores de Brasil"
)

);



cromosMundial.push(

crearJugador(
7,
"Vinicius Jr",
"Brasil",
"Extremo",
"assets/img/jugadores/vinicius.jpg",
"assets/img/banderas/brasil.png",
"#009739",
{
    goles:30,
    partidos:50
},
true,
"Jugador destacado del Real Madrid"
)

);








// FRANCIA


cromosMundial.push(

crearJugador(
8,
"Kylian Mbappé",
"Francia",
"Delantero",
"assets/img/jugadores/mbappe.jpg",
"assets/img/banderas/francia.png",
"#0055A4",
{
    goles:52,
    partidos:90
},
true,
"Campeón del Mundo 2018"
)

);



cromosMundial.push(

crearJugador(
9,
"Antoine Griezmann",
"Francia",
"Delantero",
"assets/img/jugadores/griezmann.jpg",
"assets/img/banderas/francia.png",
"#0055A4",
{
    goles:44,
    partidos:130
},
true,
"Jugador importante de Francia"
)

);


//Portugal

cromosMundial.push(

crearJugador(
10,
"Cristiano Ronaldo",
"Portugal",
"Delantero",
"assets/img/jugadores/ronaldo.jpg",
"assets/img/banderas/portugal.png",
"#006600",
{
    goles:138,
    partidos:221
},
true,
"Maximo goleador historico de selecciones"
)

);

cromosMundial.push(

crearJugador(
11,
"Bruno Fernandes",
"Portugal",
"Centrocampista",
"assets/img/jugadores/bruno.jpg",
"assets/img/banderas/portugal.png",
"#006600",
{
    goles:25,
    partidos:78
},
true,
"Uno de los líderes del mediocampo de Portugal."
)

);


//Colombia

cromosMundial.push(

crearJugador(
12,
"James Rodríguez",
"Colombia",
"Centrocampista",
"assets/img/jugadores/james.jpg",
"assets/img/banderas/colombia.png",
"#FCD116",
{
    goles:29,
    partidos:112
},
true,
"Ganador de la Bota de Oro del Mundial Brasil 2014."
)

);

cromosMundial.push(

crearJugador(
13,
"Luis Díaz",
"Colombia",
"Extremo",
"assets/img/jugadores/diaz.jpg",
"assets/img/banderas/colombia.png",
"#FCD116",
{
    goles:18,
    partidos:64
},
true,
"Reconocido por su velocidad y habilidad en el uno contra uno."
)

);









// ======================================
// LEER DESBLOQUEOS DEL JUEGO
// ======================================

function cargarDesbloqueados(){


    const desbloqueados =
    JSON.parse(
        localStorage.getItem(
            "cromosDesbloqueados"
        )
    )
    || [];



    cromosMundial.forEach(jugador=>{


        if(
            desbloqueados.includes(jugador.id)
        ){

            jugador.desbloqueado=true;

        }


    });


}







// ======================================
// RENDERIZAR ALBUM
// ======================================

function renderizarAlbum(lista){


    const album =
    document.getElementById("album");



    album.innerHTML="";



    lista.forEach(jugador=>{


        const columna =
        document.createElement("div");


        columna.className =
        "col-md-4 col-lg-3";





        const card =
        document.createElement("div");


        card.className =
        "card-cromo";





        if(!jugador.desbloqueado){


            card.classList.add(
                "bloqueado"
            );


        }






        const imagen =
        document.createElement("img");


        imagen.src =
        jugador.urlImagen;


        imagen.alt =
        jugador.nombre;





        const contenido =
        document.createElement("div");


        contenido.className =
        "contenido";





        const bandera =
        document.createElement("img");


        bandera.src =
        jugador.urlBandera;


        bandera.className =
        "bandera";






        const nombre =
        document.createElement("h3");


        nombre.textContent =
        jugador.nombre;






        const pais =
        document.createElement("p");


        pais.textContent =
        "🌎 " + jugador.pais;






        const posicion =
        document.createElement("p");


        posicion.textContent =
        "⚽ " + jugador.posicion;






        const goles =
        document.createElement("p");


        goles.textContent =
        "Goles: " +
        jugador.estadisticas.goles;
        // CURIOSIDAD

        const curiosidad =
        document.createElement("p");


        curiosidad.textContent =
        "💡 " + jugador.curiosidad;




        // BOTÓN (solo muestra información)

        const boton =
        document.createElement("button");


        boton.textContent =
        "Ver información";


        boton.className =
        "btn-desbloquear";



        boton.addEventListener(
            "click",
            ()=>{


                alert(
                    jugador.nombre +
                    "\n\nPaís: " +
                    jugador.pais +
                    "\nPosición: " +
                    jugador.posicion +
                    "\nGoles: " +
                    jugador.estadisticas.goles +
                    "\n\n" +
                    jugador.curiosidad
                );


            }
        );






        contenido.appendChild(bandera);

        contenido.appendChild(nombre);

        contenido.appendChild(pais);

        contenido.appendChild(posicion);

        contenido.appendChild(goles);

        contenido.appendChild(curiosidad);

        contenido.appendChild(boton);





        card.appendChild(imagen);

        card.appendChild(contenido);





        columna.appendChild(card);


        album.appendChild(columna);



    });



}









// ======================================
// FILTRO POR NOMBRE
// ======================================


document
.getElementById("buscarNombre")
.addEventListener(
    "input",
    filtrar
);







// ======================================
// FILTRO POR PAIS
// ======================================


document
.getElementById("buscarPais")
.addEventListener(
    "change",
    filtrar
);






function filtrar(){


    const texto =
    document
    .getElementById("buscarNombre")
    .value
    .toLowerCase();




    const pais =
    document
    .getElementById("buscarPais")
    .value;





    const resultado =
    cromosMundial.filter(
        jugador=>{


            return (

                jugador.nombre
                .toLowerCase()
                .includes(texto)

                &&

                (
                    pais === ""
                    ||
                    jugador.pais === pais
                )

            );


        }
    );




    renderizarAlbum(resultado);


}









// ======================================
// CONTADOR DE DESBLOQUEADOS
// ======================================


function actualizarContador(){


    const desbloqueados =

    cromosMundial.filter(

        jugador=>
        jugador.desbloqueado

    );





    const porcentaje =

    Math.round(

        (
            desbloqueados.length /
            cromosMundial.length

        )
        *
        100

    );





    document
    .getElementById("contador")
    .textContent =

    porcentaje + "%";



}









// ======================================
// TOTAL DE GOLES
// ======================================


function calcularTotalGoles(){



    const jugadoresDestacados =

    cromosMundial.filter(

        jugador=>
        jugador.destacado

    );





    const total =

    jugadoresDestacados.reduce(

        (suma,jugador)=>

        suma +
        jugador.estadisticas.goles,

        0

    );





    return total;


}









// ======================================
// INICIALIZAR ALBUM
// ======================================


cargarDesbloqueados();




document
.getElementById("cantidadJugadores")
.textContent =

cromosMundial.length;





document
.getElementById("totalGoles")
.textContent =

calcularTotalGoles();





renderizarAlbum(
    cromosMundial
);





actualizarContador();