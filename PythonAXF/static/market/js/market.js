$(function () {
    var index = $.cookie('index')
    console.log(index)
    if (index){

        $('.type-slider li').eq(index).addClass('active')
    } else {
        $('.type-slider li:first').addClass('active')
    }

     $('.type-slider li').click(function () {

        $.cookie('index', $(this).index(), {expires: 3, path: '/'})
    })



    var allt = false
    $('#alltype').click(function () {
        allt = !allt
        allt ? categoryViewShow() : categoryViewHide()
        sortViewHide()
        alls = false
    })

    var alls = false
    $('#allsort').click(function () {
        alls = !alls
        alls ? sortViewShow() : sortViewHide()
        categoryViewHide()
        allt = false
    })

    function categoryViewShow() {
        $('.category-view').show()
        $('#alltype i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')
    }

    function categoryViewHide() {
        $('.category-view').hide()
        $('#alltype i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up')
    }

    function  sortViewShow() {
        $('.sort-view').show()
        $('#allsort i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')
    }

    function  sortViewHide() {
        $('.sort-view').hide()
        $('#allsort i').addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down')
    }

    $('.market .main-content .bounce-view').click(function () {
        alls = false
        allt = false
        sortViewHide()
        categoryViewHide()
    })


    $('.bt-wrapper>.num').each(function () {
        num = parseInt($(this).html())
        if (num){
            $(this).show()
            $(this).prev().show()
        } else {
            $(this).hide()
            $(this).prev().hide()
        }
    })



    // $('.bt-wrapper>.glyphicon-minus').hide()
    // $('.bt-wrapper>.num').hide()
    $('.bt-wrapper>.glyphicon-plus').click(function () {

        var $that = $(this)


        request_data = {
            'goodsid':$(this).attr('data-goodsid')
        }
        console.log(request_data)
        $.get('/axf/addgoods/', request_data, function (response) {

            // console.log(response)
            if (response.status == -1){

                $.cookie('back', 'market', {expires: 3, path: '/'})
                window.open('/axf/login/', '_self')
            }else {
                $that.prev().show()
                $that.prev().prev().show()
                $that.prev().html(response.number)
                console.log($(this).prev())
            }

        })
    })


    $('.bt-wrapper>.glyphicon-minus').click(function () {
        var $that = $(this)

        request_data = {
            'goodsid':$(this).attr('data-goodsid')
        }

        $.get('/axf/subgoods/', request_data, function (response) {
            console.log(response)
            if(response.status==1){
                if(response.number==0){
                    $that.hide()
                    $that.next().hide()
                }


                $that.next().html(response.number)
                console.log($(this).next())
            }
        })
    })


})
