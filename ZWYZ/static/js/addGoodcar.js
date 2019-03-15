//===================点击加入购物车========================

$(function(){

    function fn(){

        //结算数量
        //获取之前保存在cookie中的购物车信息
        var arr = $.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];
        //console.log(arr);
        var num=0;
        for(var i=0;i<arr.length;i++){
        	num = num + arr[i].num;
        }
        $(".myallinfo_allamount").find('i').html(num);

        //结算价格
        var totPrice=0;
       for(var i=0;i<arr.length;i++){
      	totPrice += parseInt(arr[i].totPrice);
      		//console.log(totPrice)
      }
        $(".myallinfo_allpay").find('em').html(totPrice);
    }
    fn();

    //点击加入购物车
    $(document).on('click',".put-cart",function(e){
        e.preventDefault();
        //要加入购物车的商品信息
        var goodsImg =$(this).parents().siblings('.goods_img').find('img').attr('src');
        var goodsText=$(this).parent().siblings('.pro_name').text();
        var goodPrice=$(this).parent().siblings('.now_price').find("span").html();
        var goodsId = $(this).attr("id");
        console.log(goodsId);
        //获取之前保存在cookie中的购物车信息
        var arr = $.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];

        //遍历查找是否之前的购物车cookie中存在即将添加的商品
        var isExist = false; //表示是否存在该商品
        for(var i=0; i<arr.length; i++) {
            //如果存在该商品, 把数量增加
            if ( goodsId == arr[i].id) {
                arr[i].num++;
                arr[i].totPrice=arr[i].num*arr[i].price;
                isExist = true; //表示存在该商品
            }
        }

        //如果不存在, 则添加一个新商品
        if (!isExist) {
            //商品对象
            var goods = {
                id: goodsId,
                text: goodsText,
                price: goodPrice,
                img:goodsImg,
                num: 1, //商品数量
                totPrice:goodPrice
            }
            arr.push(goods);
        }
        //保存到cookie中
        $.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
        //console.log( $.cookie("cart") );

    })

    //点击删除购物车
    $(".item-buy-delete").click(function(){
        //$.cookie("cart", "", {expires:0, path:"/"}); //清空cookie
        var arr = $.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];
        for(var i=0;i<arr.length;i++){
            if ($(this).attr("id")==arr[i].id){
                arr.splice(i,1)
            }
        }
        $.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
        $(this).parent().parent().parent().remove();
        fn();

        return false;
    })

    //清空购物车
    $(".qingkong").click(function(){

        $.cookie("cart", "", {expires:0, path:"/"}); //清空cookie
        $(this).parents($(".group")).remove();
        fn();

        //return false;
    })

    //添加计算功能
    //点击减号
    $(".header_ginfo_amount span:first-child").click(function(){
    	var newArr = JSON.parse($.cookie("cart"));
        var value=$(this).siblings("input").val()-0;
        console.log(value);
        value--;
        if(value<=1){
            value=1;
        }
        $(this).siblings("input").val(value);
        //价格总计
        var zongji=value*(($(this).parents(".table_item_amount").siblings(".table_item_price").find("span").html())-0)
        $(this).parents(".table_item_amount").siblings(".table_item_allpay").find("p").html(zongji);
        //
        for(var i=0;i<newArr.length;i++){
    		if(newArr[i].id==$(this).parents("tr").attr("data-id")){
    			newArr[i].num= value;
    			newArr[i].totPrice = zongji;
    		}
    	}
        var numT=0;
        var totPriceT = 0;
        for(var i=0;i<newArr.length;i++){
        	numT = numT + newArr[i].num;
            totPriceT = totPriceT + parseInt(newArr[i].totPrice);
        }
        $(".myallinfo_allamount").find('i').html(numT);
        $(".myallinfo_allpay").find('em').html(totPriceT);
        $.cookie("cart",JSON.stringify(newArr), {expires:30, path:"/"});
    })

    //点击加号
    $(".header_ginfo_amount span:last-child").click(function(){
    	var newArr = JSON.parse($.cookie("cart"));
        var value=$(this).siblings("input").val()-0;
        value++;
        $(this).siblings("input").val(value);

        var zongji=value*(($(this).parents(".table_item_amount").siblings(".table_item_price").find("span").html())-0)
        $(this).parents(".table_item_amount").siblings(".table_item_allpay").find("p").html(zongji);

        for(var i=0;i<newArr.length;i++){
    		if(newArr[i].id==$(this).parents("tr").attr("data-id")){
    			newArr[i].num= value;
    			newArr[i].totPrice = zongji;
    		}
    	}
        var numT=0;
        var totPriceT = 0;
        for(var i=0;i<newArr.length;i++){
        	numT = numT + newArr[i].num;
            totPriceT = totPriceT + parseInt(newArr[i].totPrice);
        }
        $(".myallinfo_allamount").find('i').html(numT);
        $(".myallinfo_allpay").find('em').html(totPriceT);
        $.cookie("cart",JSON.stringify(newArr), {expires:30, path:"/"});

    })


    //=================批量删除================
   $(document).on("click",".shanchu",function(e){
   	e.preventDefault();
   	   var arr1 = JSON.parse($.cookie("cart"));
        $(":checkbox").each(function(){
        	if($(this).prop('checked')){
        		var id = $(this).parents('tr').attr("data-id");
        		$(this).parents('tr').remove();
        		for(k=0;k<arr1.length;k++){
        			if(arr1[k].id==id){
        				arr1.splice(k,1);
        			}
        		}
        	}		
        })
        $.cookie('cart',JSON.stringify(arr1),{expires:7,path:'/'});
             
   })

})

