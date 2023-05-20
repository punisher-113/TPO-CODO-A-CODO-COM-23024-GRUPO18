/* *************************************************************** */
/* MODULO: parametros.js                                           */
/* DESCRIPCION: Funciones de uso parámetros                        */
/* *************************************************************** */
// ===================================================== //
// Función: obtenerParametro                             //
// Descripción: Obtiene 'parametro' de la url            //
// Parámetros:                                           //
//      parametro = parametro a buscar                   //
// Retorno:                                              //
//      ret = valoar del parámetro                       //
// ===================================================== //
export function obtenerParametro(parametro){
    let params = new URLSearchParams(location.search);
    let ret = params.get(parametro);

    return (ret===null)?"":ret;
}
