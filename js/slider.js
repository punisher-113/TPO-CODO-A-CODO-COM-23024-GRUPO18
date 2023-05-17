/* *************************************************************** */
/* MODULO: slider.js                                               */
/* DESCRIPCION: Funciones para el uso de slider                    */
/* *************************************************************** */
var indice_slider_destacados = 0;               // Indice del slider de destacados
var ventana_slider_destacados = 0;              // Ventana del slider de destacados
var funcion_intervalo_slider_destacados = null; // Función que mueve el slider de destacados

// Obtengo los contenedores de slider destacados
const contenedores = document.getElementsByClassName("contenedor_slider_destacados");

// ===================================================== //
// Función: ajustarSliderDestacados                      //
// Descripción: Inicializa el slider y muestra los items //
//              destacados                               //
// Parámetros:                                           //
//      tiempo = tiempo en segundos para mover el slider //
// Retorno:                                              //
//      nada                                             //
// ===================================================== //
function ajustarSliderDestacados(tiempo = 10) {

    // Recorro cada contenedor de slider de destacados
    for (let j=0; j<contenedores.length; j++) {
        // Obtengo el tamaño del contenedor
        let tamano = contenedores[j].offsetWidth;

        // Obtengo el primer slider dentro del contenedor. No debería haber mas de 1
        let slider_destacado = contenedores[j].getElementsByClassName("slider_destacados")[0];

        // Asigno el tamaño por defecto
        let nuevo_tamano = tamano;
        // Obtengo la cantidad de hijos del slider
        let cantidad = slider_destacado.children.length;
        // Obtengo el tamaño de uno de los hijos
        let tamano_hijo = slider_destacado.children.item(0).offsetWidth;
        // Calculo el nuevo tramaño
        do {
            nuevo_tamano = (cantidad--) * tamano_hijo;
        } while (nuevo_tamano >= tamano)
        // Asigno el nuevo tamaño del slider
        slider_destacado.style.width = `${nuevo_tamano}px`;

        // Si exite la función, la detengo
        if (funcion_intervalo_slider_destacados !== null) {
            clearInterval(funcion_intervalo_slider_destacados);
            funcion_intervalo_slider_destacados = null;
        }

        // Veo si debo iniciar el slider de destacados para mostrar todos los productos
        if ((cantidad+1) !== slider_destacado.children.length) {
            funcion_intervalo_slider_destacados = setInterval(iniciarSliderDestacados, tiempo * 1000);
            indice_slider_destacados = 0;       
            ventana_slider_destacados = cantidad + 1;       
        }
        
    }
}

// ===================================================== //
// Función: iniciarSliderDestacados                      //
// Descripción: Inicia el novimiento del slider          //
// Parámetros:                                           //
//      nada                                             //
// Retorno:                                              //
//      nada                                             //
// ===================================================== //
function iniciarSliderDestacados() {

    // Recorro cada contenedor de slider de destacados
    for (let j=0; j<contenedores.length; j++) {
        // Obtengo el primer slider dentro del contenedor. No debería haber mas de 1
        let slider_destacado = contenedores[j].getElementsByClassName("slider_destacados")[0];

        // Obtengo todos los item destacados
        card_destacadas = slider_destacado.querySelectorAll(".item_destacado");

        // Veo para que lado debo mover el slider
        if (indice_slider_destacados < (card_destacadas.length - ventana_slider_destacados)) {
            for (let i=0; i<card_destacadas.length; i++) {
                card_destacadas[i].style.transitionDelay = `${0.25 * (i + 1)}s`;
                card_destacadas[i].style.transform = `translate3d(${-290 * (indice_slider_destacados + 1)}px, 0px, 0px)`;
            }   
            indice_slider_destacados++;
        } else {
            for (let i=card_destacadas.length-1; i>=0; i--) {
                card_destacadas[i].style.transitionDelay = `${0.25 * (card_destacadas.length - i + 1)}s`;
                card_destacadas[i].style.transform = `translate3d(0px, 0px, 0px)`;
            }
            indice_slider_destacados = 0;
        }
    }
}
