//Preguntando por un dato que esta almacenado en memoría y se convierte en tipo original 

let datosPeliculaSeleccionada=JSON.parse(localStorage.getItem("peliculaseleccionada"))

console.log(datosPeliculaSeleccionada)

let poster = datosPeliculaSeleccionada.poster
let nombre = datosPeliculaSeleccionada.nombre
let genero = datosPeliculaSeleccionada.genero
let idioma = datosPeliculaSeleccionada.idioma
let sipnosis = datosPeliculaSeleccionada.sipnosis
let clasificacion = datosPeliculaSeleccionada.clasificacion
let director = datosPeliculaSeleccionada.director
let actores = datosPeliculaSeleccionada.actores

//Cargando datos

let foto = document.getElementById('foto')
foto.src=poster

let titulo = document.getElementById('titulo')
titulo.textContent = nombre

let generoPelicula = document.getElementById('genero')
generoPelicula.textContent=genero

let idiomaPelicula = document.getElementById('idioma')
idiomaPelicula.textContent=idioma

let sinopsisPelicula = document.getElementById('sinopsis')
sinopsisPelicula.textContent=sipnosis

let directorPelicula = document.getElementById('director')
directorPelicula.textContent = director

let actoresPelicula = document.getElementById('actores')
actoresPelicula.textContent=actores







