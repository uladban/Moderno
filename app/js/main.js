$(function(){
    

    $(".rate-star").rateYo({
        starWidth: "12px",
        rating: 5,
        readOnly: true,
        halfStar: true
      });

    $(".product__slider-inner").slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 1441,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 801,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
            
        ]
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
    $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });

    $('.icon-th-list').on('click', function(){
        $('.product__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th').removeClass('active');
    });
    $('.icon-th').on('click', function(){
        $('.product__item').removeClass('list');
        $('.icon-th').addClass('active');
        $('.icon-th-list').removeClass('active');
    });
    $('input[type="file"], select').styler();

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
    $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active')
    });

    var mixer = mixitup('.products__inner-box');
    
})
.header__btn-menu