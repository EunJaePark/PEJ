// JavaScript Document

/*--------------------------------헤더----------------------------------*/




/*------------------------------네비게이션--------------------------------*/
//네비게이션 안보이게 해둠.
$(document).ready(function(){
    //$("nav .menu_box").css("opacity","0");
    $("nav .menu_box").css("transform","translate(-100%,0)");
});

//hambugerButton click ( open menuBox )
$(document).ready(function(){
    $("nav .hambuger_button").click(function(){
        //$("nav .menu_box").animate({opacity:1},70);
        $("nav .menu_box").css("transform","translate(0,0)");
    });
});

//close button click ( close menuBox )
$(document).ready(function(){
    $("nav .close_button").click(function(){
        //$("nav .menu_box").animate({opacity:0},70);
        $("nav .menu_box").css("transform","translate(-100%,0)");
    });
});


// 메뉴목록 클릭시 해당 페이지위치로 이동.
$(document).ready(function(){
    $("nav .menu_box li a").click(function(){
        //메뉴박스는 닫히게함.
        $("nav .menu_box").css("transform","translate(-100%,0)");
        
        //위치구해서 이동.
        var a=$($(this).attr("href")).offset().top;
        $("html, body").animate({scrollTop:a},500);
    });
});



/*--------------------------------섹션1(ABOUT ME)----------------------------------*/



/*--------------------------------섹션2(SKILLS)----------------------------------*/
//각 기능(html/css/js/ps/ai)에 마우스오버시 부연설명박스(.box2) 보이게함.
   // 1. 'html/css.../..'글씨박스(.hiddenbox) + 부연설명박스(.box3)  안보이게숨기기.
$(document).ready(function(){
    $("#skills .hiddenbox .text, #skills .box3").hide();
});

    // 2. 각 원에 마우스오버시 해당 글씨(.hiddenbox) + 세부설명(.box3) 보이게함.
        //(1 HTML)
$(document).ready(function(){
    $("#skills .box1_circle").hover(function(){
        var abc=$(this).index(this);
        $("#skills .hiddenbox .text").eq(abc).toggle();
    });
});




/*--------------------------------섹션3(PORTFOLIO)----------------------------------*/
//각 사이트 제목 click시 해당사이티 스크린샷이미지 보이게함.
// 1. 기본적으로 Jinair 이미지 보이게해둠+jinair글씨 불투명하게.
$(document).ready(function(){
    $("#portfolio .box1_1 .image:nth-child(1)").css("display", "block");
    $("#portfolio .box1_2 .text:nth-child(1)").css("opacity", "1");
});

// 2. 각 사이트 제목 click시 해당 사이트 이미지 보이게함.
    //Jinair   
    $(document).ready(function(){
        //사이트이름에마우스오버시 불투명하게.
        if(!$("#portfolio .box1_1 .image:nth-child(1)").css("display","block")){
        $("#portfolio .box1_2 text:nth-child(1) h5").mouseenter(function(){
            $("#portfolio .box1_2 text:nth-child(1)").css("opacity","1");
        });
        };
    
        //사이트이름 클릭시 사이트이미지보이게.
        $("#portfolio .box1_2 .text:nth-child(1) h5").click(function(){
            //web publisher:pej 사진 안보이게함
            $("#portfolio .box1_1 .image:nth-child(2)").css("display", "none");
            $("#portfolio .box1_2 .text:nth-child(2)").css("opacity", ".5");
            //Jinair 보이게함
            $("#portfolio .box1_1 .image:nth-child(1)").css("display", "block");
            $("#portfolio .box1_2 .text:nth-child(1)").css("opacity", "1");
        });
    });

    //web publisher:pej 
$(document).ready(function(){
    //사이트이름에마우스오버시 불투명하게.
    $("#portfolio .box1_2 text:nth-child(1) h5").mouseenter(function(){
        $("#portfolio .box1_2 text:nth-child(1)").css("opacity","1");
    });
    //사이트이름 클릭시 사이트이미지보이게.
    $("#portfolio .box1_2 .text:nth-child(2) h5").click(function(){
        //jinair사진 안보이게함
        $("#portfolio .box1_1 .image:nth-child(1)").css("display", "none");
        $("#portfolio .box1_2 .text:nth-child(1)").css("opacity", ".5");
        //web publisher:pej 보이게함
        $("#portfolio .box1_1 .image:nth-child(2)").css("display", "block");
        $("#portfolio .box1_2 .text:nth-child(2)").css("opacity", "1");
    });
});



