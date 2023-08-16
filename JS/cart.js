const main = document.querySelector('div.principal#principal')
const tablaProd = document.querySelector('tbody#tablaProductos')
const search = document.querySelector('input.buscar#inputSearch')
const logo = document.querySelector('img.imglogo')
const cantidadProd = document.querySelector('span.itemCarrito')


/*                  FUNCIONES                  */

function mostrarCantidadCarro() {
    cantidadProd.textContent = recuperarCarrito.length
}

recuperarCarrito.length > 0 && mostrarCantidadCarro()

function mostrarListaCarrito({
    id,
    nombre,
    precio
} = queso) {
    const codigo = parseInt(Math.random()*1000)
    return `<tr class='tablabody'>
                <td>${codigo}</td>
                <td>${nombre}</td>
                <td>$${precio}</td>
                <td id="${id}"class="eliminar" >❌</td>
            </tr>`
}


function mostrarSinProductos (){
    return `<div class="card-cart">
                <h3> ⛔ el carrito se encuentra vacio 🧀</h3>
                <a href="./index.html"><button class"btn-error">seguir comprando</button></a>
            </div>`
}

function activarBotonesEliminar(){
    const botonesEliminar = document.querySelectorAll('td.eliminar')
    botonesEliminar.forEach((botonEliminar)=>{
        botonEliminar.addEventListener('click', ()=>{
            let codigo = parseInt(botonEliminar.id)
            let resultado = recuperarCarrito.findIndex((queso) => queso.id === codigo) 
            recuperarCarrito.splice(resultado,1)
            cargarLista()
            guardarProductos ()
        })
    })
}


function cargarLista() {
    tablaProd.innerHTML = ''
    if (recuperarCarrito.length > 0){
        recuperarCarrito.forEach((queso) => tablaProd.innerHTML += mostrarListaCarrito (queso))
        activarBotonesEliminar()
        mostrarCantidadCarro()
    }else{
        tablaProd.innerHTML = mostrarSinProductos ()
    }
}



                /*                  EVENTOS                  */

search.addEventListener('mouseover', () => search.title = 'Buscar')
logo.addEventListener('mouseover',() => logo.title = 'Ir al Inicio') 


/* search.addEventListener('search', () => {
    if (search.value.trim() !== '') {
        const resultado = quesos.filter((queso) => queso.nombre.toLowerCase().includes(search.value.trim().toLowerCase()))
        cargarLista(resultado)
    } else {
        cargarLista(carrito)
    }
})
 */

cargarLista (recuperarCarrito)