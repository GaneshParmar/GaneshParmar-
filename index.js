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


    $(".skills").addClass("active")
        $(".skills .skill .skill-bar span").each(function() {
        $(this).animate({
            "width": $(this).parent().attr("data-bar") + "%"
        }, 1000);
        $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
        });
        setTimeout(function() {
        $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
        }, 2000);
        })

