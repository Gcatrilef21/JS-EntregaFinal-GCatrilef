const quesos = [{id: 2, img: 'img/edam.png', nombre: 'Edam', precio: 9990, origen: 'Países Bajos'},
{id: 3, img: 'img/maasdam.png', nombre: 'Maasdam', precio: 10990, origen: 'Países Bajos'},
{id: 4, img: 'img/brie.png', nombre: 'Brie', precio: 15990, origen: 'Francia'},
{id: 5, img: 'img/camembert.png', nombre: 'Camembert', precio: 18990, origen: 'Francia'}] 

const carrito = []


function guardarProd (){
    if(carrito.length > 0){
        localStorage.setItem('GuardarQuesos', JSON.stringify(carrito))
    }
}

/* function recuperarCarrito(){
    return JSON.parse(localStorage.getItem('GuardarQuesos')) || []
} */

const recuperarCarrito = JSON.parse(localStorage.getItem('GuardarQuesos')) || []