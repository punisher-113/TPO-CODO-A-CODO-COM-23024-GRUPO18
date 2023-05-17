/* *************************************************************** */
/* MODULO: productos.js                                            */
/* DESCRIPCION: Funciones para el uso de productos                 */
/* *************************************************************** */

// ------------------------------------------------------------- //
// CLASE: DatoProducto                                           //
// DESCRIPCION: Implementa el objeto datoProducto                //
// ------------------------------------------------------------- //
class DatoProducto {
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
    #datos = new Array();
    #imagenes = new Array();

    // ===================================================== //
    // Función: constructor                                  //
    // Descripción: Crea un producto                         //
    // Parámetros:                                           //
    //      id = cadena con el id del producto               //
    //      nombre = cadena con el nombre del producto       //
    //      precio = cadena con el precio del producto       //
    //      datos = array con los datos del producto         //
    //      imagenes = array con el nombre de las imágenes   //
    //                 producto                              //
    // Retorno:                                              //
    //      ret = producto                                   //
    // ===================================================== //
    constructor(id, nombre, precio, datos, imagenes) {
        this.#id = id;
        this.#nombre = nombre;
        this.#precio = precio;
        this.#datos = datos;

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
        return `{id: ${this.#id}, nombre: ${this.#nombre}, datos: [${this.datos.toString()}], imagenes: [${this.#imagenes.toString()}}]`;
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

    productos.push(new Producto('0001','Artorias','7000',
                [new DatoProducto('Franquicia','Dark Souls'), new DatoProducto('Tamaño','20x15x10cm'), new DatoProducto('Material','Plástico PLA+'), new DatoProducto('Altura','20cm')], 
                ['img/Artorias/artorias1.jpg','img/Artorias/artorias3.jpg','img/Artorias/artorias2.jpg','img/Artorias/artorias1.jpg']));
    productos.push(new Producto('0003','Androide 18','6900',
                [new DatoProducto('Franquicia','Dragon Ball Z'), new DatoProducto('Tamaño','20x10x10cm'), new DatoProducto('Material','Plástico PLA+ y ResinaUV'), new DatoProducto('Altura', '20cm')],
                ['img/Android18/android1.jpg','img/Android18/android2.jpg','img/Android18/android3.jpg','img/Android18/android4.jpg']));
    productos.push(new Producto('0004','Batman','7100',
                [new DatoProducto('Franquicia', 'DC - Batman'), new DatoProducto('Tamaño', '20x15x15cm'), new DatoProducto('Material', 'Plástico PLA+ y ResinaUV'), new DatoProducto('Altura', '20cm')],
                ['img/Batman/batman1.jpg','img/Batman/batman2.jpg','img/Batman/batman3.jpg','img/Batman/batman4.jpg']));
    productos.push(new Producto('0005','Crash Bandicoot','5600',
                [new DatoProducto('Franquicia', 'Crash Bandicoot'), new DatoProducto('Tamaño', '20x10x10cm'), new DatoProducto('Material', 'Plastico PLA+ y Luz Led'), new DatoProducto('Altura', '20cm')],
                ['img/Crash/Crash1.jpg','img/Crash/Crash2.jpg','img/Crash/Crash3.jpg','img/Crash/Crash4.jpg']))
    productos.push(new Producto('0006','Nunu y Willump','7600',
                [new DatoProducto('Franquicia', 'League of Legends'), new DatoProducto('Tamaño',' 20x10x10cm'), new DatoProducto('Material', 'Plástico PLA+'), new DatoProducto('Altura', '20cm')],
                ['img/NunuyWillump/nunu1.jpg','img/NunuyWillump/nunu2.jpg','img/NunuyWillump/nunu3.jpg','img/NunuyWillump/nunu4.jpg']))
    productos.push(new Producto('0007','Reika Shimohira', '7100',
                [new DatoProducto('Franquicia', 'Gantz (Anime/Manga)'), new DatoProducto('Tamaño', '25x14x14cm'), new DatoProducto('Material', 'ResinaUV'), new DatoProducto('Altura', '25cm')],
                ['img/ReikaShimohira/ReikaShimohira1.jpeg','img/ReikaShimohira/ReikaShimohira2.jpeg','img/ReikaShimohira/ReikaShimohira3.jpeg','img/ReikaShimohira/ReikaShimohira4.jpeg']));
    productos.push(new Producto('0008','El Mandalorian y Grogu','10500',
                [new DatoProducto('Franquicia' , 'Starwars'), new DatoProducto('Tamaño', '25x19x19cm'), new DatoProducto('Matarial', 'Plástico PLA+ y ResinaUV'), new DatoProducto('Altura', '25cm')],
                ['img/MandalorianGrogu/MandalorianGrogu1.jpeg','img/MandalorianGrogu/MandalorianGrogu2.jpeg','img/MandalorianGrogu/MandalorianGrogu3.jpeg','img/MandalorianGrogu/MandalorianGrogu4.jpeg']));
    productos.push(new Producto('0009','Spiderman','9000',
                [new DatoProducto('Franquicia', 'Marvel'), new DatoProducto('Medidas','25x20x20cm'), new DatoProducto('Material', 'Plástico PLA+ y ResinaUV'), new DatoProducto('Altura', '25cm')],
                ['img/Spiderman/Spiderman1.jpeg','img/Spiderman/Spiderman2.jpeg','img/Spiderman/Spiderman3.jpeg','img/Spiderman/Spiderman4.jpeg']));
    productos.push(new Producto('0010','Venom','9000',
                [new DatoProducto('Franquicia', 'Marvel'), new DatoProducto('Tamaño', '25x20x20cm'), new DatoProducto('Material', 'Plástico PLA+ y ResinaUV'), new DatoProducto('Altura', '25cm')],
                ['img/Venom/Venom1.jpeg','img/Venom/Venom2.jpeg','img/Venom/Venom3.jpeg','img/Venom/Venom4.jpeg']))
 
    return productos;
}

// ===================================================== //
// Función: buscarProductoID                             //
// Descripción: Devuelve el producto que tenga el id     //
//              de la lista productos                    //
// Parámetros:                                           //
//      id = id a buscar                                 //
// Retorno:                                              //
//      ret = devuelve el producto si lo encuentra. Sino //
//            devuelve vacío                             //
// ===================================================== //
function buscarProductoID(productos, id) {
    let ret = null;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
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
        let span_campo = document.createElement("span");
        span_campo.className = "campo";
        span_campo.innerHTML = dato.nombre + ": ";
        let span_valor = document.createElement("span");
        span_valor.innerHTML = dato.valor;

        p.appendChild(span_campo);
        p.appendChild(span_valor);
        contenido.appendChild(p);
    });
    
    // Creo el precio 
    let precio = document.createElement("p");
    precio.className = "precio";
    precio.innerHTML = `$ ${producto.precio}`;

    contenido.appendChild(precio);

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
    let productos = obtenerProductos();

    // Creo una lista de productos destacados vacía
    let productos_destacados = new Array();

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

    return productos_destacados;
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
function armarProductoDestacado(producto) {

    let productoHTML = document.createElement("li");
    productoHTML.className = "item_destacado";
    
    let div = document.createElement("div");
    div.className = "card_destacada";

    // Creo la figura
    let figura = document.createElement("figure");

    let img = document.createElement("img");
    img.src = producto.imagenes[0];
    
    figura.appendChild(img);

    // Creo el contenido
    let contenido = document.createElement("div");
    contenido.className = "contenido";

    let h3 = document.createElement("h3");
    h3.innerHTML = producto.nombre;

    contenido.appendChild(h3);

    producto.datos.forEach(dato => {        
        let p = document.createElement("p");
        let span_campo = document.createElement("span");
        span_campo.className = "campo";
        span_campo.innerHTML = dato.nombre + ": ";
        let span_valor = document.createElement("span");
        span_valor.innerHTML = dato.valor;

        p.appendChild(span_campo);
        p.appendChild(span_valor);
        contenido.appendChild(p);
    });

    // Creo el precio 
    let precio = document.createElement("p");
    precio.className = "precio";
    precio.innerHTML = `$ ${producto.precio}`;

    contenido.appendChild(precio);
    
    // Creo el precio con descuento
    let preciodesc = document.createElement("p");
    preciodesc.className = "precio_descuento";
    preciodesc.innerHTML = `$ ${producto.precio * 0.9}`;

    contenido.appendChild(preciodesc);

    // Creo el botón de compra
    let botonC = document.createElement("a");
    botonC.innerHTML = "Comprar"
    contenido.appendChild(botonC);

    // Creo el botón ver
    let botonV = document.createElement("a");
    botonV.innerHTML = "Ver"
    contenido.appendChild(botonV);
    
    // Agrego la figura
    div.appendChild(figura);

    // Agrego el contenido
    div.appendChild(contenido);

    // Termino el item destacado
    productoHTML.appendChild(div);

    return productoHTML;
}

