//Declarando arreglos en JS

//Arreglos: Variables especiales que me permite almacenar múltiples datos en una sola variable

/*let numero = [5,8,12,10]
console.log(numero[0])
let nombres = Array("Juan","Sara",5,"Laura")
console.log(nombres[2])
let persona = {
    nombre:"Juan",
    profesion: "Ingeniero",
    edad:33,
    hichaDelMejor:true,
    materiasDictadas:["web2","avanzada","nuevas tecnologias"],
    equiposFavoritos:["Nacional","Liverpool"],
    comida:{
        nombre: "Bandeja paisa",
        precio: 25000
    }
}
console.log(persona.materiasDictadas[0])
console.log(persona.equiposFavoritos[1])
console.log(persona.comida.precio)*/
import {peliculas} from '../helper/baseDatos.js'

import {peliculasProx} from '../helper/baseDatosProx.js'


import {pintarPeliculas} from '../helper/pintarPeliculas.js'


let fila = document.getElementById("fila")

//llamo a la función pintarPeliculas

pintarPeliculas(peliculas)
pintarPeliculas(peliculasProx)


//Detectando selección de una pelicula
let peliculaseleccionada = {}

fila.addEventListener("click", function(evento){
    
    
    peliculaseleccionada.poster=(evento.target.parentElement.querySelector('img').src) //imagen
    peliculaseleccionada.nombre=(evento.target.parentElement.querySelector('h3').textContent) //nombre
    peliculaseleccionada.genero=(evento.target.parentElement.querySelectorAll('h5')[0].textContent) //genero
    peliculaseleccionada.idioma=(evento.target.parentElement.querySelector('p').textContent)//idioma
    peliculaseleccionada.sipnosis=(evento.target.parentElement.querySelector('h2').textContent)//sipnosis
    peliculaseleccionada.clasificacion=(evento.target.parentElement.querySelector('h6').textContent)//clasificacion
    peliculaseleccionada.director=(evento.target.parentElement.querySelectorAll('h5')[1].textContent)//director
    peliculaseleccionada.actores=(evento.target.parentElement.querySelector('h7').textContent)//actores

    console.log(peliculaseleccionada)

    //Llamando a la memoria del navegador, se debe convertir en string para poder guardarlo en la memoria

    localStorage.setItem("peliculaseleccionada",JSON.stringify(peliculaseleccionada))
    
    //Redirecciona a otra vista
    window.location.href="../src/views/ampliarInfoPelicula.html"

})

