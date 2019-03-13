$(function () {
    $('.cart').width(innerWidth)
    total()
    $('#oneSelect>span').click(function () {
        $that = $(this)

        request_data = {
            'cartid': $(this).parent().attr('data-cardid')
        }

        $.get('/axf/changeSelect/', request_data, function (response) {
            // console.log(response)
            // console.log(response.isSelect)
            // console.log(typeof response.isSelect)

            if (response.isSelect) {
                $that.removeClass('no').addClass('glyphicon glyphicon-ok')
            } else {
                $that.removeClass('glyphicon glyphicon-ok').addClass('no')
            }
            total()
        })


    })


    $('#allSelect>span').click(function () {
        $that = $(this)
        var isall = 'True'


        if ($(this).hasClass('glyphicon-ok')) {
            // console.log('it has glyphicon-ok')
            isall = 'False'
            $(this).attr('data-all', true)
        } else {
            // console.log('fuck not')
            isall = 'True'
            $(this).attr('data-all', false)
        }

        request_data = {
            'connectionTest': 'Success Connect',
            'isall': isall
        }

        $.get('/axf/changeAllSelect/', request_data, function (response) {
            // console.log(response.msg)
            //
            // console.log(response.reIsAll)
            // console.log(typeof response.reIsAll)
            if (response.reIsAll) {
                $('#allSelect>span').removeClass('no').addClass('glyphicon glyphicon-ok')
                $('#oneSelect>span').removeClass('glyphicon glyphicon-ok').removeClass('no').addClass('glyphicon glyphicon-ok')
            } else {
                $('#allSelect>span').removeClass('glyphicon glyphicon-ok').addClass('no')
                $('#oneSelect>span').removeClass('no').removeClass('glyphicon glyphicon-ok').addClass('no')
            }
            total()
        })
        

    })


    function total() {
        console.log('begin')
        var sum = 0


        $('.cart li').each(function () {
            var $confirm = $(this).find('.confirm-wrapper')
            console.log('find confirm')
            var $content = $(this).find('.content-wrapper')
            console.log('find cintent')

            // find('.glyphicon-ok').length)
            if ($(this).children('#oneSelect').children().hasClass('glyphicon-ok')) {
                var price = $content.find('.price').attr('data-price')
                console.log(price)
                var num = $content.find('.num').attr('data-number')
                console.log(num)
                sum += num * price
            }else {
                console.log('fuck not')
            }
        })


        $('.bill .total b').html(sum)
    }

})