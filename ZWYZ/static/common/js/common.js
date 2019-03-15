//=======================顶部导航的下拉下拉效果========================
$(function(){

    $('.headertop-right li').hover(function(){
        $(this).find('div').slideDown(400);
    },function(){
        $(this).find('div').stop(true,true).slideUp(400);
    });
});
//=================知我海淘=================
$(function(){
    $('.mainnav').hover(function(){
        $(this).find('.overseas_nav_img2').show();
        $(this).find('.overseas_nav_img1').hide();
    },function(){
        $(this).find('.overseas_nav_img1').show();
        $(this).find('.overseas_nav_img2').hide();
    });
})

//===================首页导航右边图标效果==================
$(function(){
    $(".nav-right").on("mouseenter",".fcb_invest",function(){
        $(this).stop(true).animate({"width":"74px"})
    })
    $(".nav-right").on("mouseleave",".fcb_invest",function(){
        $(this).stop(true).animate({"width":"0px"})
    })
    $(".nav-right").on("mouseenter",".fcb_quality",function(){
        $(this).stop(true).animate({"width":"74px"})
    })
    $(".nav-right").on("mouseleave",".fcb_quality",function(){
        $(this).stop(true).animate({"width":"0px"})
    })
    $(".nav-right").on("mouseenter",".fcb_mail",function(){
        $(this).stop(true).animate({"width":"74px"})
    })
    $(".nav-right").on("mouseleave",".fcb_mail",function(){
        $(this).stop(true).animate({"width":"0px"})
    })
    $(".nav-right").on("mouseenter",".fcb_return",function(){
        $(this).stop(true).animate({"width":"120px"})
    })
    $(".nav-right").on("mouseleave",".fcb_return",function(){
        $(this).stop(true).animate({"width":"0px"})
    })
});

//===================导航栏二级菜单===================
$(function(){
	
	$('.zhiwo').hover(function(){
        $(this).find('.shop-two').slideDown(400);
    },function(){
     $(this).find('.shop-two').stop(true,true).slideUp(400);
    });
})


	