$(document).ready(function(){
    $('.slider').slick();

    $('.js-nav-menu').on('click',function(){
        $('.body').toggleClass('body__move');
        $('.banner').toggleClass('banner__move');
        $('.menu').toggleClass('menu__show');
    });


    $(".nav-md__list-menu_js").on('click',function(){
        $('.menu').toggleClass('menu__show');
        if($('.menu__drop-down_ul').hasClass('menu__drop-down_ul-show')){
            $('.menu__drop-down_ul').toggleClass('menu__drop-down_ul-show');
        }
    });


    $('.man-gifts-open-js').on('click',function(){
        $('.menu__drop-down_ul').toggleClass('menu__drop-down_ul-show');
    });


    $('.body').on('click', function (e) {  // как тут правильно сделать?????
        if (!$(e.target).hasClass('nav-md__list-menu')
            && !$(e.target).parent().hasClass('menu__list-item')
            && !$(e.target).hasClass('js-nav-menu')
            && !$(e.target).parent().hasClass('js-nav-menu')
        ) {
            if($('.menu').hasClass('menu__show')){
                $('.menu').toggleClass('menu__show');
            }
        }
    });





});