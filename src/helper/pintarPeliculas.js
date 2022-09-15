export function pintarPeliculas(peliculas){
    let fila = document.getElementById("fila")
    let fila2 = document.getElementById("fila")

    peliculas.forEach(function(pelicula){
          
        //1. Creamos una columna para cada pelicula
    
        let columna = document.createElement("div")
        columna.classList.add("col")
    
        //2. Creamos una tarjeta para cada pelicula
    
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card","h-")
    
        //3. Creamos una imagen para cada pelicula
    
        let poster = document.createElement("img")
        poster.classList.add("card-img-top")
        poster.src=pelicula.poster
    
    
        //4. Creamos el nombre de la pelicula
        let nombre = document.createElement("h3")
        nombre.classList.add("card-title")
        nombre.textContent = pelicula.nombre
    
        //5. creamos el genero para cada pelicula
    
        let genero = document.createElement("h5")
        genero.classList.add("text-start")
        genero.textContent = "Genero: "+pelicula.genero
    
        //6. Creamos el idioma de cada pelicula
    
        let idioma = document.createElement("p")
        idioma.classList.add("fw-bold")
        idioma.textContent = pelicula.idioma
    
        //7. Se crea sipnosis para cada pelicula
    
        let sipnosis = document.createElement("h2")
        sipnosis.classList.add("card-text","d-none")
        sipnosis.textContent = pelicula.sinopsis
    
        //8. Se crea clasificación para cada pelicula:
    
        let clasificacion = document.createElement("h6")
        clasificacion.classList.add("text-start","fw-bold")
        clasificacion.textContent = "Clasificación: "+pelicula.clasificacion
    
        //9. Creo un director para cada pelicula:
    
        let director = document.createElement("h5")
        director.classList.add("text-start","fw-bold")
        director.textContent = "Director: "+pelicula.director
    
        //10. Creo actores para cada pelicula:
    
        let actores = document.createElement("h7")
        actores.classList.add("text-start","fw-bold")
        actores.textContent = "Actores: "+pelicula.Actores
    
        //Traversing: Crear etiquetas de HTML desde JS
    
        /*let poster = document.createElement("img")
        poster.src=pelicula.poster
    
        let nombre = document.createElement("h5")
        nombre.textContent = pelicula.nombre*/
    
        //Padres e hijos
    
    
        tarjeta.appendChild(poster)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(genero)
        tarjeta.appendChild(idioma)
        tarjeta.appendChild(sipnosis)
        tarjeta.appendChild(clasificacion)
        tarjeta.appendChild(director)
        tarjeta.appendChild(actores)
        columna.appendChild(tarjeta)    
        fila.appendChild(columna)
    
    
    })
}