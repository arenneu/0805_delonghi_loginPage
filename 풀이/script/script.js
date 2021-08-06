$(function () {
    $(".mainLi").mouseover(function () {
        $(this).children("ul").stop().show();
        $("#subMenuBG").stop().show();
    });
    $(".mainLi").mouseout(function () {
        $(this).children("ul").stop().hide();
        $("#subMenuBG").stop().hide();
    });
});