// ===================================================== //
// Función: mostrarProductosDestacados                   //
// Descripción: Muestra los productos destacados         //
// Parámetros:                                           //
//      productos = listado de productos a mostrar       //
// Retorno:                                              //
//      nada                                             //
// ===================================================== //
function mostrarProductosDestacados(productos) {

    // Obtengo el div que va a contener los productos
    let contenedor_productos = document.querySelector(".contenedor_slider_destacados");

    // Obtengo el div del mensaje
    let contenedor_mensaje = document.querySelector(".contenedor_mensaje");

    if (productos.length>0) {
        // Oculto el mensaje
        contenedor_mensaje.className = "ocultar";

        // Creo la lista de botones destacados
        let lista_botones = document.createElement("lu");
        lista_botones.className = "botones_slider_destacados";

        // Creo la lista de productos destacados
        let lista_productos = document.createElement("lu");
        lista_productos.className = "slider_destacados";

        // Recorro los productos destacados
        productos.forEach(producto => {

            // Creo el producto
            let productoHTML = armarProductoDestacado(producto);
            lista_productos.appendChild(productoHTML);
        });

        // Abrego la lista de productos destacados
        contenedor_productos.appendChild(lista_productos);

        // Agrego la lista de botones
        contenedor_productos.appendChild(lista_botones);
    }
    else
    {
        // Muestro el mensaje
        mensaje = document.createElement("p");
        mensaje.className = "mensaje";
        mensaje.innerHTML = "No se encontraron productos destacados";
        contenedor_mensaje.appendChild(mensaje);
    }
}

