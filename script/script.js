$(function(){
    // gnb메뉴 시작
    $(".mainLi").mouseover(function(){
        $(this).children(".subMenu").css({"display":"block"});
        $("#subMenuBG").css({"display":"block"});
        
    });

    $(".mainLi").mouseout(function(){
        $(this).children(".subMenu").css({"display":"none"});
        $("#subMenuBG").css({"display":"none"});
    });
    // gnb메뉴 끝

    // lnb 메뉴 시작

    $("#lnb li").mouseover(function(){
        $(this).children("#lnb li span").css({"display":"block"});
    });

    $("#lnb li").mouseout(function(){
        $(this).children("#lnb li span").css({"display":"none"});
    });

    // lnb 메뉴 끝

});