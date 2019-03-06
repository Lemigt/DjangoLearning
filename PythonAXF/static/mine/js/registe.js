$(function () {
    $('.register').width(innerWidth)


    // 失去焦点
    // 用户名输入完成，发起ajax请求，验证该用户名是否能用
    $('#account').blur(function () {
        $.get('/axf/checkuser/', {'account':$(this).val()}, function (response) {
            console.log(response)
            if(response['status'] == '-1'){ // 用户存在
                $('#accounterr').show().html(response['msg'])
            } else {
                $('#accounterr').hide()
            }
        })
    })

    $('#password').blur(function () {
        var password = $(this).val()
        if(password.length<6 || password.length>12){
            $('#passworderr').show()
        } else {
            $('#passworderr').hide()
        }
    })

    $('#mypassword').blur(function () {
        var mypassword = $(this).val()
        if (mypassword.length < 6 || mypassword.length > 12 || mypassword != $('#password').val()) {
            $('#mypassworderr').show()
        } else {
            $('#mypassworderr').hide()
        }
    })


    // 手机号码校验
    var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    // 默认图标是隐藏
    $('.tel-view>.glyphicon').hide()
    $('#tel').blur(function () {
        var flag = reg.test($(this).val())
        if (flag){  // 通过
            $('.tel-view').removeClass('has-error').addClass('has-success')
            $('.tel-view>.glyphicon').show().removeClass('glyphicon-remove').addClass('glyphicon-ok')
            $('#subButton').removeAttr('disabled')
        } else {    // 不通过
            $('.tel-view').removeClass('has-success').addClass('has-error')
            $('.tel-view>.glyphicon').show().removeClass('glyphicon-ok').addClass('glyphicon-remove')
            $('#subButton').attr('disabled','disabled')
        }
    })
})