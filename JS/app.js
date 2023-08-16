/*                      Variables                      */
const search = document.querySelector('input.buscar#inputSearch')
const cantidadProd = document.querySelector('span.itemCarrito')
const main = document.querySelector('div.principal#principal')
const logo = document.querySelector('img.imglogo')
const verCarrito = document.querySelector('i.bi.bi-bag-fill.logoCart')
//const URL = './JS/quesos.json'


/*                      Funciones                      */

function mostrarCantidadCarro() {
    cantidadProd.textContent = recuperarCarrito.length
}

recuperarCarrito.length > 0 && mostrarCantidadCarro()

function mostrarProductos({
    id,
    img,
    nombre,
    precio,
    origen
} = queso) {
    return `  <div class="card">
                <img class="imgProduct" src="${img}" alt="quesito">
                <div class="producto">
                    <p>${nombre}</p>
                </div>
                <div class="precio">
                    <p>$${precio}</p>
                </div>
                <div class="origen">
                    <p>${origen}</p>
                </div>
                <div>
                    <button class="boton" id="${id}">agregar</button>
                </div>
            </div>`
}


function cargarProductos(array) {
    main.innerHTML = ''
    if (array.length > 0) {
        array.forEach((queso) => {
            main.innerHTML += mostrarProductos(queso)
            activarClickBotones()
            mostrarCantidadCarro()
        })
    } else {
        mostrarMensajes('No hay productos', 'center', 'linear-gradient(to bottom, #F2C12E, #BC292D)')
    }
}

function activarClickBotones() {
    const botones = document.querySelectorAll('button.boton')
    botones.forEach((boton) => {
        boton.addEventListener('click', () => {
            let addProd = quesos.find((queso) => queso.id === parseInt((boton.id)))
            recuperarCarrito.push(addProd)
            localStorage.setItem('GuardarQuesos', JSON.stringify(recuperarCarrito))
            mostrarCantidadCarro()
            mostrarMensajes("Añadido Correctamente", 'right', 'linear-gradient(to right, #F2C12E, #F08520F3)')
        })
    })
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


/* function obtenerQuesos (){
    fetch(URL)
    .then((response) => response.json())
    .then((data) => cargarProductos.push(...data))
    .then((data) => console.table(data))
    .catch((error) => main.innerHTML = mostrarProductos())
} */


/*                      EVENTOS                      */

logo.addEventListener('mouseover', () => logo.title = 'Ir al inicio')
verCarrito.addEventListener('mouseover', () => verCarrito.title = 'Ver Carrito')



search.addEventListener('search', () => {
    if (search.value.trim() !== '') {
        const resultado = quesos.filter((queso) => queso.nombre.toLowerCase().includes(search.value.trim().toLowerCase()))
        cargarProductos(resultado)
    } else {
        cargarProductos(quesos)
    }
})


cargarProductos(quesos)