/* *************************************************************** */
/* MODULO: index.js                                                */
/* DESCRIPCION: Módulo para la página index.html                   */
/* *************************************************************** */
import * as moduloProducto from "./producto.js";
import * as moduloSlider from "./slider.js";

// Código a ejecutar al importar el módulo
// Cuando termine de cargarse el DOM, se ejecuta la función
document.addEventListener("DOMContentLoaded", mostrarProductosDestacados);
// Agrego el evento para ajustar el slider de destacados cuando cambia
// de tamaño la pantalla
window.addEventListener("resize", ajustarSlider, true);

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
function mostrarProductosDestacados() {
    // Obtengo los productos, y paso como parámetro la
    // función que va a actualizar el slide
    moduloProducto.obtenerProductos(agregarProductosDestacados);
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
function agregarProductosDestacados(productos) {

    // Obtengo el contenedor que va a contener los productos
    let contenedor_productos = document.querySelector(".contenedor_slider_destacados");

    // Obtengo el contenededor del mensaje
    let contenedor_mensaje = document.querySelector(".contenedor_mensaje");

    // Obtengo el mensaje
    let mensaje = document.querySelector(".mensaje");

    if (productos.length>0) {

        // Muestro el mensaje
        mensaje.textContent = "Buscando productos destacados ...";

        // Creo un fragmento de documento para guardar los productos
        let fragmento = document.createDocumentFragment();

        // Obtengo la sección donde van a estar los productos
        let lista_productos = document.querySelector(".slider_destacados");

        // Recorro los productos destacados
        productos.forEach(producto => {
            // Veo si es un producto destacado
            if (producto.destacado) {
                // Creo el producto
                let productoHTML = moduloProducto.armarProductoDestacado(producto);
                fragmento.appendChild(productoHTML);
            }
        });

        // Oculto el mensaje
        contenedor_mensaje.className = "ocultar";

        // Agrego los productos
        lista_productos.appendChild(fragmento);

        // Ajusto el slider
        ajustarSlider();
    }
    else
    {
        // Muestro los productos
        contenedor_productos.className = "ocultar";

        // Muestro el mensaje
        mensaje.textContent = "No se encontraron productos destacados";
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