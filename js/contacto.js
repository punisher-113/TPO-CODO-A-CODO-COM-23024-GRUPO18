/* *************************************************************** */
/* MODULO: contacto.js                                             */
/* DESCRIPCION: Módulo para la página contacto.html                */
/* *************************************************************** */

// Código a ejecutar al importar el módulo
// Cuando termine de cargarse el DOM, se ejecuta la función
document.addEventListener("DOMContentLoaded", AsignarValidaciones);
// Agrego un listener al formulario para actualizar el campo next que necesita FormSubmit
document.querySelector("form").addEventListener("submit", actualizarCampoNext);

// ===================================================== //
// Función: asignarValidaciones                          //
// Descripción: Asigna a cada campo el texto a nostrar   //
// Parámetros:                                           //
//      nada                                             //
// Retorno:                                              //
//      nada                                             //
// ===================================================== //
function AsignarValidaciones() {
  validarCampo('nombre', 'Por favor complete el campo');
  validarCampo('apellido', 'Por favor complete el campo');
  validarCampo('email', 'Por favor complete el campo con un email válido');
  validarCampo('comentario', 'Por favor complete el campo');
}

// ===================================================== //
// Función: validarCampo                                 //
// Descripción: Asigna el texto a mostrar cuando 'campo' //
//              no tiene datos                           //
// Parámetros:                                           //
//      id = id del campo a validar                      //
//      mensaje = texto a mostrar                        //
// Retorno:                                              //
//      nada                                             //
// ===================================================== //
function validarCampo(id, mensaje) {
  var input = document.getElementById(id);

  input.addEventListener('input', function(evt) {
      this.setCustomValidity('');
    });

  input.addEventListener('invalid', function(evt) {
      // Required
      if (this.validity.valueMissing) {
        this.setCustomValidity(mensaje);
      } else {
        if (!(this.validity.valid)) {
          this.setCustomValidity(mensaje);
        }  
      }
    });
}

// ===================================================== //
// Función: actualizarCampoNext                          //
// Descripción: Actualiza el campo 'nextr' para          //
//              redireccionar la página                  //
// Parámetros:                                           //
//      nada                                             //
// Retorno:                                              //
//      ret = página a redireccionar con parámetros      //
// ===================================================== //
function actualizarCampoNext() {
  let ret = "";
  let next = document.getElementById("next");
  let usuario = document.getElementById("nombre");

  let listaCadena = location.pathname.split("/");
  for (let i=0; i<listaCadena.length-1; i++)
  {
    ret += listaCadena[i] + "/";
  }

  next.value = `${location.origin}${ret}registroContacto.html?nombre=${usuario.value}`;
  //next.value = location.pathname + "/registroContacto.html?nombre=" + usuario.value;
}