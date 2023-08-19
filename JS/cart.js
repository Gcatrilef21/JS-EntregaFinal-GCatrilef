const main = document.querySelector('div.main-cart#main-cart')
const msgProduct = document.querySelector('section.card-cart')
const tablahead = document.querySelector('thead#tablaNombres')
const tablaProd = document.querySelector('tbody#tablaProductos')
const logo = document.querySelector('img.imglogo')
const cantidadProd = document.querySelector('span.itemCarrito')
const btnComprar = document.querySelector('button.btn-compra')
const totalCompra = document.querySelector('span#valorTotal')


/*                  FUNCIONES                  */


function mostrarListaCarrito({
    id,
    nombre,
    precio
} = queso) {
    const codigo = parseInt(Math.random() * 1000)
    return `<tr class='tablabody'>
                <td>${codigo}</td>
                <td>${nombre}</td>
                <td>$${precio}</td>
                <td id="${id}"class="eliminar" >❌</td>
            </tr>`
}


function mostrarSinProductos() {
    return `<div class="card-cart">
                <h3> ⛔ el carrito se encuentra vacio 🧀</h3>
                <a href="./index.html"><button class="btn-vacio">seguir comprando 🛒</button></a>
            </div>`
}


function activarBotonesEliminar(){
    const botonesEliminar = document.querySelectorAll('td.eliminar')
    botonesEliminar.forEach((botonEliminar)=>{
        botonEliminar.addEventListener('click', ()=>{
            let codigo = parseInt(botonEliminar.id)
            let resultado = recuperarCarrito.findIndex((queso) => queso.id === codigo) 
            recuperarCarrito.splice(resultado,1)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se ha eliminado correctamente',
                showConfirmButton: false,
                timer: 95000,
                showClass:{
                    popup:'animate__animated animate__swing'
                },
                
            })
            cargarLista()
            guardarProductos ()
        })
    })
}


function cargarLista() {
    tablaProd.innerHTML = ''
    if (recuperarCarrito.length > 0) {
        recuperarCarrito.forEach((queso) => tablaProd.innerHTML += mostrarListaCarrito(queso))
        activarBotonesEliminar()
        sumarTotal()
    } else {
        msgProduct.innerHTML = mostrarSinProductos()
    }
}

function sumarTotal() {
    let suma = recuperarCarrito.reduce((acc, queso) => acc + queso.precio, 0);
    totalCompra.textContent = suma;
}


/*                  EVENTOS                  */


logo.addEventListener('mouseover', () => logo.title = 'Ir al Inicio')

btnComprar.addEventListener('click', () => {
    Swal.fire({
        title: '¿Deseas Finalizar la compra?',
        icon: 'info',
        showDenyButton: true,
        confirmButtonText: 'CONFIRMAR',
        denyButtonText: 'CANCELAR'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('GuardarQuesos')
            recuperarCarrito.length = 0
            Swal.fire('Gracias por preferirnos!', '', 'success')
            msgProduct.innerHTML = mostrarSinProductos()
        }
    })
})

cargarLista(recuperarCarrito)