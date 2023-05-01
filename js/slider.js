$(document).ready(function() {
    $('.carousel-image').click(function() {
      var images = [
        '//img/Artorias/artorias1.jpg',
        '//img/Artorias/artorias2.jpg',
        '//img/Artorias/artorias3.jpg'
      ];
  
      $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false
            }
          }
        ]
      });
  
      // Añade las imágenes al carrusel
      for (var i = 0; i < images.length; i++) {
        $('.carousel').slick('slickAdd', '<img src="' + images[i] + '" alt="Imagen ' + (i + 1) + '">');
      }
    });
  });