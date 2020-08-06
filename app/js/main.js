$(function(){
    

    $(".rate-star").rateYo({
        starWidth: "12px",
        rating: 4.5,
        readOnly: true,
        halfStar: true
      });

    $(".product__slider-inner").slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
    });
   
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        step: 20,
        from: 0,
        to: 600,
        grid: false,
        prefix: "$",
        
    });
    var mixer = mixitup('.products__inner-box');
    
})
