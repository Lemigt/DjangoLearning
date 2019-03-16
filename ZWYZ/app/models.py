from django.db import models

# Create your models here.

class LoopImg(models.Model):
    imgurl = models.CharField(max_length=100)



class Goods(models.Model):
    longname = models.CharField(max_length=100)
    goodsimg = models.CharField(max_length=255)
    brandname = models.CharField(max_length=100)
    typename = models.CharField(max_length=100)
    brandid = models.CharField(max_length=10)
    typeid = models.CharField(max_length=10)
    # 商品价格
    price = models.FloatField()
    # 商品超市价格
    marketprice = models.FloatField()
    # 商品月销量
    sales = models.IntegerField(default=0)
    # 详情ID
    detailid = models.CharField(max_length=10)
    # 满赠
    fullgift = models.CharField(max_length=100, default='')
    #满减
    fullminus = models.CharField(max_length=200, default='')

    class Meta:
        db_table = 'zwyz_goods'


class User(models.Model):
    telnumber = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=100)

    class Meta:
        db_table = 'zwyz_user'


class Cart(models.Model):
    user = models.ForeignKey(User)
    goods = models.ForeignKey(Goods)
    number = models.IntegerField()
    isselect = models.IntegerField(default=0)
    class Meta:
        db_table = 'zwyz_cart'


# class Order(models.Model):
#     user = models.ForeignKey(User)
#
#     createtime = models.DateTimeField(auto_now_add=True)
#
#     updatetime = models.DateTimeField(auto_now=True)
#
#     status = models.IntegerField(default=0)
#
#     identifier = models.CharField(max_length=256)
#     class Meta:
#         db_table = 'zwyz_order'


# class OrderGoods(models.Model):
#     order = models.ForeignKey(Order)
#
#     goods = models.ForeignKey(Goods)
#
#     number = models.IntegerField()
#     class Meta:
#         db_table = 'zwyz_ordergoods'
