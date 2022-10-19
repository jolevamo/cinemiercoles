export function validarSillas(asientos){
    //validación asientos

    let facturar = document.getElementById("boton")

    facturar.addEventListener('click', function(){
        let contador = 0,
            sillaId = []

        //mostrar factura

        let factura = document.querySelector('.factura')
        factura.classList.add('factura--active')

        factura.style.visibility = 'visible'

        let tituloFac = document.createElement('h3'),
            fechaFac = document.createElement('p'),
            datosFac = document.createElement('p'),
            cantidadFac = document.createElement('p'),
            reservaFac = document.createElement('p'),
            sillaFac = document.createElement('p'),
            idSillas = document.createElement('p'),
            subtotalFac = document.createElement('p'),
            ivaFac = document.createElement('p'),
            totalFac = document.createElement('p')

        tituloFac .classList.add('tituloFac')
        fechaFac .classList.add('fechaFac')
        datosFac .classList.add('datosFac')
        cantidadFac .classList.add('cantidadFac')
        reservaFac .classList.add('reservaFac')
        sillaFac .classList.add('sillaFac')
        idSillas .classList.add('idSillas')
        subtotalFac .classList.add('subtotalFac')
        ivaFac .classList.add('ivaFac')
        totalFac .classList.add('totalFac')

        let date = new Date().toLocaleString()

        console.log(asientos)
        asientos.forEach(function(hilera){
            hilera.forEach(function(asiento){
                if(asiento.estado == 1){
                    contador = contador + 1
                    sillaId.push(asiento.id)
                    asiento.estado = 2

                    if(asiento.estado == 2){
                        asiento.estado == 2
                    }

                    console.log(asientos);
                    //llevar asientos a localstorage

                    localStorage.setItem('asientos', JSON.stringify(asientos))
                }
            })

        })

        let valorSilla = 15000
        tituloFac.textContent = 'FACTURA DE VENTA'
        fechaFac.textContent = date
        datosFac.innerHTML = '<span>Qnt</span><span>Reserva</span><span>Vr Uni</span>'
        cantidadFac.textContent = contador
        reservaFac.textContent = 'Silla(s)'
        sillaFac.textContent = '$' + valorSilla
        idSillas.textContent = sillaId
        subtotalFac.innerHTML = '<span class="subtotal">Subtotal:</span> $' + (valorSilla * contador)
        ivaFac.innerHTML = '<span class="subtotal">IVA:</span> $' + (valorSilla * contador) * 0.19
        totalFac.innerHTML = '<span class="total">Total:</span> $' + (valorSilla * contador) * 1.19

        factura.appendChild(tituloFac)
        factura.appendChild(fechaFac)
        factura.appendChild(datosFac)
        factura.appendChild(cantidadFac)
        factura.appendChild(reservaFac)
        factura.appendChild(sillaFac)
        factura.appendChild(idSillas)
        factura.appendChild(subtotalFac)
        factura.appendChild(ivaFac)
        factura.appendChild(totalFac)
    
    })
}
