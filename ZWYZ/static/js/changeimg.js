$(function () {
    console.log(111)
    $('img').each(function () {
        imgsrc = $(this).attr('src')
        simgsrc = "{% static '"  + imgsrc + "' %}"

        $(this).attr('src', simgsrc)
        // $(this).attr('src', simgsrc)
        console.log($(this).attr('src'))

    })
})
