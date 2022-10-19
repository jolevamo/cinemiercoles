export function seleccionSillas(asientos){
    let cinema = document.querySelector('#salacinema')

    cinema.addEventListener("click",function(evento){
        if (evento.target.tagName=="IMG"){
            let idAsientoSeleccionado = evento.target.id
            let factura = document.querySelector('.factura')
            
            if (factura.classList.contains('factura--active')){
                evento.preventDefault()
            }else{
                asientos.forEach(function(hilera){
                    hilera.forEach(function(asiento){
                        if (asiento.id==idAsientoSeleccionado) {
                            
                            //encontre el asiento dónde el usuario se quiere sentar
                            if (asiento.estado==0) {
                                asiento.estado=1
                                evento.target.src="../../assets/img/chairGreen.png"
                            }else if(asiento.estado==1){
                                asiento.estado=0
                                evento.target.src="../../assets/img/chair.png"
                            }
                        }
        
                    })
                })
            }
            
        }
    })
}


