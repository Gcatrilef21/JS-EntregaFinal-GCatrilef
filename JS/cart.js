const main = document.querySelector('div.principal#principal')
const tablaProd = document.querySelector('tbody#tablaProductos')
const search = document.querySelector('input.buscar#inputSearch')
const logo = document.querySelector('img.imglogo')




/*                  FUNCIONES                  */

function crearLista({
    id,
    nombre,
    precio
} = queso) {
    return `<tr class='tablabody'>
                <th>${id}</th>
                <td>${nombre}</td>
                <td>$${precio}</td>
                <td><button id="${id}" class=""></button></td>
            </tr>`
}


function mostrarMensajes(msg, position ,bgcolor) {
    Toastify({
        text: msg,
        duration: 4000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bgcolor,
        }
    }).showToast();
}

function cargarLista(array) {
    tablaProd.innerHTML = ''
    if (array.length > 0) {
        array.forEach((queso) => {
            tablaProd.innerHTML += crearLista(queso)
        })
    } else{
        mostrarMensajes('El Carrito esta vacio', 'left', 'linear-gradient(to bottom, #F2C12E, #BC292D)')
    }
}




                /*                  EVENTOS                  */

search.addEventListener('mouseover', () => search.title = 'Buscar')
logo.addEventListener('mouseover',() => logo.title = 'Ir al Inicio') 

search.addEventListener('search', () => {
    if (search.value.trim() !== '') {
        const resultado = quesos.filter((queso) => queso.nombre.toLowerCase().includes(search.value.trim().toLowerCase()))
        cargarLista(resultado)
    } else {
        cargarLista(carrito)
    }
})


cargarLista (carrito)