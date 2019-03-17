$(function () {

    $('#go_to_pay').click(function () {
        console.log(111)
        var orderid = $(this).attr('order-id')
        var request_data = {
        'orderid':orderid
        }

        $.get('/pay/', request_data, function (response) {
            console.log(response.subject)
            console.log(response.msg)
            if (response.status == 1){
                window.open(response.alipayurl, target='_self')
            }
        })

    })



})