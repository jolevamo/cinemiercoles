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
let peliculas=[
    {
        nombre: "Bestia",
        genero: "Ciencia ficción",
        duracion:220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img1.jpg?alt=media&token=c1deb0b2-5d9a-4b24-a898-529f6da09cc5",
        sinopsis: "A veces el susurro en los arbustos es en realidad un monstruo. Idris Elba (Rápidos y Furiosos: Hobbs & Shaw, El Escuadrón Suicida) protagoniza un nuevo y emocionante thriller sobre un padre y sus dos hijas adolescentes que se ven perseguidos por un enorme león que intenta demostrar que la selva sólo tiene un máximo depredador. Elba interpreta al Dr. Nate Daniels, un marido que acaba de enviudar y que regresa a Sudáfrica, donde conoció a su mujer, en un viaje que llevaba tiempo planeando con sus hijas a una zona de caza controlada por Martin Battles (Sharlto Copley, serie Muñeca Rusa, Maléfica), un viejo amigo de la familia y biólogo especializado en vida salvaje. Pero lo que comienza como un viaje de sanación se convierte en una aterradora lucha por sobrevivir cuando un león, que ha escapado de los cazadores clandestinos sediento de sangre y que ahora ve a todos los humanos como el enemigo, comienza a acecharlos",
        clasificacion:"+18",
        idioma:"EN subtitulado" ,
        director:"Carlos Vargas",
        Actores: "Jaime Perez, Lorena Alzate, Juan Jaramillo"
    },
    {
        nombre: "El Perro Samurai",
        genero: "Animación",
        duracion:180,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img2.jpg?alt=media&token=4afc7684-ec2e-438b-bbda-1082d3786738",
        sinopsis: "Hank, un sabueso con mala suerte, se encuentra en un pueblo lleno de gatos que necesitan un héroe que los defienda de un despiadado villano que quiere borrar a su aldea del mapa. Con la ayuda de un maestro que no quiere entrenarlo, nuestro desvalido héroe debe asumir el papel del samurái del pueblo y unirse a los aldeanos para salvar el día. El Perro Samurái: La leyenda de Kakamucho, próximamente en cines. Con las voces de Juanpa Zurita como Hank, Faisy como Ika Chu y Karla Díaz como Emiko.",
        clasificacion:"General",
        idioma:"EN subtitulado",
        director:"Elisabeth Peréz",
        Actores: "Carolina Giraldo, Joaquin Benjumea, Jeissón Guzmán "
    },
    {
        nombre: "Gemelo Siniestro",
        genero: "Terror",
        duracion:120,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img3.jpg?alt=media&token=a5236163-be48-4824-8b61-29948fa8bd2e",
        sinopsis: "Después de un trágico accidente que cobra la vida de uno de sus gemelos, Rachel (Teresa Palmer) y su esposo Anthony (Steve Cree) se mudan al otro lado del mundo con su niño sobreviviente. Tienen la esperanza de construir una nueva vida. Pero lo que comienza como un tiempo de curación en la campiña escandinava, pronto dará un giro abominable cuando Rachel comience a desentrañar la tortuosa verdad sobre su hijo. Y ella tendrá que enfrentar las fuerzas maliciosas que intentarán apoderarse de él...",
        clasificacion:"+18",
        idioma:"EN subtitulado",
        director: "Fernando Idarraga",
        Actores: "Sandra Acevedo, Camilo Jaimes, Esteban Valencia"
    },
    {
        nombre: "Sana que sana",
        genero: "Comedia",
        duracion:120,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img4.jpg?alt=media&token=20840264-3ba6-4a62-b6a4-e44a37b9f69d",
        sinopsis: "“SANA QUE SANA” Rogelio Pataquiva como “todero” de la Clínica Verde se ve enfrentado a una gran disyuntiva: apoyar a los “súpercalvos”, -niños con cáncer- lo que le significaría aplazar su sueño de conocer el mar o seguir con su vida “normal” y aburrida. La disyuntiva aumenta cuando Juanita, de ocho años y con cáncer, va a ser expulsada de la clínica por falta de pago. Después de reflexionar con empanada y gaseosa, Rogelio decide lo que le dicta su agitado corazón, por la cantidad de ají ingerido: antes que los niños y el cáncer, está su sueño de conocer el mar. Una decisión aprovechada por el gerente de la clínica para junto, a su cómplice contador, pasar todos los recobros por pacientes muertos y los que nunca han atendido. Previendo una auditoría por un error de cálculo, el Gerente y sus cómplices toman una decisión desfachatada: nombran a Rogelio gerente de la clínica. Lo harán si les promete que cerrará el pabellón de niños. De “todero” a gerente. Su administración es desastrosa. Logra no solo acabar el pabellón de niños, sino con toda la clínica que será demolida para la construcción de un gran proyecto de finca raíz. Por su mala administración y cambio en su trato, pierde la amistad de amigos y “parceros” quedando solo, abandonado y triste, además en la cárcel acusado de peculado y falsedad en documento público. Después de reflexionar que por encima de sus propios deseos está el de los niños, y de tener ensoñaciones divinas, escapa de la cárcel para emprender una titánica lucha por aclarar y luchar porque la clínica y en particular, el pabellón de niños vuelva a funcionar. En una gran aventura en la que los súpercalvos se convierten en súper héroes, Rogelio logra enfrentar a los malos haciéndoles pagar su osadía e infamia de robarse la plata de la salud, a la que tienen derecho todos los niños colombianos por igual y sin distingo.",
        clasificacion:"General",
        idioma:"EN subtitulado",
        director: "Julián Tabares",
        Actores: "Fernando Buitrago, Abelardo Garcia, Paola Valenzuela"
    },
    {
        nombre: "Tren bala",
        genero: "Acción",
        duracion:180,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img5.jpg?alt=media&token=af9eca4e-144b-404d-b413-1cb7ea50eed0",
        sinopsis: "En Tren bala, Brad Pitt protagoniza la película en el papel de Ladybug, un asesino con poca suerte determinado a hacer su trabajo en paz después de que más de una de sus asignaciones se le han salido control. Sin embargo, el destino puede tener otros planes mientras que la última misión de Ladybug lo pone en un camino accidentado con adversarios mortales de diversas partes del planeta -todos conectados pero con objetivos en conflicto- en el tren más rápido del mundo…y tiene que descubrir como bajarse. Del director de Deadpool 2, David Leitch, el final del camino es sólo el comienzo de un viaje extremo sin parar a través de un Japón Moderno.",
        clasificacion:"General",
        idioma:"EN subtitulado" ,
        director: "Jonathan Hernandez",
        Actores: "Juan Benjumea, Carlos Perez, Margarita Moncada"
    },
    {
        nombre: "Super Mascotas",
        genero: "Animación",
        duracion:180,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img6.jpg?alt=media&token=724e6876-f102-416c-80cf-147736c95c0c",
        sinopsis: "Cuando la Liga de la Justicia es capturada por Lex Luthor, el perro de Superman, Krypto, forma un equipo de mascotas de refugio a las que se les otorgan superpoderes: Un sabueso llamado Ace, que se vuelve superfuerte, un cerdo llamado PB, que puede crecer hasta alcanzar un tamaño gigante, una tortuga llamada Merton, que se vuelve superrápida, y una ardilla llamada Chip, adquiere poderes eléctricos.",
        clasificacion:"General",
        idioma:"EN subtitulado" ,
        director: "Josue Perez",
        Actores: "Martín Grajales, Fernando Cadavid, Miriam Henandez"
    },
    {
        nombre: "El Leopardo de las nieves",
        genero: "Animación",
        duracion:180,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img7.jpg?alt=media&token=0e2fac16-4cac-43f4-ad8a-8a82784d19ff",
        sinopsis: "En el corazón del altiplano tibetano, el fotógrafo Vincent Munier guía al escritor Sylvain Tesson en su búsqueda del leopardo de las nieves. Le introduce en el delicado arte del acecho, en la lectura de las huellas y en tratar de tener la paciencia necesaria para contemplar a los animales. Al viajar a las cumbres habitadas por presencias invisibles, los dos hombres tejen un diálogo sobre nuestro lugar entre los seres vivos y celebran la belleza del mundo.",
        clasificacion:"General",
        idioma:"EN subtitulado",
        director: "Agustin Casimiro",
        Actores: "Valentín de la Sierra, Carlos Tangarife, Martín Jaramillo"
    },
    {
    nombre: "Hierve",
    genero: "Drama",
    duracion:180,
    poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img8.jpg?alt=media&token=1e3c78d1-c5da-432d-8d1c-c233a8f74e1f",
    sinopsis: "En la noche más concurrida del año en uno de los restaurantes de moda en Londres, el carismático jefe de cocina Andy Jones trata de no derrumbarse ante una crisis personal y profesional que podría destruir todo aquello por lo que ha trabajado. La inesperada visita de un inspector de sanidad y seguridad alimentaria aumenta la presión sobre el personal mientras no dejan de llegar más y más clientes. Andy abronca y engatusa a su equipo indistintamente, haciendo todo lo posible para disipar las tensiones entre la gerencia y los trabajadores, mientras atiende a las ridículas demandas de sus clientes.",
    clasificacion:"General",
    idioma:"EN subtitulado",
    director: "Benito Jaramillo",
    Actores: "Camilo Valencia, Teresa Vanegas, Edwin Rivas"
    },
    {
    nombre: "Vértigo",
    genero: "Suspenso",
    duracion:180,
    poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img9.jpg?alt=media&token=8a3ef366-7eb4-44a1-b1ee-4dc1d2ca6e6c",
    sinopsis: "Para las mejores amigas Becky (Grace Caroline Currey) y Hunter (Virginia Gardner), la vida consiste en conquistar los miedos y superar los límites. Pero después de escalar 600 metros hasta la cima de una remota torre de radio abandonada, se encuentran atrapadas e incomunicadas. Ahora, las habilidades de escalada de Becky y Hunter serán puestas a prueba mientras luchan desesperadamente por sobrevivir. Thriller cargado de adrenalina, coprotagonizado por Jeffrey Dean Morgan (The Walking Dead / Rampage / Watchmen). De los mismos productores de Terror a 47 metros y dirigida por Scott Mann (Final Score).",
    clasificacion:"General",
    idioma:"EN subtitulado",
    director: "Joaquin Valensuela",
    Actores:"Johana Fernandez, Camila Buitres, Adamaris Manotas"
    },
    {
    nombre: "Barbaro",
    genero: "Suspenso",
    duracion:180,
    poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img10.png?alt=media&token=ba10eb1e-3b04-4b3f-a87d-e346b0554adc",
    sinopsis: "Una joven que viaja a Detroit para una entrevista de trabajo, reserva alojamiento en la ciudad. Pero cuando llega tarde en la noche, descubre que por error la casa fue reservada a dos personas simultáneamente y que ya hay un extraño alojándose allí. En contra de lo que le aconseja su propio sentido común, decide pasar la noche, y pronto descubre que hay mucho más que temer que la presencia de un huésped inesperado. De 20th Century Studios y New Regency, BÁRBARO está protagonizada por Georgina Campbell, Bill Skasgård, Justin Long, Matthew Patrick Davis, Richard Brake, Kurt Braunohle y Jaymes Butler. La película fué escrita y dirigida por Zach Cregger. Lleva la firma de Arnon Milchan (Bohemian Rapsody, El Renacido, Birdman y Perdida) y Roy Lee, productor de It y El Aro.",
    clasificacion:"General",
    idioma:"EN subtitulado",
    director: "Camilo Jaramillo",
    Actores: "Paola Marían, Alejandra Muñoz, Sara Vasquez"
    }
]

