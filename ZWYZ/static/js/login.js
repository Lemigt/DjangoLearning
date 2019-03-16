$(function(){

    // //cookie，检查用户是否注册存在
    // //点击登录按钮
    // $("input:submit").click(function(){
    //     //获取cookie中注册过的所有用户
    //     var users = $.cookie("users");
    //     console.log(users);
    //     if (users) {
    //         users = JSON.parse(users);
    //
    //         //遍历查找是否有匹配的用户
    //         var isExist = false; //表示是否存在该用户
    //         for (var i=0; i<users.length; i++) {
    //             if ( $("#login-username").val() == users[i].name && $("#login-password").val() == users[i].pwd ) {
    //                 console.log("登录成功!");
    //                 isExist = true; //表示存在该用户
    //
    //                 $.cookie('loginUser',users[i].name,{expires:22, path:"/"}) //将最近注册的用户存入cookie
    //                 location.href="index.html";   //跳转到首页
    //             }
    //         }
    //         if (!isExist) {
    //             alert("请重新登录!");
    //         }
    //
    //     }
    //     return false
    // })


     //验证用户名
    var isUserName=false;
    $("#login-username").blur(function(){

        var _username = this.value;

        console.log(_username);
        var reg=/^1[3|4|5|7|8][0-9]{9}$/;  //手机号

        if(reg.test(_username)){
            $(".login_username_i").html("");
            isUserName=true;
        }else{
            $(".login_username_i").html("手机号码格式错误，请重新输入");
            $(".login_username_i").css("color","#EE4242");
            console.log("a");
        }
    })


    //验证密码
    // var isPassWord=false;
    // $("#login-password").blur(function(){
    //     //password
    //     var regPassWord=/^[a-z0-9_-]{6,16}$/;
    //     if(regPassWord.test($("#login-password").val())){
    //         $(".login_password_i").html("");
    //         isPassWord=true;
    //         console.log("a");
    //     }else{
    //         $(".login_password_i").html("密码格式有误");
    //         $(".login_password_i").css({"color":"red"});
    //     }
    // })

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
