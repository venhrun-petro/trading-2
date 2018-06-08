
$('.drop').find('li').click(function () {
    var selectResult = $(this).html();
    $(this).parent().parent().find('input').val(selectResult);
    $('.slct').removeClass('active').html(selectResult);
    //$('.drop').css('transform', 'scaleY(0)');
});

$('.slct-2').click(function () {
    var dropBlock = $(this).parent().find('.drop-2');
    if (dropBlock.is(':hidden')) {
        dropBlock.slideDown();
        $(this).addClass('active');
        $('.drop-2').find('li').click(function () {
            var selectResult = $(this).html();
            $(this).parent().parent().find('input').val(selectResult);
            $('.slct-2').removeClass('active').html(selectResult);
            dropBlock.slideUp();
        });
    } else {
        $(this).removeClass('active');
        dropBlock.slideUp();
    }
    return false;
});

if ($('.ms-block').css('display') == 'none') {
    $('.my-nav li').mouseenter(function () {
        $(this).addClass('main')
    }).mouseleave(function () {
        $(this).removeClass('main')
    });
} else {
    $('.my-nav li').on('click', function () {
        $('.my-nav li').not(this).removeClass('main');
        $(this).toggleClass('main');
    });
}


var textShowing = true;
$(".burger").click(function () {
    $('.menu').slideToggle();
});
$('.burger').click(function () {
    $('.burger').toggleClass('opened');
    $('.header').toggleClass('header-color');
    $('.top_nav').click(function () {
        $('.burger').removeClass('opened');
        $(".top_nav").css("display", "none");
    });
});

$(".login-btn").click(function () {
    $('.modal_sigh-up').slideDown();

});
$(".close_modal").click(function () {

    $('.modal_sigh-up').slideUp();
    $('.modal_sigh-in').slideUp();
});
$(".out").click(function () {
    $('.modal_sigh-in').slideDown();

});
$('.country_list').find('li').click(function () {
    var selectResult = $(this).html();
    $(this).parent().parent().find('input').val(selectResult);
    $('.country').removeClass('active').html(selectResult);
    $('.country_cont').removeClass('start');
    $('.country_cont').addClass('activ_label');
    //$('.drop').css('transform', 'scaleY(0)');
});
$('.country').click(function () {
    var dropBlock = $(this).parent().find('.country_list');
    $('.country_cont').addClass('start');
    if (dropBlock.is(':hidden')) {
        dropBlock.slideDown();
        $(this).addClass('active');
        $('.country_list').find('li').click(function () {
            var selectResult = $(this).html();
            $(this).parent().parent().find('input').val(selectResult);
            $('.country').removeClass('active').html(selectResult);
            dropBlock.slideUp();
        });
    } else {
        $(this).removeClass('active');
        $('.country_cont').removeClass('start');
        dropBlock.slideUp();
    }
    return false;
});


