
$(function(){
    //正则验证
//用户名【手机号】
    var isUserName=false;
    $("#signup-mobile").blur(function(){
        //username
        console.log(111);
        var regUserName=/1[34578]\d{9}/g;
        if(regUserName.test($("#signup-mobile").val())){
            $(".error1").html("");
            $(".error1").css({"color":"green"});
            isUserName=true;
        }else{
            $(".error1").html("手机格式有误，请重新输入!");
            $(".error1").css({"color":"red"});
        }
    })

    //密码
    var isPassWord=false;
    $("#signup-password").blur(function(){
        //password
        var regPassWord=/^[a-z0-9_-]{6,16}$/;
        if(regPassWord.test($("#signup-password").val())){
            $(".error2").html("");
            $(".error2").css({"color":"green"});
            isPassWord=true;
        }else{
            $(".error2").html("密码长度需6-16位字符");
            $(".error2").css({"color":"red"});
        }
    })
    //重复密码
    var isPassWord2=false;
    $("#signup-password-confirm").blur(function(){
        if($("#signup-password-confirm").val()==$("#signup-password").val()){
            $(".error3").html("");
            $(".error3").css({"color":"green"});
            isPassWord2=true;
        }else{
            $(".error3").html("两次输入的密码不匹配");
            $(".error3").css({"color":"red"});
        }
    })
    //判断验证码
    var isYanzheng=false;
    $("#signup-verify-code").blur(function(){
        if($("#signup-verify-code").val().toLowerCase()==$("#p1").text().toLowerCase()){
            $(".error4").html("");
            isYanzheng=true;
        }else{
            $(".error4").html("验证码输入错误");
            $(".error4").css({"color":"red"});
        }
    })

    $("#signup-submit").click(function(e){
        e.preventDefault();

        if(isUserName&&isPassWord&&isPassWord2&&isYanzheng){

            var arr = $.cookie("users") ? JSON.parse($.cookie("users")) : [];

            //遍历users数组, 判断是否存在该用户,如果存在则不能注册
            for(var i=0; i<arr.length; i++) {
                if ( $("#signup-mobile").val() == arr[i].name ) {
                    console.log("该用户已经存在, 不能注册!");
                    return;
                }
            }

            //需要注册的用户(需要保存到cookie中的用户)
            var users = {
                name: $("#signup-mobile").val(), //用户名，手机号
                pwd: $("#signup-password").val() //密码
            }
            arr.push(users); //添加新用户

            //保存到cookie中
            $.cookie("users", JSON.stringify(arr), {expires:30, path:"/"});
            console.log( $.cookie("users") );

            location.href="login.html";
        }else{
            alert("账号不合法，请重新注册");
        }
    })

    //验证码
    //生成随机验证码的ascII码
    function suiji(){
        var num=parseInt(Math.random()*123);
        if((num>=48&&num<=57)||(num>=65&&num<=90)||(num>=97&&num<=122)){
            return num;
        }else{
            return suiji();
        }
    }
    //生成验证码
    for(var i=0;i<4;i++){
        $("#p1").append($("<span>"+String.fromCharCode(suiji())+"</span>"));
        $("#p1 span").last().css("color",randomColor());
    };
    //点击验证码的框可以更换验证码
    $("#change_code").click(function(){
        $("#p1").html("");
        for(var i=0;i<4;i++){
            $("#p1").append($("<span>"+String.fromCharCode(suiji())+"</span>"));
            $("#p1 span").last().css("color",randomColor());
        };
    })
    //随机颜色函数
    function randomColor(){
        var res="rgb("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)
            +","+parseInt(Math.random()*256)+")";
        return res;
    }



})