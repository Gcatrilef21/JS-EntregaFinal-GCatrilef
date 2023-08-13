const quesos = [{id: 1, img: 'img/gouda.png', nombre: 'Gouda', precio: 5990, origen: 'Países Bajos'},
                {id: 2, img: 'img/edam.png', nombre: 'Edam', precio: 9990, origen: 'Países Bajos'},
                {id: 3, img: 'img/maasdam.png', nombre: 'Maasdam', precio: 10990, origen: 'Países Bajos'},
                {id: 4, img: 'img/brie.png', nombre: 'Brie', precio: 15990, origen: 'Francia'},
                {id: 5, img: 'img/camembert.png', nombre: 'Camembert', precio: 18990, origen: 'Francia'}]
/*                 {id: 6, img: 'img/roquefort.png', nombre: 'Roquefort', precio: 23990, origen: 'Francia'},
                {id: 7, img: 'img/tulum.png', nombre: 'Tulum', precio: 14990, origen: 'Turco'},
                {id: 8, img: 'img/emmental.png', nombre: 'Emmental', precio: 9990, origen: 'Suizo'},
                {id: 9, img: 'img/appenzeller.png', nombre: 'Appenzeller', precio: 15990, origen: 'Suizo'},
                {id: 10, img: 'img/cheddar.png', nombre: 'Cheddar', precio: 4990, origen: 'Ingles'},
                {id: 11, img: 'img/stilton.png', nombre: 'Stilton', precio: 15990, origen: 'Ingles'},
                {id: 12, img: 'img/feta.png', nombre: 'Feta', precio: 5990, origen: 'Griego'},
                {id: 13, img: 'img/parmesano.png', nombre: 'Parmesano', precio: 5990, origen: 'Italiano'},
                {id: 14, img: 'img/mozzarella.png', nombre: 'Mozzrella', precio: 12590, origen: 'Italiano'},
                {id: 15, img: 'img/gorgonzola.png', nombre: 'Gorgonzola', precio: 15990, origen: 'Italiano'},
                {id: 16, img: 'img/mascarpone.png', nombre: 'Mascarpone', precio: 6990, origen: 'Italiano'},
                {id: 17, img: 'img/provolone.png', nombre: 'Provolone', precio: 19990, origen: 'Italiano'},
                {id: 18, img: 'img/cabrales.png', nombre: 'Cabrales', precio: 10990, origen: 'Español'},
                {id: 19, img: 'img/manchego.png', nombre: 'Manchego', precio: 14990, origen: 'Español'},
                {id: 20, img: 'img/mahones.png', nombre: 'Mahonés', precio: 14990, origen: 'Español'}] */

const carrito = []


function guardarProd (){
    if(carrito.length > 0){
        localStorage.setItem('GuardarQuesos', JSON.stringify(carrito))
    }
}
