-- MySQL dump 10.16  Distrib 10.1.44-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: OMSKWatch
-- ------------------------------------------------------
-- Server version	10.1.44-MariaDB-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary table structure for view `ИНФО`
--

DROP TABLE IF EXISTS `ИНФО`;
/*!50001 DROP VIEW IF EXISTS `ИНФО`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `ИНФО` (
  `ID_тчк` tinyint NOT NULL,
  `Адрес` tinyint NOT NULL,
  `Содержание` tinyint NOT NULL,
  `Категория` tinyint NOT NULL,
  `ФИО` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `Категория`
--

DROP TABLE IF EXISTS `Категория`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Категория` (
  `ID_Категории` int(11) NOT NULL AUTO_INCREMENT,
  `Название` varchar(50) NOT NULL DEFAULT '0',
  `Иконка` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID_Категории`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Категория`
--

LOCK TABLES `Категория` WRITE;
/*!40000 ALTER TABLE `Категория` DISABLE KEYS */;
INSERT INTO `Категория` VALUES (1,'Много мусора','1'),(2,'Загрязнение воздуха','2'),(3,'Неблагоприятная обстановка','3'),(4,'Чистый воздух','4'),(5,'Благоприятная обстановка','5'),(6,'Добрые жильцы','6');
/*!40000 ALTER TABLE `Категория` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Коммент`
--

DROP TABLE IF EXISTS `Коммент`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Коммент` (
  `ID_ком` int(11) NOT NULL AUTO_INCREMENT,
  `ID_тчк` int(11) DEFAULT NULL,
  `ID_Категории` int(11) DEFAULT NULL,
  `Содержание` text,
  `ID_автора` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_ком`),
  KEY `Автор` (`ID_автора`),
  KEY `Тчк` (`ID_тчк`),
  KEY `Категория` (`ID_Категории`),
  CONSTRAINT `Автор` FOREIGN KEY (`ID_автора`) REFERENCES `Пользователь` (`ID_автора`),
  CONSTRAINT `Категория` FOREIGN KEY (`ID_Категории`) REFERENCES `Категория` (`ID_Категории`),
  CONSTRAINT `Тчк` FOREIGN KEY (`ID_тчк`) REFERENCES `Точка` (`ID_тчк`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Коммент`
--

LOCK TABLES `Коммент` WRITE;
/*!40000 ALTER TABLE `Коммент` DISABLE KEYS */;
INSERT INTO `Коммент` VALUES (1,1,1,'Много мусора',2),(2,2,2,'Загрязнение воздуха',3),(3,1,3,'Неблагоприятная обстановка',1),(4,4,1,'Слишком грязная улица',9),(5,9,4,'Дышиться свободно',7),(6,10,2,'Дышать невозможно!',8),(7,5,6,'Лучшие соседи',6),(8,4,3,'Постоянные шумы от соседей',10),(9,7,5,'Всегда чистая улица ',5),(10,7,6,'Понимающие соседи',4),(11,1,1,'Ходить невозможно!',1),(12,1,1,'ААндрей',1),(13,8,1,';dfkgdf',1),(14,8,1,'null',1),(15,16,1,'qwe',1);
/*!40000 ALTER TABLE `Коммент` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Пользователь`
--

DROP TABLE IF EXISTS `Пользователь`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Пользователь` (
  `ID_автора` int(11) NOT NULL AUTO_INCREMENT,
  `ФИО` text,
  PRIMARY KEY (`ID_автора`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Пользователь`
--

LOCK TABLES `Пользователь` WRITE;
/*!40000 ALTER TABLE `Пользователь` DISABLE KEYS */;
INSERT INTO `Пользователь` VALUES (1,'Разумовский Стасослав Володевич'),(2,'Алехандро Александр Александрович'),(3,'Дубровский Владимир Олегович'),(4,'Мишкин Владимир Олегович'),(5,'Донская Ольга Антоновна'),(6,'Мирская Ирина Александровна'),(7,'Богатырев Тимур Витольдович'),(8,'Семёнов Артур Ильич'),(9,'Зиновьева Софья Николаевна'),(10,'Мартынов Варлам Дмитриевич');
/*!40000 ALTER TABLE `Пользователь` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Точка`
--

DROP TABLE IF EXISTS `Точка`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Точка` (
  `ID_тчк` int(11) NOT NULL AUTO_INCREMENT,
  `x` decimal(9,6) DEFAULT NULL,
  `y` decimal(9,6) DEFAULT NULL,
  `Адрес` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID_тчк`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Точка`
--

LOCK TABLES `Точка` WRITE;
/*!40000 ALTER TABLE `Точка` DISABLE KEYS */;
INSERT INTO `Точка` VALUES (1,54.965531,73.387520,'ул.Пушкина дом 138'),(2,54.978527,73.386549,'ул.Красных Зорь 21/57'),(3,54.974596,73.386185,'ул.Полковая, 40'),(4,54.976306,73.387620,'ул.Маршала Жукова,72'),(5,54.983729,73.391719,'ул.Бухгольца'),(6,54.985976,73.394883,'Центральный округ'),(7,54.987384,73.390090,'ул.30 лет ВЛКСМ'),(8,54.987811,73.385178,'ул.Подгорная'),(9,54.984624,73.403189,'ул.6-я Линия, 70'),(10,54.975106,73.406486,'ул.Масленникова, 41'),(13,54.970746,73.420847,'Центральный парк культуры и отдыха'),(16,54.979111,73.377323,'{$message[1][2]}'),(17,54.993697,73.360273,'null');
/*!40000 ALTER TABLE `Точка` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `ИНФО`
--

/*!50001 DROP TABLE IF EXISTS `ИНФО`*/;
/*!50001 DROP VIEW IF EXISTS `ИНФО`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`176.59.144.8` SQL SECURITY DEFINER */
/*!50001 VIEW `ИНФО` AS select `Точка`.`ID_тчк` AS `ID_тчк`,`Точка`.`Адрес` AS `Адрес`,`Коммент`.`Содержание` AS `Содержание`,`Категория`.`Название` AS `Категория`,`Пользователь`.`ФИО` AS `ФИО` from (((`Коммент` join `Точка` on((`Коммент`.`ID_тчк` = `Точка`.`ID_тчк`))) join `Категория` on((`Коммент`.`ID_Категории` = `Категория`.`ID_Категории`))) join `Пользователь` on((`Коммент`.`ID_автора` = `Пользователь`.`ID_автора`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-24 10:13:54
