$(function () {
    // gnb 메인메뉴
    $(".mainLi").mouseover(function () {
        $(this).children("ul").stop().show();
        $("#subMenuBG").stop().show();
    });
    $(".mainLi").mouseout(function () {
        $(this).children("ul").stop().hide();
        $("#subMenuBG").stop().hide();
    });

    // gnb 서브메뉴 표시하지 않음 Start
    // 해당 CSS에서 display:none과 display:flex가 동시에 적용되야 하므로
    // CSS,JQuery에서 각각 구현하여 코드꼬임 현상 방지
    // -> CSS에서 함께 구현하지 말것.
    $(".subMenu").css({"display":"none"});

    // gnb 서브메뉴 표시하지 않음 End

    // 헤더 영역 LNB 메뉴 하이라이트 효과
    $("#headerLnb a").mouseover(function(){
        $(this).siblings("span").css({"visibility": "visible"});
    });
    $("#headerLnb a").mouseout(function(){
        $(this).siblings("span").css({"visibility": "hidden"});
    });

    // 이메일/멤버쉽 번호 멀티탭 구현
    $("#multiTabArea button").click(function(){
        // 1. 버튼 모두 초기상태로 만듦
        $("#multiTabArea button").css({
            "color": "#666",
            "border": "1px solid #aaa"
        });
        // 2. 클릭한 버튼(this)의 스타일 적용
        $(this).css({
            "color": "#3289e8",
            "border": "1px solid #3289e8",
            "border-bottom-color": "#fff"
        });
        // 3. 클릭하지 않은 버튼의 스타일 적용
        var txt = $(this).text();
        var cssAttr;
        var placeholderTxt;
        if (txt == "이메일") {
            cssAttr = "border-left";
            placeholderTxt = "E-mail";
        } 
        else {
            cssAttr = "border-right";
            placeholderTxt = "Membership Number";
        }

        $(this).siblings("button").css({
            cssAttr: "none",
            "border-bottom": "1px solid #3289e8"
        });

        // 사용자 아이디 (이메일, 멤버쉽 번호) placeholder 적용
        // attr 메서드는 html 요소의 속성을 참조하는 기능
        // JS의 참조 : 값을 입력, 조회, 수정, 삭제함의 의미
        $("#userID").attr("placeholder", placeholderTxt);



    });

    // if (txt=="이메일") {
    //     $(this).siblings("button").css({
    //         "border-left" : "none",
    //         "border-bottom":"1px solid #3289e8"
    //     });
    // }
    // else {
    //     $(this).siblings("button").css({
    //         "border-right" : "none",
    //         "border-bottom":"1px solid #3289e8"
    //     });
    // }

});