$(function () {
    $('.register').width(innerWidth)


    // $('#email-input').removeClass('has-success').removeClass('has-error')
    // $('#email-input>span').removeClass('glyphicon-ok').removeClass('glyphicon-remove')


    $('#email-btn').blur(function () {
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");

        if ($(this).val() == '') {
            $('#email-input').removeClass('has-success').removeClass('has-error')
            $('#email-input>span').removeClass('glyphicon-ok').removeClass('glyphicon-remove')
        }


        if (reg.test($(this).val())) {
            //  格式正确
            request_data = {
                'email': $(this).val()
            }

            $.get('/axf/checkemail/', request_data, function (response) {
                if (response.status) {
                    $('#email-input').removeClass('has-success').addClass('has-error')
                    $('#email-input>span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
                    $('#email-btn').attr('data-content', response.msg).popover('show')
                } else {
                    $('#email-input').removeClass('has-error').addClass('has-success')
                    $('#email-input>span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
                    $('#email-btn').attr('data-content', response.msg).popover('hide')

                    //    data-toggle="popover"  data-placement="bottom"
                }

                console.log(response)
            })

        } else {
            console.log('error')
            $('#email-input').removeClass('has-success').addClass('has-error')
            $('#email-input>span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            $('#email-btn').attr('data-content', '邮箱格式不正确').popover('show')
        }

    })

    $('#password-btn').blur(function () {
        var reg = new RegExp("^[a-zA-Z0-9_]{6,10}$");
        console.log($(this).val())

        if ($(this).val() == '') {
            $('#password-input').removeClass('has-success').removeClass('has-error')
            $('#password-input>span').removeClass('glyphicon-ok').removeClass('glyphicon-remove')

        }


        if (reg.test($(this).val())) {
            $('#password-input').removeClass('has-error').addClass('has-success')
            $('#password-input>span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
            $('#password-input').attr('data-content', '密码格式正确').attr('data-placement', 'bottom').popover('hide')


        } else {
            $('#password-input').removeClass('has-success').addClass('has-error')
            $('#password-input>span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            $('#password-input').attr('data-content', '密码格式不正确').attr('data-placement', 'bottom').popover('show')
        }
    })


    $('#password2-btn').blur(function () {
        var password1 = $('#password-btn').val()

        if($(this).val() == password1){
            $('#password2-input').removeClass('has-error').addClass('has-success')
            $('#password2-input>span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
            $('#password2-input').attr('data-content', '密码一致').attr('data-placement', 'bottom').popover('hide')


        }else {
            $('#password2-input').removeClass('has-success').addClass('has-error')
            $('#password2-input>span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            $('#password2-input').attr('data-content', '两次输入的密码不一致').attr('data-placement', 'bottom').popover('show')
        }

    })


    $('#subButton').click(function () {

        var isregister = true
        $('.register .form-group').each(function () {
            if( !$(this).is('.has-success') ) {
                isregister = false
            }
        })
        if (isregister){
            $('.register form').submit()
        }
    })

})

