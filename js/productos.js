/* *************************************************************** */
/* MODULO: productos.js                                            */
/* DESCRIPCION: Funciones para el uso de productos                 */
/* *************************************************************** */

// ------------------------------------------------------------- //
// CLASE: Producto                                               //
// DESCRIPCION: Implementa el objeto producto                    //
// ------------------------------------------------------------- //
class Producto {
    #id = "";
    #nombre = "";
    #datos = new Array();
    #imagenes = new Array();

    // ===================================================== //
    // Función: constructor                                  //
    // Descripción: Crea un producto                         //
    // Parámetros:                                           //
    //      id = cadena con el id del producto               //
    //      nombre = cadena con el nombre del producto       //
    //      datos = array con los datos del producto         //
    //      imagenes = array con el nombre de las imágenes   //
    //                 producto                              //
    // Retorno:                                              //
    //      ret = producto                                   //
    // ===================================================== //
    constructor(id, nombre, datos, imagenes) {
        this.#id = id;
        this.#nombre = nombre;

        if (Array.isArray(datos))
        {
            this.#datos = datos;
        } else if (typeof(datos) === 'string') 
        {
            this.#datos = new Array(datos);
        } else
        {
            this.#datos = new Array();
        }

        if (Array.isArray(imagenes))
        {
            this.#imagenes = imagenes;
        } else if (typeof(imagenes) === 'string') 
        {
            this.#imagenes = new Array(imagenes);
        } else
        {
            this.#imagenes = new Array();
        }
    }

    // ===================================================== //
    // Función: id                                           //
    // Descripción: Devuelve el id del producto              //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      id = id del producto                             //
    // ===================================================== //
    get id() {
        return this.#id;
    }

    // ===================================================== //
    // Función: nombre                                       //
    // Descripción: Devuelve el nombre del producto          //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      nombre = nombre del producto                     //
    // ===================================================== //
    get nombre() {
        return this.#nombre;
    }

    // ===================================================== //
    // Función: datos                                        //
    // Descripción: Devuelve los datos del producto          //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      datos = datos del producto                       //
    // ===================================================== //
    get datos() {
        return this.#datos;
    }

    // ===================================================== //
    // Función: imagenes                                     //
    // Descripción: Devuelve un array con las imágenes del   //
    //              producto                                 //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      tamano = tamano del producto                     //
    // ===================================================== //
    get imagenes() {
        return this.#imagenes;
    }

