from django.db import models

# Create your models here.


class BaseModel(models.Model):
    img = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    trackid = models.CharField(max_length=10)

    class Meta:
        abstract = True


class Wheel(BaseModel):
    class Meta:
        db_table = 'axf_wheel'


# 导航模型类
class Nav(BaseModel):
    class Meta:
        db_table = 'axf_nav'



class Mustbuy(BaseModel):
    class Meta:
        db_table = 'axf_mustbuy'


class Shop(BaseModel):
    class Meta:
        db_table = 'axf_shop'


class Main(models.Model):
    trackid = models.CharField(max_length=10)
    name = models.CharField(max_length=100)
    img = models.CharField(max_length=100)
    categoryid = models.CharField(max_length=10)
    brandname = models.CharField(max_length=100)

    img1 = models.CharField(max_length=100)
    childcid1 = models.CharField(max_length=10)
    productid1 = models.CharField(max_length=10)
    longname1 = models.CharField(max_length=100)
    price1 = models.CharField(max_length=10)
    marketprice1 = models.CharField(max_length=10)

    img2 = models.CharField(max_length=100)
    childcid2 = models.CharField(max_length=10)
    productid2 = models.CharField(max_length=10)
    longname2 = models.CharField(max_length=100)
    price2 = models.CharField(max_length=10)
    marketprice2 = models.CharField(max_length=10)

    img3 = models.CharField(max_length=100)
    childcid3 = models.CharField(max_length=10)
    productid3 = models.CharField(max_length=10)
    longname3 = models.CharField(max_length=100)
    price3 = models.CharField(max_length=10)
    marketprice3 = models.CharField(max_length=10)

    class Meta:
        db_table = 'axf_mainshow'


class Foodtype(models.Model):
    typeid = models.CharField(max_length=10)
    typename = models.CharField(max_length=100)
    childtypenames = models.CharField(max_length=200)
    typesort = models.IntegerField()

    class Meta:
        db_table = 'axf_foodtypes'


class Goods(models.Model):
    # 商品ID
    productid = models.CharField(max_length=255)
    # 商品图片
    productimg = models.CharField(max_length=255)
    # 商品名称
    productname = models.CharField(max_length=255)
    # 商品长名称
    productlongname = models.CharField(max_length=255)
    # 是否精选
    isxf = models.IntegerField()
    # 是否买一送一
    pmdesc = models.IntegerField()
    # 商品规格
    specifics = models.CharField(max_length=255)
    # 商品价格
    price = models.FloatField()
    # 商品超市价格
    marketprice = models.FloatField()
    # 分类ID
    categoryid = models.IntegerField()
    # 子类ID
    childcid = models.IntegerField()
    # 子类名称
    childcidname = models.CharField(max_length=255)
    # 详情页ID
    dealerid = models.CharField(max_length=255)
    # 库存
    storenums = models.IntegerField()
    # 销售量
    productnum = models.IntegerField()

    class Meta:
        db_table = 'axf_goods'



class User(models.Model):
    # 邮箱
    email = models.CharField(max_length=40, unique=True)
    # 密码
    password = models.CharField(max_length=256)
    # 昵称
    name = models.CharField(max_length=100)
    # 头像
    img = models.CharField(max_length=40, default='axf.png')
    # 等级
    rank = models.IntegerField(default=1)

    class Meta:
         db_table = 'axf_user'



class Cart(models.Model):

    user = models.ForeignKey(User)

    goods = models.ForeignKey(Goods)

    number = models.IntegerField()

    isselect = models.BooleanField(default=True)

    isdelete = models.BooleanField(default=False)

    class Meta:
        db_table = 'axf_cart'


class Order(models.Model):

    user = models.ForeignKey(User)

    createtime = models.DateTimeField(auto_now_add=True)

    updatetime = models.DateTimeField(auto_now=True)
    # 状态
    # -1 过期
    # 0 未付款
    # 1 已付款，待发货
    # 2 已发货，待收货
    # 3 已收货，待评价
    # 4 已评价
    status = models.IntegerField(default=0)

    identifier = models.CharField(max_length=256)


class OrderGoods(models.Model):

    order = models.ForeignKey(Order)

    goods = models.ForeignKey(Goods)

    number = models.IntegerField()