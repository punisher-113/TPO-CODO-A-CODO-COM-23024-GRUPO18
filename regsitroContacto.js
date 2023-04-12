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
    let next = document.getElementById("next");
    let usuario = document.getElementById("nombre");

    next.value = location.origin + "/registrarContacto.html?nombre=" + usuario.value;
}

