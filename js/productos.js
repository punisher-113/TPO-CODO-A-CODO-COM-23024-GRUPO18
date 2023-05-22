/* *************************************************************** */
/* MODULO: productos.js                                            */
/* DESCRIPCION: Módulo para la página productos.html               */
/* *************************************************************** */
import * as moduloProducto from "./producto.js";
import * as moduloParametros from "./parametros.js"

// Código a ejecutar al importar el módulo
// Cuando termine de cargarse el DOM, se ejecuta la función
document.addEventListener("DOMContentLoaded", mostrarProductos);

// ------------------------------------------------------------- //
// FUNCIONES PARA PROCESAR PRODUCTOS                             //
// DESCRIPCION: Procesa los productos                            //
// ------------------------------------------------------------- //
// ===================================================== //
// Función: mostrarProductosDestacados                   //
// Descripción: Muestra en un slide los productos        //
//              marcados como destacados                 //
// Parámetros:                                           //
//      nada                                             //
// Retorno:                                              //
//      nada                                             //
// ===================================================== //
function mostrarProductos() {
    // Obtengo los productos, y paso como parámetro la
    // función que va a actualizar el slide
    moduloProducto.obtenerProductos(agregarProductos);
}

// ===================================================== //
// Función: agregarProductosDestacados                   //
// Descripción: Muestra los productos destacados en el   //
//              slide                                    //
// Parámetros:                                           //
//      productos = listado de productos                 //
// Retorno:                                              //
//      nada                                             //
// ===================================================== //
function agregarProductos(productos) {

    // Veo si tengo el parámetro 'id' para buscar por id
    let id = moduloParametros.obtenerParametro("id");

    // Veo si tengo algún parámetro
    let buscar = moduloParametros.obtenerParametro('buscar');

    // Obtengo el div que va a contener los productos
    let contenedor_productos = document.querySelector(".contenedor_tarjetas");

    // Obtengo el div del mensaje
    let contenedor_mensaje = document.querySelector(".contenedor_mensaje");

    // Obtengo el mensaje
    let mensaje = document.querySelector(".mensaje");

    // Veo si tengo que buscar por id
    if (id !== "") {
        // Busco el producto
        let producto = moduloProducto.buscarProductoID(productos, id);
        
        // Inicializo la lista de productos
        productos = new Array();
        
        // Si encontré el producto, lo agrego
        if (producto !== null) {
            productos.push(producto);
        }
    } else {
        // Filtro los productos si existe alguna cadena a buscar
        productos = moduloProducto.buscarProductos(productos, buscar);
    }

    if (productos.length>0) {

        // Muestro el mensaje
        mensaje.textContent = "Buscando productos destacados ...";

        // Creo un fragmento de documento para guardar los productos
        let fragmento = document.createDocumentFragment();

        // Recorro los productos
        for (let i = 0; i<productos.length; i++) {
            let productoHTML = moduloProducto.armarProducto(productos[i], i);
            fragmento.appendChild(productoHTML);
        }

        // Oculto el mensaje
        contenedor_mensaje.className = "ocultar";
        
        // Agrego los productos
        contenedor_productos.appendChild(fragmento);
    }
    else
    {
        // Muestro los productos
        contenedor_productos.className = "ocultar";

        // Muestro el mensaje
        mensaje.textContent = "No se encontraron productos";
    }
}

// ===================================================== //
// Función: ajustarSlider                                //
// Descripción: Ajusta el slider de destacados           //
// Parámetros:                                           //
//      nada                                             //
// Retorno:                                              //
//      nada                                             //
// ===================================================== //
function ajustarSlider() {
    // Ajusto el tamaño del Slide de destacados, y lo 
    // configuro para moverse cada 7 segundos
    moduloSlider.ajustarSliderDestacados(7);
}