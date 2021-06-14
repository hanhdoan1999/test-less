(function ($) {
    "use strict";

    // Client carousel
    $(".client-carousel").owlCarousel({
        center: true,
        autoplay: true,

        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    

})(jQuery);

