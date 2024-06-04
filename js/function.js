$(document).ready(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $('header').addClass("header-fixed");
        } else {
            $('header').removeClass("header-fixed");
        }

        // for scroll-top trigger
        if (scroll >= 400) {
            $('.scroll-top').addClass("is-show");
        } else {
            $('.scroll-top').removeClass("is-show");
        }

        // Scroll to top 
        $(".scroll-top").on("click", function() {
            $(window).scrollTop(0);
        });

    });

    // Menu toggle
    $('.menu').click (function(){
        $(this).toggleClass('open');
        $('.navbar-custom').toggleClass('m-menu');
        $('body').toggleClass('freeze');
      });

      $(".navbar-custom").on("click", ".nav-link", function(event){
        $('.menu').removeClass('open');
        $('.navbar-custom').removeClass('m-menu');
        $('body').removeClass('freeze');
    });

    $('.testimony-carousel').owlCarousel({
        loop:true,
        // margin:24,
        autoplay: true,
        center: true,
        dots: true,
        lazyLoad:true,
        responsive:{
            1000:{
                items:3,
                margin: 0
            },
            756:{
                items:2,
                margin: 0
            },
            0:{
                items:1,
                margin: 0
            }
        }
    });

    $('.survey-org-carousel').owlCarousel({
        loop:true,
        // margin:24,
        autoplay: true,
        center: true,
        dots: false,
        lazyLoad:true,
        responsive:{
            1000:{
                items:5,
                margin: 16
            },
            756:{
                items:3,
                margin: 12
            },
            0:{
                items:2,
                margin: 8
            }
        }
    });

    $('.timeline-carousel').owlCarousel({
        loop:true,
        // margin:24,
        autoplay: false,
        center: false,
        dots: false,
        lazyLoad:true,
        nav: true,
        // autoWidth:true,
        responsive:{
            1000:{
                items:5,
                margin: 0
            },
            756:{
                items:3,
                margin: 0
            },
            0:{
                items:2,
                margin: 0
            }
        }
    });
    

});

