/* *************************************************************** */
/* MODULO: contacto.js                                             */
/* DESCRIPCION: Módulo para la página contacto.html                */
/* *************************************************************** */

// Código a ejecutar al importar el módulo
// Agrego un listener al formulario para actualizar el campo next que necesita FormSubmit
document.querySelector("form").addEventListener("submit", verificarSubmit) 

// ===================================================== //
// Función: vacio                                        //
// Descripción: Determina si valor es vacío o no         //
// Parámetros:                                           //
//      campo = valor del campo                          //
// Retorno:                                              //
//      ret = TRUE, está vacío                           //
//           FALSE, no está vacío                        //
// ===================================================== //
function vacio(campo) {
  // Saco espacios y me aseguro que tenga valor
  campo = (campo == undefined) ? "" : campo.trim();

  return (campo.length === 0);
}

// ===================================================== //
// Función: camposOK                                     //
// Descripción: Verifica si los campos están completos   //
//              y correctos, de lo contrario resalta     //
//              en rojo el campo incorrecto y no envía   //
//              el formulario                            //
// Parámetros:                                           //
//      nada                                             //
// Retorno:                                              //
//      ret = TRUE, los campos estás correctos           //
//           FALSE, al menos un campo no está correcto   //
// ===================================================== //
function camposOK(evento) {
  let ok = true;
  let nombre = document.getElementById('nombre');
  let apellido = document.getElementById('apellido');
  let email = document.getElementById('email')
  let comentario = document.getElementById('comentario');

  // Verifico el campo 'nombre'
  if (vacio(nombre.value))
  {
    nombre.classList.add("campo_error");
    ok = false;
  } else {
    nombre.classList.remove("campo_error");
  }

  // Verifico el campo 'apellido'
  if (vacio(apellido.value))
  {
    apellido.classList.add("campo_error");
    ok = false;
  } else {
    apellido.classList.remove("campo_error");
  }

  // Verifico el campo 'email'
  if (vacio(email.value))
  {
    email.classList.add("campo_error");
    ok = false;
  } else {
      // Verifico que el email esté correcto, con una expresión regular
      let expr = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      if ( !expr.test(email.value) )
      {
        email.classList.add("campo_error");
        ok = false;        
      } else {
          email.classList.remove("campo_error");        
      }
  }

  // Verifico el campo 'comentario'
  if (vacio(comentario.value))
  {
    comentario.classList.add("campo_error");
    ok = false;
  } else {
    comentario.classList.remove("campo_error");
  }

  return ok;
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

// ===================================================== //
// Función: verificarSubmit                              //
// Descripción: Verifica si se puede realizar el submit  //
// Parámetros:                                           //
//      evento = evento generado al llamar a la función  //
// Retorno:                                              //
//      nada                                             //
// ===================================================== //
function verificarSubmit(evento) {
  // Valido los campos
  if (camposOK())
  {
    // Actualizo el campo Next para el envío del mail
    actualizarCampoNext();
  } else {
    // Evito enviar el formulario
    evento.preventDefault();
  }
}