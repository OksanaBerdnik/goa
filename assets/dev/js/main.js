$(window).resize(function () {
    resizeImg();
});

function resizeImg() {
    if ($(window).width() >= 768) {
        $('.desktop.previous-marathon li').height($('.desktop.previous-marathon li').width());
    }
}

function windowScroll() {
    var height = $(window).height();
    if ($(window).scrollTop() > height) {
        $('header nav').addClass('scrolling');
        $('.go-up').fadeIn();
    }
    else  {
        $('header nav').removeClass('scrolling');
        $('.go-up').fadeOut();
    }
}

$(document).ready(function() {
    windowScroll();
    resizeImg();

    $('.carousel').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
        adaptiveHeight: true,
        slidesToShow: 1
    });

    $('.burger').on('click', function () {
        $(this, '.mobile-menu').toggleClass('open-menu');
        $('.overlay').fadeToggle();
        $('.mobile-menu').slideToggle();
    });

    $('.overlay').on('click', function () {
        $('.mobile-menu, .burger').removeClass('open-menu');
        $('.overlay').fadeOut();
        $('.mobile-menu').slideUp();
    });

    $(".scroll_to_target").on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        if ($(window).width() > 1023) {
            $('html, body').animate({scrollTop: $(target).offset().top - 92}, 1500);
        }
        else {
            $('html, body').animate({scrollTop: $(target).offset().top}, 1500);
        }
        return false;
    });

    $(".scroll_to_target_bounce").on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });

    $('.go-up').on('click', function () {
        $( 'html, body' ).animate( { scrollTop: 0 }, 1500 );
    });

    $('.carousel-slide').on('click', function (e) {
        e.preventDefault();
    });

    $(window).scroll(function() {
        windowScroll();
    });

    $('.slick-prev').html('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#slider-arrow"></use></svg>');
    $('.slick-next').html('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#slider-arrow"></use></svg>');

    $(".order-email").on('submit', function(e) {
        var form = $(this);
        var form_data = form.serialize();

        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "email_sender.php",
            data: form_data,
            success: function(result) {
                form.find('.success').slideDown();
                form.closest('.popup').hide();
                $.fancybox.close();
                form.find('input[type=text], input[type=email]').val();
            }
        });
        // return false;
    });

});

function myMap(loc1, loc2, notice) {
    var myCenter = new google.maps.LatLng(loc1, loc2);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: myCenter,
        zoom: 15,
        scrollwheel: false
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content: notice
    });
    infowindow.open(map,marker);
}