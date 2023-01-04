//send form
function send_form(obj) {
    var msg = $(obj).serialize();
    $.ajax({
        type: "POST",
        url: "send_form.php",
        data: msg,
        success: function (data) {
            alert("Сообщение отправлено");
        },
        error: function (xhr, str) {
            alert("Возникла ошибка!");
        }
    });
}

$(document).ready(function () {


    //table all
    $(".t_more").click(function () {
        $(".r_table").addClass("all_show");
        $(this).hide();
    });


    //phone mask
    jQuery(function ($) {
        $(".phone").mask("+7 (999) 999-9999");
    });


    //modal
    $('[data-modal=modal]').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('data-pop');
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $('.mask').css({ 'width': maskWidth, 'height': maskHeight });
        $('.mask').fadeIn(0);
        var winH = $(window).height();
        var winW = $(window).width();
        $(id).css('top', winH / 2 - $(id).height() / 2);
        $(id).css('left', winW / 2 - $(id).width() / 2);
        $(id).fadeIn(200);
        $("body").css({ "overflow": "hidden" });
    });
    $('.window .close, .mask').click(function (e) {
        e.preventDefault();
        $('.mask, .window').hide();
        $("body").css({ "overflow": "auto" });
    });

});