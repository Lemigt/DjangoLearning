-- MySQL dump 10.13  Distrib 5.6.16, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: ZWYZ
-- ------------------------------------------------------
-- Server version	5.6.16-1~exp1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `app_loopimg`
--

DROP TABLE IF EXISTS `app_loopimg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_loopimg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_loopimg`
--

LOCK TABLES `app_loopimg` WRITE;
/*!40000 ALTER TABLE `app_loopimg` DISABLE KEYS */;
INSERT INTO `app_loopimg` VALUES (1,'images/index/lunbo1.jpg'),(2,'images/index/lunbo2.jpg'),(3,'images/index/lunbo3.jpg'),(4,'images/index/lunbo4.jpg'),(5,'images/index/lunbo5.jpg');
/*!40000 ALTER TABLE `app_loopimg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add group',2,'add_group'),(5,'Can change group',2,'change_group'),(6,'Can delete group',2,'delete_group'),(7,'Can add user',3,'add_user'),(8,'Can change user',3,'change_user'),(9,'Can delete user',3,'delete_user'),(10,'Can add permission',4,'add_permission'),(11,'Can change permission',4,'change_permission'),(12,'Can delete permission',4,'delete_permission'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add loop img',7,'add_loopimg'),(20,'Can change loop img',7,'change_loopimg'),(21,'Can delete loop img',7,'delete_loopimg'),(22,'Can add goods',8,'add_goods'),(23,'Can change goods',8,'change_goods'),(24,'Can delete goods',8,'delete_goods'),(25,'Can add user',9,'add_user'),(26,'Can change user',9,'change_user'),(27,'Can delete user',9,'delete_user'),(28,'Can add cart',10,'add_cart'),(29,'Can change cart',10,'change_cart'),(30,'Can delete cart',10,'delete_cart'),(31,'Can add order',11,'add_order'),(32,'Can change order',11,'change_order'),(33,'Can delete order',11,'delete_order'),(34,'Can add order goods',12,'add_ordergoods'),(35,'Can change order goods',12,'change_ordergoods'),(36,'Can delete order goods',12,'delete_ordergoods');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(10,'app','cart'),(8,'app','goods'),(7,'app','loopimg'),(11,'app','order'),(12,'app','ordergoods'),(9,'app','user'),(2,'auth','group'),(4,'auth','permission'),(3,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2019-03-14 10:56:39.611185'),(2,'auth','0001_initial','2019-03-14 10:56:40.011850'),(3,'admin','0001_initial','2019-03-14 10:56:40.085265'),(4,'admin','0002_logentry_remove_auto_add','2019-03-14 10:56:40.113484'),(5,'app','0001_initial','2019-03-14 10:56:40.136185'),(6,'contenttypes','0002_remove_content_type_name','2019-03-14 10:56:40.228942'),(7,'auth','0002_alter_permission_name_max_length','2019-03-14 10:56:40.257880'),(8,'auth','0003_alter_user_email_max_length','2019-03-14 10:56:40.291050'),(9,'auth','0004_alter_user_username_opts','2019-03-14 10:56:40.305298'),(10,'auth','0005_alter_user_last_login_null','2019-03-14 10:56:40.355808'),(11,'auth','0006_require_contenttypes_0002','2019-03-14 10:56:40.357603'),(12,'auth','0007_alter_validators_add_error_messages','2019-03-14 10:56:40.378304'),(13,'auth','0008_alter_user_username_max_length','2019-03-14 10:56:40.417611'),(14,'sessions','0001_initial','2019-03-14 10:56:40.458376'),(15,'app','0002_goods','2019-03-15 00:38:10.979050'),(16,'app','0003_auto_20190315_0047','2019-03-15 00:47:10.883966'),(17,'app','0004_auto_20190315_0058','2019-03-15 00:58:30.325158'),(18,'app','0005_goods_sales','2019-03-15 06:37:40.679467'),(19,'app','0006_auto_20190315_0916','2019-03-15 09:16:22.026217'),(20,'app','0007_user','2019-03-15 09:18:00.709042'),(21,'app','0008_cart','2019-03-16 01:12:35.219468'),(22,'app','0009_cart_isselect','2019-03-16 09:01:08.225220'),(23,'app','0010_order_ordergoods','2019-03-16 09:51:52.923030');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('r0z4croq5qj2xb6qg84wkig68kci2woa','MWFmN2ZkMjJkZmNjZWRkMDI0MGFlZDk4MzNkYjAyYWE5NzRlNDQ1MDp7InRva2VuIjoiODA5MWFhZTFlMjUyYjk2NTUxYTIxMDM1NjYxNmVjNzkifQ==','2019-03-30 02:57:01.334961');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zwyz_cart`
--

DROP TABLE IF EXISTS `zwyz_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zwyz_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `isselect` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `zwyz_cart_goods_id_a784ad29_fk_zwyz_goods_id` (`goods_id`),
  KEY `zwyz_cart_user_id_d36fdebe_fk_zwyz_user_id` (`user_id`),
  CONSTRAINT `zwyz_cart_goods_id_a784ad29_fk_zwyz_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `zwyz_goods` (`id`),
  CONSTRAINT `zwyz_cart_user_id_d36fdebe_fk_zwyz_user_id` FOREIGN KEY (`user_id`) REFERENCES `zwyz_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zwyz_cart`
--

LOCK TABLES `zwyz_cart` WRITE;
/*!40000 ALTER TABLE `zwyz_cart` DISABLE KEYS */;
INSERT INTO `zwyz_cart` VALUES (14,1,6,1,0);
/*!40000 ALTER TABLE `zwyz_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zwyz_goods`
--

DROP TABLE IF EXISTS `zwyz_goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zwyz_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `longname` varchar(100) NOT NULL,
  `goodsimg` varchar(255) NOT NULL,
  `brandname` varchar(100) NOT NULL,
  `typename` varchar(100) NOT NULL,
  `brandid` varchar(10) NOT NULL,
  `typeid` varchar(10) NOT NULL,
  `price` double NOT NULL,
  `marketprice` double NOT NULL,
  `detailid` varchar(10) NOT NULL,
  `fullgift` varchar(100) NOT NULL,
  `fullminus` varchar(200) NOT NULL,
  `sales` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zwyz_goods`
--

LOCK TABLES `zwyz_goods` WRITE;
/*!40000 ALTER TABLE `zwyz_goods` DISABLE KEYS */;
INSERT INTO `zwyz_goods` VALUES (1,'医朵eto咬唇妆口红膏3号4.2g ','images/list/03.jpg','医朵','唇彩/口红','1','1',49,108,'1','医朵品牌团满258送舒德尔玛+口红','贝德玛品牌团 满199减30',23),(2,'医朵eto咬唇妆口红膏2号4.2g ','images/list/04.jpg','医朵','唇彩/口红','1','1',45,99,'2','医朵品牌团满258送舒德尔玛+口红','贝德玛品牌团 满199减30',45),(3,'医朵eto咬唇妆口红膏1号4.2g ','images/list/02.jpg','医朵','唇彩/口红','1','1',59,118,'3','医朵品牌团满258送舒德尔玛+口红','贝德玛品牌团 满199减30',34),(4,'米蔻丰盈炫彩女神款口红 (嫣玫色）','images/list/01.jpg','米蔻','唇彩/口红','2','1',79,121,'4','米蔻品牌团满258送玛莎拉蒂','巴黎欧莱雅品牌团 满199减50000',9999),(5,'医朵exo妖魔鬼怪唇线笔1号3.2g','images/list/list-21.jpg','医朵','唇线笔','1','2',38,59,'5','医朵品牌团满258送舒德尔玛+口红','贝德玛品牌团 满199减30',23),(6,'米蔻缤纷炫彩唇线笔','images/list/list-20.jpg','米蔻','唇线笔','2','2',42,299,'6','米蔻品牌团满258送玛莎拉蒂','巴黎欧莱雅品牌团 满199减50000',9999);
/*!40000 ALTER TABLE `zwyz_goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zwyz_order`
--

DROP TABLE IF EXISTS `zwyz_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zwyz_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createtime` datetime(6) NOT NULL,
  `updatetime` datetime(6) NOT NULL,
  `status` int(11) NOT NULL,
  `identifier` varchar(256) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `zwyz_order_user_id_9ca802ff_fk_zwyz_user_id` (`user_id`),
  CONSTRAINT `zwyz_order_user_id_9ca802ff_fk_zwyz_user_id` FOREIGN KEY (`user_id`) REFERENCES `zwyz_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zwyz_order`
--

LOCK TABLES `zwyz_order` WRITE;
/*!40000 ALTER TABLE `zwyz_order` DISABLE KEYS */;
INSERT INTO `zwyz_order` VALUES (23,'2019-03-17 01:44:48.303193','2019-03-17 01:44:48.303227',0,'1552787088.30287152547',1);
/*!40000 ALTER TABLE `zwyz_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zwyz_ordergoods`
--

DROP TABLE IF EXISTS `zwyz_ordergoods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zwyz_ordergoods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `zwyz_ordergoods_goods_id_9e6f2f38_fk_zwyz_goods_id` (`goods_id`),
  KEY `zwyz_ordergoods_order_id_30dc6b51_fk_zwyz_order_id` (`order_id`),
  CONSTRAINT `zwyz_ordergoods_order_id_30dc6b51_fk_zwyz_order_id` FOREIGN KEY (`order_id`) REFERENCES `zwyz_order` (`id`),
  CONSTRAINT `zwyz_ordergoods_goods_id_9e6f2f38_fk_zwyz_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `zwyz_goods` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zwyz_ordergoods`
--

LOCK TABLES `zwyz_ordergoods` WRITE;
/*!40000 ALTER TABLE `zwyz_ordergoods` DISABLE KEYS */;
INSERT INTO `zwyz_ordergoods` VALUES (13,1,3,23);
/*!40000 ALTER TABLE `zwyz_ordergoods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zwyz_user`
--

DROP TABLE IF EXISTS `zwyz_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zwyz_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `telnumber` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `telnumber` (`telnumber`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zwyz_user`
--

LOCK TABLES `zwyz_user` WRITE;
/*!40000 ALTER TABLE `zwyz_user` DISABLE KEYS */;
INSERT INTO `zwyz_user` VALUES (1,'15779887633','bf6dc3e4c562d083d7a459828db1c474');
/*!40000 ALTER TABLE `zwyz_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-17 11:29:28
