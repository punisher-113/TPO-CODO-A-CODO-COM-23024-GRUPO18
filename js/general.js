/* *************************************************************** */
/* MODULO: general.js                                              */
/* DESCRIPCION: Funciones de uso general                           */
/* *************************************************************** */

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
    let ret = params.get(parametro);

    return (ret===null)?"":ret;
}

