/* *************************************************************** */
/* MODULO: producto.js                                             */
/* DESCRIPCION: Funciones para el uso de productos                 */
/* *************************************************************** */

// ------------------------------------------------------------- //
// CLASE: DatoProducto                                           //
// DESCRIPCION: Implementa el objeto datoProducto                //
// ------------------------------------------------------------- //
class DatoProducto {
    // Declaro las variables privadas que contienen los datos 
    #nombre = "";
    #valor = "";

    // ===================================================== //
    // Función: constructor                                  //
    // Descripción: Crea un dato de producto                 //
    // Parámetros:                                           //
    //      nombre = nombre del dato                         //
    //      valor = valor del dato                           //
    // Retorno:                                              //
    //      ret = dato                                       //
    // ===================================================== //
    constructor (nombre, valor) {
        this.#nombre = nombre;
        this.#valor = valor;
    }

    // ===================================================== //
    // Función: nombre                                       //
    // Descripción: Devuelve el nombre del dato              //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      nombre = nombre del dato                         //
    // ===================================================== //
    get nombre() {
        return this.#nombre;
    }

    // ===================================================== //
    // Función: valor                                        //
    // Descripción: Devuelve el valor del dato               //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      nombre = valor del dato                          //
    // ===================================================== //
    get valor() {
        return this.#valor;
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
        return `{nombre: ${this.#nombre}, dato: ${this.#valor}}`;
    }

    // ===================================================== //
    // Función: existeCadena                                 //
    // Descripción: Determina si 'cadena' es parte del texto //
    //              de los datos                             //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      ret = TRUE, existe la cadena                     //
    //           FALSE, no existe la cadena                  //
    // ===================================================== //
    existeCadena(cadena) {
        return (this.#valor.toLowerCase().includes(cadena.toLowerCase()))
    }
}

// ------------------------------------------------------------- //
// CLASE: Producto                                               //
// DESCRIPCION: Implementa el objeto producto                    //
// ------------------------------------------------------------- //
class Producto {
    // Declaro las variables privadas que contienen los datos 
    #id = "";
    #nombre = "";
    #precio = "";
    #destacado = false;
    #datos = new Array();
    #imagenes = new Array();

