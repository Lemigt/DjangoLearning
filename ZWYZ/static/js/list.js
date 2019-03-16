
//=================商品首页列表展开收起===============
$(function(){
	var flag = true; //定义一个标识， flag = true的时候，触发点击事件
	$(".lbm_fcbtn_one").click(function(){
	    if(flag){
			$('.iscroll_contbox_one').css("height","200");
			$(this).find('span').html('收起');
			flag = false;
	    }else {
			$('.iscroll_contbox_one').css("height","75");
			$(this).find('span').html('展开');
			flag = true;
		}
	})
	$(".lbm_fcbtn_two").click(function(){
		if(flag){
			$('.iscroll_contbox_two').css("height","200");
			$(this).find('span').html('收起');
			flag = false;
		}else {
			$('.iscroll_contbox_two').css("height","75");
			$(this).find('span').html('展开');
			flag = true;
		}
	})
})

//=================列表详情=================
$(function(){
	 $.get("json/kouhong.json", function(data) {
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var img = obj.img;
            var id = obj.id;
            var price = obj.price;
            var del = obj.del;
            var text = obj.text;

            //将创建的节点添加到页面上
            var _list= "<li><div class='goods_img'><a href=xiangqing.html?"+id+"><img src="+img+" /></a> </div><div class='goods_price'><p class='pro_name'><a href='xiangqing.html'>"+text+"</a></p><p class='now_price'><i>￥</i><span class='price_day'>"+price+"</span><del>"+del+"</del></p><p class='buy_btn'><a class='put-cart' href='' id="+id+">加入购物车</a></p></div></li>";
            $("#bfd_show_fu").append(_list);
        }
    });
})

//===============点击top回到顶部=========================
$(function(){
	$("#sidebar_top").click(function(){
		$("body").animate({
			scrollTop:0
		},100);
	})
})

//==================侧边栏鼠标滑过=================
$(function(){
	$('.sidebar_item').hover(function(){
		$(this).find($(".sitem_btn")).css("background-color","#00c8ff");
	},function(){
		$(this).find($(".sitem_btn")).css("background-color","#6c6c6c");
	})

	$('#sidebar_login').hover(function(){
		$(this).find('div').fadeIn();
	},function(){
		$(this).find('div').stop(true,true).fadeOut();
	});

	$('#sidebar_collect').hover(function(){
		$(this).find('div').fadeIn();
	},function(){
		$(this).find('div').stop(true,true).fadeOut();
	});

	$('#sidebar_foot').hover(function(){
		$(this).find('div').fadeIn();
	},function(){
		$(this).find('div').stop(true,true).fadeOut();
	});

	$('#sidebar_servers').hover(function(){
		$(this).find('div').fadeIn();
	},function(){
		$(this).find('div').stop(true,true).fadeOut();
	});
})


//===================侧边栏购物车===========================
$(function(){
	$(document).on('click',".put-cart",function(e) {
        //点击加入购物车侧边栏数量改变
		var arr = $.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];
		var num=0;
		for(var i=0;i<arr.length;i++){
			num+=arr[i].num;
		}
        $('.sshopcar_amout').text(num);
	});
	var arr = $.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];
	var num=0;
	for(var i=0;i<arr.length;i++){
		num+=arr[i].num;
	}
	$('.sshopcar_amout').text(num);
})

//=========================点击加入购物车动画效果=============
$(function(){

	var offset = $(".sitem_btnbg").offset();  //结束的地方的元素
	$('body').on('click','.put-cart',function(event){   //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点

		var addcar = $(this);
		var imgSrc = addcar.parent().parent().siblings().find('img').attr('src');

		var flyer = $('<img class="u-flyer" src="' + imgSrc + '">');

		flyer.fly({
			//飞的起始位置
			start: {
				left: event.clientX,
				top: event.pageY - $(window).scrollTop()
			},
			//飞的结束位置
			end: {
				left: offset.left,
				top: offset.top,
				height:0
				//width:10
			},
			onEnd: function () {
				flyer.remove()
			}
		});

	})

})


$(function () {
	$('.brand').click(function () {
		// $that = $(this)
		$(this).addClass('select')
		$(this).siblings().removeClass('select')
		brandid = $(this).attr('brand-id')
		typeid = $('#typelist>.select').attr('type-id')

		if (typeid){

			console.log(brandid, typeid)

			$('#bfd_show_fu>li').show()
			$('#bfd_show_fu>li').each(function () {
				if ($(this).attr('brand-id') != brandid){
					$(this).hide()
				}
				if ($(this).attr('type-id') != typeid){
						$(this).hide()
				}
			})
			total()

		} else {
			typeid = '0'
			console.log(brandid, typeid)
			$('#bfd_show_fu>li').show()
			$('#bfd_show_fu>li').each(function () {
				if ($(this).attr('brand-id') != brandid){
					$(this).hide()
				}
			})
			total()
		}


		// request_data = {
		// 	'typeid':typeid,
		// 	'brandid':brandid
		// }

	})


	$('.type').click(function () {

		$that = $(this)
		$(this).addClass('select')
		$(this).siblings().removeClass('select')
		typeid = $(this).attr('type-id')
		brandid = $('#brandlist>.select').attr('brand-id')
		if (brandid){

			console.log(brandid, typeid)
			$('#bfd_show_fu>li').show()
			$('#bfd_show_fu>li').each(function () {
				if ($(this).attr('type-id') != typeid){
					$(this).hide()
				}
				if ($(this).attr('brand-id') != brandid){
						$(this).hide()
				}
			})
			total()
		} else {
			brandid = '0'
			console.log(brandid, typeid)
			$('#bfd_show_fu>li').show()
			$('#bfd_show_fu>li').each(function () {
				if ($(this).attr('type-id')!= typeid){
					$(this).hide()
				}
			})
			total()
		}
		// request_data = {
		// 	'typeid':typeid,
		// 	'brandid':brandid
		// }

		// $.get('/classify/', request_data, function (response) {
		// 		console.log(response.)
		// })

	})

	function total() {
		var num = 0
		$('#bfd_show_fu>li').each(function () {
			if ($(this).is(":hidden")) {

			}else {
				num += 1
			}
		})
		console.log(num)
		$('#goodsnum').html(num)
	}



})

























