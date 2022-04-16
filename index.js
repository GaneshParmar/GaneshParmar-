// Owl Carosel
$(document).ready(function() {
  

    $(".slider1").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        autoplay:true,
        // navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
    });

    $(".slider2").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        autoplay:3000
        // navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
    });
})
