$(function () {
    $('.register').width(innerWidth)

    $('#warning').hide()

    oncepw = $('input:eq(2)')
    twicepw = $('input:eq(3)')

    twicepw.focus(function () {

        setInterval(function () {
            oncepw.val() == twicepw.val() ? $('#warning').hide() : $('#warning').show()
        },10)
    })
})

