// ===================================================== //
// Función: procesarRegistroContacto                     //
// Descripción: Procesa el registro de contacto          //
// Parámetros:                                           //
//      nada                                             //
// Retorno:                                              //
//      nada                                             //
// ===================================================== //
function procesarRegistroContacto() {
  let usuario = obtenerParametro('nombre');
  let mensajeObj = document.getElementById('mensaje');

  mensajeObj.innerHTML = usuario + " muchas gracias por contactarnos";;
}

// ===================================================== //
// Función: obtenerParametro                             //
// Descripción: Obtiene 'parametro' de la url            //
// Parámetros:                                           //
//      parametro = parametro a buscar                   //
// Retorno:                                              //
//      ret = valoar del parámetro                       //
// ===================================================== //
function obtenerParametro(parametro){
    let params = new URLSearchParams(location.search);
    var ret = params.get(parametro);

    return ret;
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

    next.value = location.origin + ret + "registroContacto.html?nombre=" + usuario.value;
    //next.value = location.pathname + "/registroContacto.html?nombre=" + usuario.value;
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