    // ===================================================== //
    // Función: existeCadena                                 //
    // Descripción: Determina si 'cadena' es parte del texto //
    //              del producto                             //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      ret = TRUE, existe la cadena                     //
    //           FALSE, no existe la cadena                  //
    // ===================================================== //
    existeCadena(cadena) {
        return (this.#nombre.toLowerCase().includes(cadena.toLowerCase())) || 
               (this.#datos.find(dato => dato.toLowerCase().includes(cadena.toLowerCase())) !== undefined);
    }

    // ===================================================== //
    // Función: toString                                     //
    // Descripción: Devuelve una cadena con los datos del    //
    //              producto                                 //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      ret = cadena                                     //
    // ===================================================== //
    toString() {
        return `{id: ${this.id}, nombre: ${this.nombre}, datos: [${this.datos.toString()}], imagenes: [${this.imagenes.toString()}}]`;
    }
}

// ===================================================== //
// Función: obtenerProductos                             //
// Descripción: Obtiene la lista de productos            //
// Parámetros:                                           //
//      nada                                             //
// Retorno:                                              //
//      ret = array con los productos                    //
// ===================================================== //
function obtenerProductos() {
    let productos = new Array();

    productos.push(new Producto('0001','Artorias',['Franquicia: Dark Souls','Tamaño: 20x15x10cm','Material: Plástico PLA+','Altura: 20cm'], ['img/Artorias/artorias1.jpg','img/Artorias/artorias3.jpg','img/Artorias/artorias2.jpg','img/Artorias/artorias1.jpg']));
    productos.push(new Producto('0002','Gato con Botas y Lobo',['Franquicia: Gato con Botas','Tamaño Gato: 12x5x5cm','Tamaño Lobo: 17x8x8cm','Material: Resina UV','Altura: 20cm'], ['img/Gatoconbotas/gato1.jpg','img/Gatoconbotas/gato2.jpg','img/Gatoconbotas/gato3.jpg','img/Gatoconbotas/gato1.jpg']));
    productos.push(new Producto('0003','Androide 18',['Franquicia: Dragon Ball Z','Tamaño: 20x10x10cm','Material: Plástico PLA+ y ResinaUV','Altura: 20cm'],['img/Android18/android1.jpg','img/Android18/android2.jpg','img/Android18/android3.jpg','img/Android18/android4.jpg']));
    productos.push(new Producto('0004','Batman',['Franquicia: DC - Batman','Tamaño: 20x15x15cm','Material: Plástico PLA+ y ResinaUV','Altura: 20cm'],['img/Batman/batman1.jpg','img/Batman/batman2.jpg','img/Batman/batman3.jpg','img/Batman/batman4.jpg']));
    productos.push(new Producto('0005','Crash Bandicoot',['Franquicia: Crash Bandicoot','Tamaño: 20x10x10cm','Material: Plastico PLA+ y Luz Led','Altura: 20cm'],['img/Crash/Crash1.jpg','img/Crash/Crash2.jpg','img/Crash/Crash3.jpg','img/Crash/Crash4.jpg']))
    productos.push(new Producto('0006','Nunu y Willump',['Franquicia: League of Legends','Tamaño: 20x10x10cm ','Material: Plástico PLA+','Altura: 20cm'],['img/NunuyWillump/nunu1.jpg','img/NunuyWillump/nunu2.jpg','img/NunuyWillump/nunu3.jpg','img/NunuyWillump/nunu4.jpg']))
    productos.push(new Producto('0007','Reika Shimohira', ['Franquicia: Gantz (Anime/Manga)','Tamaño: 25x14x14cm','Material: Resina UV','Altura: 25cm'],['img/ReikaShimohira/ReikaShimohira1.jpeg','img/ReikaShimohira/ReikaShimohira2.jpeg','img/ReikaShimohira/ReikaShimohira3.jpeg','img/ReikaShimohira/ReikaShimohira4.jpeg']));
    productos.push(new Producto('0008','El Mandalorian y Grogu',['Franquicia: Starwars','Tamaño: 25x19x19cm','Matarial: Plástico PLA+ y Resina UV','Altura: 25cm'],['img/MandalorianGrogu/MandalorianGrogu1.jpeg','img/MandalorianGrogu/MandalorianGrogu2.jpeg','img/MandalorianGrogu/MandalorianGrogu3.jpeg','img/MandalorianGrogu/MandalorianGrogu4.jpeg']));
    productos.push(new Producto('0009','Spiderman',['Franquicia: Marvel','Medidas: 25x20x20cm','Materiales: Plástico PLA+ y Resina UV','Altura: 25cm'],['img/Spiderman/Spiderman1.jpeg','img/Spiderman/Spiderman2.jpeg','img/Spiderman/Spiderman3.jpeg','img/Spiderman/Spiderman4.jpeg']));
    productos.push(new Producto('0010','Venon',['Franquicia: Marvel','Tamaño: 25x20x20cm','Material: Plástico PLA+ y Resina UV','Altura: 25cm'],['img/Venon/Venon1.jpeg','img/Venon/Venon2.jpeg','img/Venon/Venon3.jpeg','img/Venon/Venon4.jpeg']))

    return productos;
}

// ===================================================== //
// Función: buscarProductos                              //
// Descripción: Devuelve la lista de productos que       //
//              que coincide con 'criterio'              //
// Parámetros:                                           //
//      criterio = cadena de búsqueda                    //
// Retorno:                                              //
//      ret = array con los productos encontrados        //
// ===================================================== //
function buscarProductos(criterio='') {
    let ret = new Array();
    let productos = obtenerProductos();

    if (criterio === '')
    {
        ret = productos;
    } else {
        ret = productos.filter(producto => producto.existeCadena(criterio));
    }

    return ret;
}

// ===================================================== //
// Función: armarProducto                                //
// Descripción: Devuelve una tarjeta HTML                //
// Parámetros:                                           //
//      producto = producto con los datos                //
// Retorno:                                              //
//      ret = producto HTML                              //
// ===================================================== //
function armarProducto(producto) {

    let productoHTML = document.createElement("div");
    productoHTML.className = "card";

    // Creo la figura
    let figura = document.createElement("figure");

    let slider = document.createElement("div");
    slider.className = "slider-frame";

    let ul = document.createElement("ul");

    producto.imagenes.forEach(imagen => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = imagen;
        
        li.appendChild(img);

        ul.appendChild(li);
    });

    slider.appendChild(ul);

    figura.appendChild(slider);

    // Creo el contenido
    let contenido = document.createElement("div");
    contenido.className = "contenido";

    let h3 = document.createElement("h3");
    h3.innerHTML = producto.nombre;

    contenido.appendChild(h3);

    producto.datos.forEach(dato => {
        let p = document.createElement("p");
        p.innerHTML = dato;
        contenido.appendChild(p);
    });
    
    // Creo el botón de compra
    let boton = document.createElement("a");
    boton.innerHTML = "Comprar"
    contenido.appendChild(boton);

    // Agrego la figura
    productoHTML.appendChild(figura);

    // Agrego el contenido
    productoHTML.appendChild(contenido);

    return productoHTML;
}

// ===================================================== //
// Función: mostrarProductos                             //
// Descripción: Muestra los productos                    //
// Parámetros:                                           //
//      productos = listado de productos a mostrar       //
// Retorno:                                              //
//      nada                                             //
// ===================================================== //
function mostrarProductos(productos) {

    // Obtengo el div que va a contener los productos
    let contenedor_productos = document.querySelector(".container_cards");

    // Obtengo el div del mensaje
    let contenedor_mensaje = document.querySelector(".contenedor_mensaje");

    if (productos.length>0) {
        // Oculto el mensaje
        contenedor_mensaje.className = "ocultar";

        // Recorro los productos
        productos.forEach(producto => {
            let productoHTML = armarProducto(producto);
            contenedor_productos.appendChild(productoHTML);
        });
    }
    else
    {
        // Oculto los productos
        contenedor_productos.className = "ocultar";

        // Muestro el mensaje
        mensaje = document.createElement("p");
        mensaje.className = "mensaje";
        mensaje.innerHTML = "No se encontraron productos";
        contenedor_mensaje.appendChild(mensaje);
    }
}

