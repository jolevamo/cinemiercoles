//CONSUMIR DATOS DEL API DE SPOTIFY

//1. URI=URL+EP
const URI = "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=US"

//2. TOKEN
const TOKEN = "Bearer BQCpaMAD2RXtfiiasQam9MfViDyAcnahLquj1G6vJbyYjinhoxImxEvfudIdlo6G9N2TwD5wohTfREPKwqhOWtmUFH82ULJt8Pm-qG43lJeb2bvO2tl_6iiIP1pPFC-E4P5P5m63_iZBP3S-gR80ODSy00Ad8JPyIji0GrEGKiKhRdC7Xkmx6gQZcLz8Q7qcjWc"

//3. PETICIÓN:

const PETICION = {
    methodo:"GET",
    headers:{Authorization:TOKEN}
    
}

let fila = document.getElementById("fila")

//4. USAMOS LA PROMESA FETCH PARA CONSUMIR EL API

//Primero: para dónde vás y dos: petición
fetch(URI,PETICION)
.then(function(respuesta){
    //Garantizar que la respuesta este en el formato
    return respuesta.json()
})
.then(function(respuesta){
    let canciones = respuesta.tracks
    canciones.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)

        let columna=document.createElement("div")
        columna.classList.add("col-4")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card","h-100")

        let audio = document.createElement("audio")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let nombre = document.createElement("h1")
        nombre.classList.add("text-center")
        nombre.textContent=cancion.name

        tarjeta.appendChild(nombre)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

     
    })
})
.catch(function(error){
    console.log(error)
})
