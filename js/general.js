/* *************************************************************** */
/* MODULO: general.js                                              */
/* DESCRIPCION: Funciones de uso general                           */
/* *************************************************************** */

// Asigna el header de la página
let tempHeader=`
        <div class="contacto_header">
            <a href="mailto:info@laboratorio3d.com.ar" title="Enviar email"><i class="fa-regular fa-envelope"></i> info@laboratorio3d.com.ar</a>
            <a href="https://api.whatsapp.com/send?phone=541132600263&text=Hola,%20te%20podemos%20asesorar%20por%20WhatsApp%20a%20gestionar%20tu%20compra%20por%20este%20canal" title="Contactar por WhatsApp"><i class="fa-brands fa-whatsapp"></i> (+54) 9 11 3260 0263</a>
        </div>
        <div class="navegacion">
            <div class="logo"> <a href="index.html"><img src="img/LAB3DLOGO.png" alt="logo"> </a></div>

            <input type="checkbox" id="check" checked>
            <label for="check" class="mostrar-menu">
                &#8801
            </label>
            <nav class="menu">
                <a href="index.html">Inicio</a>
                <a href="productos.html">Productos</a>
                <a href="nosotros.html">Sobre nosotros</a>
                <a href="comoFunciona.html">Cómo funciona</a>
                <a href="contacto.html">Contacto</a>
                <label for="check" class="esconder-menu">
                    &#215
                </label>
            </nav>    
        </div>`
document.querySelector("header").innerHTML=tempHeader;

// Asigna el footer de la página
let tempFooter=`
    <div class="info_footer">
    <p>Suipacha 2972, Turdera, Buenos Aires, Argentina.
    Lunes a Viernes 9:00hs a 18:00hs</p>
    </div>
<div class="iconos_grandes">
<a href="mailto:grupo18.codoacodo@gmail.com" title="Enviar email"><i class="fa-regular fa-envelope fa-fw fa-3x"></i></a>
<a href="https://api.whatsapp.com/send?phone=541132600263&text=Hola,%20te%20podemos%20asesorar%20por%20WhatsApp%20a%20gestionar%20tu%20compra%20por%20este%20canal" title="Contactar por WhatsApp"><i class="fa-brands fa-whatsapp fa-fw fa-3x"></i></a>
<a href="https://www.discord.com" title="Contactar por Discord"><i class="fa-brands fa-discord fa-fw fa-3x" ></i></a> 
<a href="http://www.instagram.com" title="Nuestro Instagram"><i class="fa-brands fa-instagram fa-fw fa-3x"></i></a> 
<a href="https://www.facebook.com" title="Nuestro Facebook"><i class="fa-brands fa-facebook fa-fw fa-3x" ></i></a> 
</div>
<div class="iconos_chicos">
<a href="mailto:grupo18.codoacodo@gmail.com" title="Enviar email"><i class="fa-regular fa-envelope fa-fw fa-2x"></i></a>
<a href="https://api.whatsapp.com/send?phone=541132600263&text=Hola,%20te%20podemos%20asesorar%20por%20WhatsApp%20a%20gestionar%20tu%20compra%20por%20este%20canal" title="Contactar por WhatsApp"><i class="fa-brands fa-whatsapp fa-fw fa-2x"></i></a>
<a href="https://www.discord.com" title="Contactar por Disord"><i class="fa-brands fa-discord fa-fw fa-2x"></i></a> 
<a href="https://www.instagram.com" title="Nuestro Instagram"><i class="fa-brands fa-instagram fa-fw fa-2x"></i></a> 
<a href="https://www.facebook.com" title="Nuestro Facebook"><i class="fa-brands fa-facebook fa-fw fa-2x"></i></a> 
</div>`
document.querySelector("footer").innerHTML=tempFooter
