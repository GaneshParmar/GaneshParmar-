// Owl Carosel
$(document).ready(function() {
  

    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        autoplay:false,
        autoplayTimeout:4000
        // navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
    });

    $(".slider2").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        autoplay:false
        // navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
    });
})
