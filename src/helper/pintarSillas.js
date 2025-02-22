export function pintarSillas(asientos){

    // Pintar desde js mi sala de cine
    let cinema = document.querySelector('#salacinema')

    //Recorro los asientos y aplicar traversing
    asientos.forEach(function(hilera){

        let fila=document.createElement("div")
        fila.classList.add("row")
    
    
    
        hilera.forEach(function(asiento){
            
    
            let columna = document.createElement("div")
            columna.classList.add("col-3")
    
            let fotoSilla=document.createElement("img")
            fotoSilla.classList.add("img-fluid","w-100")
            fotoSilla.setAttribute("id",asiento.id)
    
            if (asiento.estado==0) {
                fotoSilla.src="../../assets/img/chair.png"
            }else if (asiento.estado==2) {
                fotoSilla.src="../../assets/img/chairRed.png"
            }
            
    
            //padres e hijos
    
            columna.appendChild(fotoSilla)
            fila.appendChild(columna)
        })
        cinema.appendChild(fila)
    })
}