export function carusel() {
  $(document).ready(function () {
    $(".sliderCarusel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        autoplay: true,
        focusOnSelect: true,
        draggable: true,
        arrows: false,
        swipe: true, // Enable swipe/drag effect
        touchMove: true,
        touchThreshold: 50, // Set a higher value for touchThreshold
        autoplaySpeed:1000, //  Slide Delay
        speed:800,
        variableWidth: true,

        easing:"linear",
        lazyLoad: 'progressive',
        // variableWidth: true,
        // centerMode: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1
              }
            }
          ]

    });
  });



  
}