let fila = document.getElementById("fila")
//Recorriendo una BD en JS

peliculas.forEach(function(pelicula){
    console.log(pelicula)
    console.log(pelicula.nombre)    
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)
    console.log(pelicula.director)
    console.log(pelicula.Actores)

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

    let genero = document.createElement("h4")
    genero.classList.add("text-start")
    genero.textContent = "Genero: "+pelicula.genero

    //6. Creamos el idioma de cada pelicula

    let idioma = document.createElement("h5")
    idioma.classList.add("fw-bold")
    idioma.textContent = pelicula.idioma

    //7. Se crea sipnosis para cada pelicula

    let sipnosis = document.createElement("p")
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

    let actores = document.createElement("h6")
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

//Detectando selección de una pelicula

fila.addEventListener("click", function(){
    alert("Esta seleccionado una pelicula")
})
let peliculasProx=[
    {
        nombre: "Lo Que Arde",
        genero: "Drama",
        duracion:180,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img1_Pr%C3%B3xima_Cartelera.jpg?alt=media&token=29e8e951-93d6-4f83-97e2-c8cc3f4bc46b",
        sinopsis:"La historia se desarrolla en la sierra de Ancares lucense y cuenta la historia de Amador Coro, un vecino pirómano que sale de la prisión y regresa a casa, con su madre Benedicta, su perra Luna y sus vacas. Sus vidas normalmente transcurren en medio de la naturaleza de su pueblo hasta que un día un incendio arrasa la región.",
        clasificacion:"+18",
        idioma:"EN subtitulado" ,
        director:"Joaquín Morales",
        Actores: "Jaime Perez, Lorena Alzate, David Loaiza"
    },
    {
        nombre: "E30 Noches Con Mi Ex",
        genero: "Comedia",
        duracion:95,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img2_Pr%C3%B3xima_Cartelera.jpg?alt=media&token=40d33887-ca96-4c65-97cc-544155d3736b",
        sinopsis: "El Turbo (50) y La Loba (41) están separados y no se ven hace tres años. A pedido de Ema (19), la hija de ambos, El Turbo acepta recibir en su casa a su ex mujer para que pase los 30 días de transición entre una larga internación psiquiátrica y su reinserción en la sociedad.",
        clasificacion:"General",
        idioma:"EN subtitulado",
        director:"Marbel Ramirez",
        Actores: "Camilo Tangarife, Joaquin Benjumea, Jeissón Guzmán "
    },
    {
        nombre: "La Chica Salvaje",
        genero: "Drama",
        duracion:125,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img3_Pr%C3%B3xima_Cartelera.jpg?alt=media&token=5b93851b-c466-4d56-bbdb-52a823350ce6",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la chica del pantano persiguieron a Barkley Cove, aislando a la aguda y resistente Kya de su comunidad. Atraída por dos jóvenes del pueblo, Kya se abre a un mundo nuevo y sorprendente; pero cuando uno de ellos aparece muerto, la comunidad la considera inmediatamente la principal sospechosa. A medida que el caso se desarrolla, el veredicto sobre lo que realmente sucedió se vuelve cada vez más confuso, amenazando con revelar los muchos secretos que se esconden en el pantano.",
        clasificacion:"+18",
        idioma:"EN subtitulado",
        director: "Fernando Tangarife",
        Actores: "Sandra Acevedo, Cristian Marrugo, Esteban Valencia"
    },
    {
        nombre: "El Árbol Rojo",
        genero: "Aventura",
        duracion:94,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img4_Pr%C3%B3xima_Cartelera.jpg?alt=media&token=3cfc0d83-7353-40c8-ac94-be8014efe973",
        sinopsis: "La vida tranquila y bastante rutinaria de Eliécer se vuelca patas arriba cuando, justo después de la muerte de su padre, Esperanza, su media hermana de ocho años, es llevada hasta la puerta de su casa. Reacio a que su vida sea interrumpida, Eliécer empaca su ropa y emprende un viaje a la capital en busca de la madre de la niña. A ellos se une Toño, un lanchero que sueña con convertirse en campeón de boxeo en la gran ciudad. Durante el largo camino, estas tres almas solitarias se enfrentan mucho más que al camino.",
        clasificacion:"General",
        idioma:"EN subtitulado",
        director: "Julián Giraldo",
        Actores: "Fernando Buitrago, Abelardo Garcia, Paola Jaramillo"
    },
    {
        nombre: "Apocalípsis Zombie",
        genero: "Suspenso",
        duracion:90,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinejlvm.appspot.com/o/Img5_Pr%C3%B3xima_Cartelera.jpg?alt=media&token=c9caa1b0-d4af-4e06-9738-0ef5ab86e444",
        sinopsis: "secuela de la cinta de culto WYRMWOOD: ROAD TO DEAD, se lleva a cabo en un desierto australiano infestado de zombies donde el soldado Rhys quien ha dedicado su vida a rastrear y capturar supervivientes para el Cirujano General, se une a otros científicos locos, soldados malvados y héroes con la esperanza de encontrar una cura para el virus que amenaza a toda la humanidad.",
        clasificacion:"+15",
        idioma:"EN subtitulado" ,
        director: "Jonathan Valencia",
        Actores: "Juan Benjumea, Carlos Buitrago, Margarita Moncada"
    }
]
peliculasProx.forEach(function(pelicula){
    console.log(pelicula)
    console.log(pelicula.nombre)    
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)
    console.log(pelicula.director)
    console.log(pelicula.Actores)

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

    let genero = document.createElement("h4")
    genero.classList.add("text-start")
    genero.textContent = "Genero: "+pelicula.genero

    //6. Creamos el idioma de cada pelicula

    let idioma = document.createElement("h5")
    idioma.classList.add("fw-bold")
    idioma.textContent = pelicula.idioma

    //7. Se crea sipnosis para cada pelicula

    let sipnosis = document.createElement("p")
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

    let actores = document.createElement("h6")
    actores.classList.add("text-start","fw-bold")
    actores.textContent = "Actores: "+pelicula.Actores

    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(sipnosis)
    tarjeta.appendChild(clasificacion)
    tarjeta.appendChild(director)
    tarjeta.appendChild(actores)
    columna.appendChild(tarjeta)    
    fila2.appendChild(columna)

})