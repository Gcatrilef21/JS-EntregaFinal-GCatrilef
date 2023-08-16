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
                <td id="${id}"><button class="delete">❌</button></td>
            </tr>`
}

function mostrarSinProductos (){
    return `<div class="card-cart">
                <h3> ⛔ el carrito se encuentra vacio 🧀</h3>
                <a href="./index.html"><button class"btn-error">seguir comprando</button></a>
            </div>`
}

function activarBotones(){
    const botonesDelete = document.querySelectorAll('button.delete')
    console.log(botonesDelete)
    botonesDelete.forEach((botonDelete)=>{
        botonDelete.addEventListener('click', ()=>{
            let codigo = parseInt(botonDelete)
            let indice = carrito.findIndex((queso)=> queso.id === codigo)

        })
    })
}

function cargarLista() {
    tablaProd.innerHTML = ''
    recuperarCarrito.length > 0 ? recuperarCarrito.forEach((queso) => tablaProd.innerHTML += mostrarListaCarrito (queso))
                        : tablaProd.innerHTML = mostrarSinProductos ()
}
cargarLista()



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