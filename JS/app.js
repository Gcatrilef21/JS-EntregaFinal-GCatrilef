/*                      Variables                      */
const buscar = document.querySelector('input.buscar#inputSearch')
const cantidadProd = document.querySelector('span.itemCarrito')
const main = document.querySelector('div.principal#principal')


/*                      Funciones                      */


/* function unidadCarro(){
    cantidadProd.innerText = carrito.length
} */

function mostrarProductos( {id,img,nombre,precio,origen} = queso) {
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


function cargarProductos(array){
    main.innerHTML = ''
    if(array.length > 0 ){
        array.forEach((queso) => {
            main.innerHTML += mostrarProductos(queso)
            
        })
    }else{
        alert ('No hay productos')
    }
}

function activarClickBotones (){
    const botones = document.querySelectorAll('button.boton')
    botones.forEach((boton) =>{
        boton.addEventListener('click' , ()=>{
            const addProd = quesos.find((queso) => queso.id === parseInt((boton.id)))
            console.log(addProd)
        })
    })
}


cargarProductos(quesos)













