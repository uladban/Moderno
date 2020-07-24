$(function(){
    var mixer = mixitup('.products__inner-box');

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
})