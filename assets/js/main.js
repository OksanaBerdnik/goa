function resizeImg(){$(window).width()>=768&&$(".desktop.previous-marathon li").height($(".desktop.previous-marathon li").width())}function windowScroll(){var height=$(window).height();$(window).scrollTop()>height?($("header nav").addClass("scrolling"),$(".go-up").fadeIn()):($("header nav").removeClass("scrolling"),$(".go-up").fadeOut())}function myMap(loc1,loc2,notice){var myCenter=new google.maps.LatLng(loc1,loc2),mapCanvas=document.getElementById("map"),mapOptions={center:myCenter,zoom:15,scrollwheel:!1},map=new google.maps.Map(mapCanvas,mapOptions),marker=new google.maps.Marker({position:myCenter});marker.setMap(map),new google.maps.InfoWindow({content:notice}).open(map,marker)}$(window).resize(function(){resizeImg()}),$(document).ready(function(){windowScroll(),resizeImg(),$(".carousel").slick({dots:!0,infinite:!0,autoplay:!0,autoplaySpeed:4e3,speed:300,adaptiveHeight:!0,slidesToShow:1}),$(".burger").on("click",function(){$(this,".mobile-menu").toggleClass("open-menu"),$(".overlay").fadeToggle(),$(".mobile-menu").slideToggle()}),$(".overlay").on("click",function(){$(".mobile-menu, .burger").removeClass("open-menu"),$(".overlay").fadeOut(),$(".mobile-menu").slideUp()}),$(".scroll_to_target").on("click",function(e){e.preventDefault();var target=$(this).attr("href");return $(window).width()>1023?$("html, body").animate({scrollTop:$(target).offset().top-92},1500):$("html, body").animate({scrollTop:$(target).offset().top},1500),!1}),$(".scroll_to_target_bounce").on("click",function(e){e.preventDefault();var target=$(this).attr("href");return $("html, body").animate({scrollTop:$(target).offset().top},1e3),!1}),$(".go-up").on("click",function(){$("html, body").animate({scrollTop:0},1500)}),$(".carousel-slide").on("click",function(e){e.preventDefault()}),$(window).scroll(function(){windowScroll()}),$(".slick-prev").html('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#slider-arrow"></use></svg>'),$(".slick-next").html('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#slider-arrow"></use></svg>'),$(".order-email").on("submit",function(e){var form_data=$(this).serialize();e.preventDefault(),$.ajax({type:"POST",url:"email_sender.php",data:form_data,success:function(result){$(this).find(".success").slideDown(),$(this).closest(".popup").hide(),$(this).find("input[type=text], input[type=email]").val()},error:function(err){console.log(err)}})})});
//# sourceMappingURL=main.js.map
