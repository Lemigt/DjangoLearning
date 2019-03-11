$(function () {
    $('.mine').width(innerWidth)
     $('#login-i').click(function () {

        $.cookie('back', 'mine', {expires: 3, path: '/'})

        window.open('/axf/login/', '_self')
    })
})

