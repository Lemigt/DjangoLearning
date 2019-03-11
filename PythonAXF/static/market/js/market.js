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

})
