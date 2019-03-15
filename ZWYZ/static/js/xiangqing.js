//===============点击top回到顶部=========================
$(function(){
    $("#sidebar_top").click(function(){
        $("body").animate({
            scrollTop:0
        },100);
    })
})


//===========商品详情=================
$(function(){

    $(window).scroll(function(){
        var top=$(window).scrollTop();
        var nav=$(".detail_infor_nav")

        if (top>=1500) {
            nav.fadeIn({"dispaly":"block"},1000);
        }else{
            nav.fadeOut({"dispaly":"none"},1000);
        }

    })
})

//====================列表页跳转到详情页========================
$(function(){

    var goodId = location.search.replace("?","");
    if( goodId=="" ){
        alert("没有产品")
    }else{
        goodOp(goodId)
    }

    function goodOp(id){
        $.get("json/kouhong.json", function(data) {
            for (var i = 0; i < data.length; i++) {

                var obj = data[i];
                var img = obj.img;
                //var id = obj.id;
                var price = obj.price;
                var del = obj.del;
                var text = obj.text;

                if(id==obj.id){
                    console.log(1);
                    //将创建的节点添加到页面上
                    var imgNode = "	<div id='smallImg' class='detail_single_img' ><img src="+ img +" alt="+text+"><div id='smallArea'></div></div><div id='bigArea'><img id='bigImg' src="+img+"/></div>"
                    //var imgNode = "<div class='detail_single_img'><img src=" + img + " alt=" + text + "></div>";
                    var introNode = "<div class='detail_single_introcol1'><h1 class='dsingle_introcol1_name'>" + text + "</h1><div class='dsingle_introcol1_price'><p class='dsingle_nowprice'><i>￥</i><span>" + price + "</span></p><p class='dsingle_hisprice'><span>市场价：</span><del>" + del + "</del></p></div></div>"
                    $(".detail_single_info").append(imgNode);
                    $(".detail_single_introcomment").before(introNode);
                }
            }
            //================放大镜========================

            var _smallImg = $("#smallImg"); //小图
            var _smallArea = $("#smallArea"); //小区域
            var _bigImg = $("#bigImg"); //大图
            var _bigArea = $("#bigArea"); //大区域

            //bigImg.width / smallImg.width = bigArea.width/smallArea.width
            //smallArea.width = bigArea.width * smallImg.width / bigImg.width
            //计算小区域的宽高
            //width() == innnerWidth() == outerWidth()
            _smallArea.width( _bigArea.width() * _smallImg.width() / _bigImg.width() );
            _smallArea.height( _bigArea.height() * _smallImg.height() / _bigImg.height() );

            //放大系数/放大倍数
            var scale = _bigImg.width() / _smallImg.width();
            //scale = 4


            //mousemove
            _smallImg.mousemove(function(e){
                _smallArea.show(); //显示小区域
                _bigArea.show();
                //clientX: 可视区域的x值
                //pageX: 距离窗口左边的x值
                var x = e.pageX - _smallImg.offset().left - _smallArea.width()/2;
                var y = e.pageY - _smallImg.offset().top - _smallArea.height()/2;
                //console.log(e.clientX);
                //console.log(e.pageX);

                //控制小区域范围在小图内
                if (x <= 0) { //不超出左边
                    x = 0;
                }
                else if (x >= _smallImg.width()-_smallArea.width()) { //不超出右边
                    x = _smallImg.width()-_smallArea.width();
                }
                if (y <= 0) { //不超出上边
                    y = 0;
                }
                else if (y >= _smallImg.height()-_smallArea.height()) { //不超出下边
                    y = _smallImg.height()-_smallArea.height();
                }


                //移动小区域
                _smallArea.css({left: x, top: y});

                //移动大图
                _bigImg.css({left: -x*scale, top: -y*scale});

            })

            //mouseleave
            _smallImg.mouseleave(function(){
                _smallArea.hide(); //隐藏小区域
                _bigArea.hide();
            })


        })
    }
});

