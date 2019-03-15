//===================小知推荐轮播=========================
$(function(){
    var _list = $(".rec-box-list");
    var _li = $(".rec-box-list .rec-box-list2");
    _li.first().clone().appendTo(_list);
    var size =$(".rec-box-list .rec-box-list2").length;
    //console.log(size); //5

    var i = 0;
//上一页
    $(".page-left").click(function(){
        i--;
        move();
    });
//下一页
    $(".page-right").click(function(){
        i++;
        move();
    });

    function move(){
        //如果超出左边界
        if(i<0){
            _list.css("left",-(size-1)*960); //瞬间移动到第五张图
            i = size -2; //即将移动到第4张图（i=3）
        }
        //如果超出右边界
        if( i>=size ){
            _list.css("left",0); //瞬间移动到第一张图（非动画）
            i = 1; //即将移动到第二张图（）
        }
        //动画移动
        _list.stop().animate({left:-i*960},500);
    }
})


//========================购物车======================

$(function(){
    var uid = location.search;
    //console.log(uid);
    //console.log($.cookie("cart"));
    //从cookie中获取购物车的所有商品
    var arr = $.cookie("cart");

    if (arr) {
        arr = JSON.parse(arr);
        //console.log(arr);

        //遍历数组, 显示所有商品的信息
            for (var i = 0; i < arr.length; i++) {
                var obj = arr[i];
                var goodsImg = obj.img;
                var goodsId = obj.id;
                var goodsPrice = obj.price;
                var goodsText = obj.text;
                var num=obj.num;
                var totalPrice = (num-0)*goodsPrice;
                //将创建的节点添加到页面上
                var _tr = "<tr class='group' data-id="+goodsId+"><td class='table_item_name mycart_listpro_show'><input class='table_item_check' type='checkbox'><div class='mycart_selpro'><p class='selpro_img'><a target='_blank' href=''><img src="+goodsImg+"/></a></p><div class='selpro_info'><p class='selpro_name'><a target='_blank' href=''>"+goodsText+"</a></p></div></div></td><td class='table_item_price'><p>￥<span>"+goodsPrice+"</span></p></td><td class='table_item_amount'><div class='table_item_amoutbox'><p class='header_ginfo_amount'><span class='decrease_num h_amout_down'></span><input type='text' value="+num+"><span class='increase_num h_amout_up'></span></p></div></td><td class='table_item_allpay'><p>"+totalPrice+"</p></td><td class='table_item_integral'><p>"+goodsPrice+"</p></td><td class='table_item_operate'><p><a class='item-buy-delete'  href='' id="+goodsId+">删除</a><a href='' class='p_favorite'>收藏</a></p></td></tr>"
                $("._tbody").append(_tr);
            }
    }
})