    // ===================================================== //
    // Función: constructor                                  //
    // Descripción: Crea un producto                         //
    // Parámetros:                                           //
    //      id = cadena con el id del producto               //
    //      nombre = cadena con el nombre del producto       //
    //      precio = cadena con el precio del producto       //
    //      destacado = determina si es un producto detacado //
    //      datos = array con los datos del producto         //
    //      imagenes = array con el nombre de las imágenes   //
    //                 producto                              //
    // Retorno:                                              //
    //      ret = producto                                   //
    // ===================================================== //
    constructor(id, nombre, precio, destacado, datos, imagenes) {
        this.#id = id;
        this.#nombre = nombre;
        this.#precio = precio;
        this.#destacado = destacado;
        this.#datos = datos;
        this.#imagenes = imagenes;
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
    // Función: precio                                       //
    // Descripción: Devuelve el precio del producto          //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      datos = precio del producto                      //
    // ===================================================== //
    get precio() {
        return this.#precio;
    }

    // ===================================================== //
    // Función: destacado                                    //
    // Descripción: Devuelve si es un producto destacado     //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      datos = TRUE o FALSE                             //
    // ===================================================== //
    get destacado() {
        return this.#destacado;
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
               (this.#datos.find(dato => dato.existeCadena(cadena)) !== undefined);
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
        return `{id: ${this.#id}, nombre: ${this.#nombre}, precio: ${this.#precio}, ` + 
               `destacado: ${this.#destacado}, datos: [${this.#datos.toString()}], ` +
               `imagenes: [${this.#imagenes.toString()}]}`;
    }
}

// ------------------------------------------------------------- //
// FUNCIONES GENERALES                                           //
// DESCRIPCION: Funciones que se utilizan en el módulo, pero son //
//              genéricas                                        //
// ------------------------------------------------------------- //
// ===================================================== //
// Función: esDestacado                                  //
// Descripción: Determina si un producto es destacado    //
// Parámetros:                                           //
//      cantidad = cantidad de productos en total        //
//      id = id del producto                             //
//      destacados = cantidad de productos destacados    //
// Retorno:                                              //
//      ret = TRUE o FALSE                               //
// ===================================================== //
function esDestacado(cantidad, id, destacados) {
    let fecha = new Date();
    let dia = fecha.getDate();
    let divisor = cantidad / destacados;

    let ret = (dia % divisor) == (id % divisor);

    return ret;
}

// ===================================================== //
// Función: obtenerURL                                   //
// Descripción: Obtiene el host mas el path actual       //
// Parámetros:                                           //
//      nada                                             //
// Retorno:                                              //
//      ret = host +  path                               //
// ===================================================== //
function obtenerURL() {
    let ret = location.origin;
  
    let listaCadena = location.pathname.split("/");
    for (let i=0; i<listaCadena.length-1; i++)
    {
      ret += listaCadena[i] + "/";
    }
  
    return ret;
}

// ------------------------------------------------------------- //
// FUNCIONES EXPORTADAS                                          //
// ------------------------------------------------------------- //
// ------------------------------------------------------------- //
// FUNCIONES PARA OBTENER PRODUCTOS                              //
// DESCRIPCION: Obtiene los productos de una api simulada local  //
// ------------------------------------------------------------- //
// ===================================================== //
// Función: fetchProductos                               //
// Descripción: Obtiene los productos de la api          //
// Parámetros:                                           //
//      nada                                             //
// Retorno:                                              //
//      ret = array con los datos                        //
// ===================================================== //
export async function fetchProductos() {

    let datos = null;
    try {
        const respuesta = await fetch('datos/productos.json');
        datos = await respuesta.json();

    } catch (error) {
        console.log(error);
    }

    return datos;
}

// ===================================================== //
// Función: obtenerProductos                             //
// Descripción: Obtiene la lista de productos            //
// Parámetros:                                           //
//      funcion = función a ejecutar luego de obtener    //
//                los productos. Es opcional             //
// Retorno:                                              //
//      ret = array con los productos                    //
// ===================================================== //
export async function obtenerProductos(funcion) {
    let productos = new Array();

    // Busco los productos
    fetchProductos()
        // Una vez obtenidos los datos, creo cada producto
        .then(datos => datos.map(item => productos.push(new Producto(item.id, item.nombre, item.precio, esDestacado(datos.length, item.id, datos.length/2),
                                                                     item.datos.map(dato => new DatoProducto(dato.campo, dato.valor)),
                                                                     item.imagenes))))
        .catch(() => {
            console.log("Error");
            })
        // Termine bien o mal, ejecuto la función
        .finally(() => {
            if (funcion != undefined) {
                funcion(productos);
            }
        });

    return productos;
}

// ===================================================== //
// Función: armarProductoDestacado                       //
// Descripción: Devuelve una tarjeta HTML de producto    //
//              destacado                                //
// Parámetros:                                           //
//      producto = producto con los datos                //
// Retorno:                                              //
//      ret = producto HTML                              //
// ===================================================== //
export function armarProductoDestacado(producto) {

    // Obrengo el template del item destacado
    let template = document.getElementById("producto-destacado").content;

    // Clono el template
    let productoHTML = template.cloneNode(true);

    // Asigno el id del producto 
    productoHTML.querySelector(".item_destacado").id = producto.id;

    // Asigno la imagen del producto
    productoHTML.querySelector("img").src = producto.imagenes[0];

    // Asigno el nombre del producto
    productoHTML.querySelector("h3").textContent = producto.nombre;

    // Obtengo el contenedor de datos
    let datos = productoHTML.querySelector("#datos");
    // Obtengo el campo 'dato' del producto
    let dato = datos.querySelector("p");
    // Asigno los datos del producto
    producto.datos.forEach(item => {    
        let datoClone = dato.cloneNode(true);  
        datoClone.querySelector("#campo").textContent = `${item.nombre}: `;
        datoClone.querySelector("#valor").textContent = item.valor;
        
        // Agrego el dato
        datos.appendChild(datoClone);
    });

    // Asigno el precio y descuento
    let precio_anterior = productoHTML.querySelector("#precio_anterior");
    let precio = productoHTML.querySelector("#precio")
    if (producto.destacado) {
        precio_anterior.textContent = `$ ${producto.precio}`;
        precio_anterior.className = "precio_techado";
        precio.textContent = `$ ${producto.precio * 0.9}`;

    } else {
        precio_anterior.textContent = `_`;
        precio_anterior.className = "precio_oculto";
        precio.textContent = `$ ${producto.precio}`;
    }

    // Asigno el link del producto al botón Ver
    productoHTML.querySelector("#ver").href = `${obtenerURL()}productos.html?id=${producto.id}`;

    return productoHTML;
}

// ===================================================== //
// Función: armarProducto                                //
// Descripción: Devuelve una tarjeta HTML                //
// Parámetros:                                           //
//      producto = producto con los datos                //
// Retorno:                                              //
//      ret = producto HTML                              //
// ===================================================== //
export function armarProducto(producto, indice) {

    // Obrengo el template del item destacado
    let template = document.getElementById("producto").content;

    // Clono el template
    let productoHTML = template.cloneNode(true);

    // Obtengo el contenedor de las imágenes
    let imagenes = productoHTML.querySelector("#lista-imagenes");
    imagenes.style.animation = `slide 15s infinite ${indice * 0.5}s alternate ease-in-out`;
    // Asigno las imágenes del producto
    producto.imagenes.forEach(img => {
        let li = document.createElement("li");
        let imgen = document.createElement("img");
        imgen.src = img;
        
        li.appendChild(imgen);

        imagenes.appendChild(li);
    });

    // Asigno el nombre del producto
    productoHTML.querySelector("h3").textContent = producto.nombre;

    // Obtengo el contenedor de datos
    let datos = productoHTML.querySelector("#datos");
    // Obtengo el campo 'dato' del producto
    let dato = datos.querySelector("p");
    // Asigno los datos del producto
    producto.datos.forEach(item => {    
        let datoClone = dato.cloneNode(true);  
        datoClone.querySelector("#campo").textContent = `${item.nombre}: `;
        datoClone.querySelector("#valor").textContent = item.valor;
        
        // Agrego el dato
        datos.appendChild(datoClone);
    });

    // Asigno el precio y descuento
    let precio_anterior = productoHTML.querySelector("#precio_anterior");
    let precio = productoHTML.querySelector("#precio")
    if (producto.destacado) {
        precio_anterior.textContent = `$ ${producto.precio}`;
        precio_anterior.className = "precio_techado";
        precio.textContent = `$ ${producto.precio * 0.9}`;

    } else {
        precio_anterior.textContent = `_`;
        precio_anterior.className = "precio_oculto";
        precio.textContent = `$ ${producto.precio}`;
    }

    return productoHTML;
}

// ===================================================== //
// Función: buscarProductoID                             //
// Descripción: Devuelve el producto que tenga el id     //
//              de la lista productos                    //
// Parámetros:                                           //
//      productos = lista de productos                   //
//      id = id a buscar                                 //
// Retorno:                                              //
//      ret = devuelve el producto si lo encuentra. Sino //
//            devuelve vacío                             //
// ===================================================== //
export function buscarProductoID(productos, id) {
    let ret = null;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id == id) {
            ret = productos[i];
            break;
        }
    }
    return ret;
}

// ===================================================== //
// Función: buscarProductos                              //
// Descripción: Devuelve la lista de productos que       //
//              que coincide con 'criterio'              //
// Parámetros:                                           //
//      productos = lista de productos                   //
//      criterio = cadena de búsqueda                    //
// Retorno:                                              //
//      ret = array con los productos encontrados        //
// ===================================================== //
export function buscarProductos(productos, criterio='') {
    let ret;

    if (criterio === '')
    {
        ret = productos;
    } else {
        ret = productos.filter(producto => producto.existeCadena(criterio));
    }

    return ret;
}

// -------------------------------------------------------------------------- //


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
    let contenedor_productos = document.querySelector(".contenedor_tarjetas");

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

// ===================================================== //
// Función: obtenerProductosDestacados                   //
// Descripción: Devuelve una lista de productos          //
//              destacados                               //
// Parámetros:                                           //
//      nada                                             //
// Retorno:                                              //
//      ret = lista de productos destacados              //
// ===================================================== //
function obtenerProductosDestacados() {
    // Obtengo los productos
    let productos = obtenerProductos(alert);

    console.log(productos);

    // Creo una lista de productos destacados vacía
    let productos_destacados = new Array();

    console.log(productos.length);

    // Veo si encontré productos
    if (productos.length > 0) {

        // Elijo en forma aleatoria la cantidad de productos destacados
        let cantidad = Math.floor(Math.random() * (productos.length / 2)) + 1;

        // Elijo los prouctos destacados
        do {
            // Elijo un número entre 0 y la cantidad de productos - 1
            i = Math.floor(Math.random() * productos.length);
            // Si el producto no está en la lista, lo agrego
            if (buscarProductoID(productos_destacados, productos[i].id) === null) {
                productos_destacados.push(productos[i]);
            }
            cantidad--;
        } while (cantidad > 0);
    }

    return productos_destacados;
}


