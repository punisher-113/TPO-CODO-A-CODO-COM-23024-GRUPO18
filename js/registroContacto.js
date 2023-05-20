/* *************************************************************** */
/* MODULO: registroContacto.js                                     */
/* DESCRIPCION: Funciones para el registro de contactos            */
/* *************************************************************** */
import * as moduloParametros from "./parametros.js";

// Código a ejecutar al importar el módulo
// Cuando termine de cargarse el DOM, se ejecuta la función
document.addEventListener("DOMContentLoaded", procesarRegistroContacto);

// ===================================================== //
// Función: procesarRegistroContacto                     //
// Descripción: Procesa el registro de contacto          //
// Parámetros:                                           //
//      nada                                             //
// Retorno:                                              //
//      nada                                             //
// ===================================================== //
function procesarRegistroContacto() {
  let usuario = moduloParametros.obtenerParametro('nombre');
  let mensajeObj = document.getElementById('mensaje');

  mensajeObj.innerHTML = `<p class="usuario">${usuario}</p><p>¡¡Muchas gracias por contactarnos!!</p><p>A la brevedad nos estaremos comunicando.`;
}