-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: mow_backend
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `admin_id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `user_admin_fk` (`user_id`),
  CONSTRAINT `user_admin_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'John','Doe',2),(2,'Jhonn Vincent','Arcipe',3),(3,'New','Admin',4),(4,'New','Admin',5),(5,'MerryMeals','Admin',7);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meal_item`
--

DROP TABLE IF EXISTS `meal_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meal_item` (
  `meal_item_id` bigint NOT NULL AUTO_INCREMENT,
  `day` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`meal_item_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meal_item`
--

LOCK TABLES `meal_item` WRITE;
/*!40000 ALTER TABLE `meal_item` DISABLE KEYS */;
INSERT INTO `meal_item` VALUES (3,'Monday','Seafood','Crab'),(4,'Tuesday','Meat','Rib Steak'),(5,'Wednesday','Vegetables','Malai Kofta'),(6,'Thursday','Vegetables','Palak Paneer Bhurji.'),(7,'Friday','Vegetable','Hyderabadi Bagara Baingan (Indian Eggplant Curry)'),(8,'Monday','Seafoods','Giant Lobster'),(9,'Tuesday','Indian Dish','Curry with masala'),(10,'Friday','Italian Meals','Ratatouille');
/*!40000 ALTER TABLE `meal_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meal_order`
--

DROP TABLE IF EXISTS `meal_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meal_order` (
  `meal_order_id` bigint NOT NULL AUTO_INCREMENT,
  `friday_meal` varchar(255) DEFAULT NULL,
  `monday_meal` varchar(255) DEFAULT NULL,
  `thursday_meal` varchar(255) DEFAULT NULL,
  `tuesday_meal` varchar(255) DEFAULT NULL,
  `wednesday_meal` varchar(255) DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`meal_order_id`),
  KEY `member_id` (`member_id`),
  CONSTRAINT `member_id` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meal_order`
--

LOCK TABLES `meal_order` WRITE;
/*!40000 ALTER TABLE `meal_order` DISABLE KEYS */;
INSERT INTO `meal_order` VALUES (1,'Hyderabadi Bagara Baingan (Indian Eggplant Curry)','Giant Lobster','Palak Paneer Bhurji.','Rib Steak','Malai Kofta',1);
/*!40000 ALTER TABLE `meal_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `member_id` bigint NOT NULL AUTO_INCREMENT,
  `allergies` varchar(255) DEFAULT NULL,
  `caregiver_contact` varchar(255) DEFAULT NULL,
  `caregiver_name` varchar(255) DEFAULT NULL,
  `health_condition` varchar(255) DEFAULT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `relationship` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`member_id`),
  KEY `user_fk` (`user_id`),
  CONSTRAINT `user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'none','none','none','none','09773239337','1231-01-20T16:52:28.000Z','Ezekiel','Lucena','','','none',6),(2,'none','none','','none','09773239337','2000-01-18T16:00:00.000Z','Jhonn Vincent','Arcipe','','','none',8);
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_center`
--

DROP TABLE IF EXISTS `service_center`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_center` (
  `sc_id` bigint NOT NULL AUTO_INCREMENT,
  `contact_number` varchar(255) DEFAULT NULL,
  `sc_details` varchar(255) DEFAULT NULL,
  `sc_latitude` varchar(255) DEFAULT NULL,
  `sc_longitude` varchar(255) DEFAULT NULL,
  `sc_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sc_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_center`
--

LOCK TABLES `service_center` WRITE;
/*!40000 ALTER TABLE `service_center` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_center` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `is_approved` bit(1) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `provider` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'zedrick@gmail.com',NULL,_binary '\0','$2a$10$MGood4UAnWjZybtgP6izb..WAOp1HrIcSwRoRXSzJPxsw7YSWEgoW','local','ROLE_VOLUNTEER'),(2,'admin@example.com',NULL,_binary '\0','$2a$10$qF0H7oNUUgNvbUBIflK2l.pdvDIaKVEtEYWywQWtBkTwp71n3Rb2m','local','ROLE_ADMIN'),(3,'vincent@admin.com',NULL,_binary '\0','$2a$10$tpbqFrfIxEr07vSED0RP6OkV6VeSFLhE1UYLuywjcXnT7q1DBCZ3u','local','ROLE_ADMIN'),(4,'new@admin.com',NULL,_binary '\0','$2a$10$cZPoU.ceMmUis1xdHNaoSuiHUnlJ7f.Gogy3wTgyA.PlTHS14bk6G','local','ROLE_ADMIN'),(5,'new1@admin.com',NULL,_binary '\0','$2a$10$0t5UanlCmOEjIqCzvruLtuZzqRQIgA18vCce086bDpDsEBME/flwC','local','ROLE_ADMIN'),(6,'zek@gmail.com',NULL,_binary '\0','$2a$10$DWYRg/LBXmzSKC.Ebuviu.QpAKHKA88j.GiOhr0LspKZ7nygDzD4a','local','ROLE_MEMBER'),(7,'group10@admin.com',NULL,_binary '\0','$2a$10$3Unlb55H...izbPAfAcmW.HJjRu07ToUWo1rc6XAcHorRjXUBNEVq','local','ROLE_ADMIN'),(8,'member@gmail.com',NULL,_binary '\0','$2a$10$LYjk.d3h5/R6MKiyXqCl3.BcdizHrIUntxQUDUEmNs9zZkr5cYArS','local','ROLE_MEMBER');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `volunteer`
--

DROP TABLE IF EXISTS `volunteer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `volunteer` (
  `volunteer_id` bigint NOT NULL AUTO_INCREMENT,
  `contact_number` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `group_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `representing_group` varchar(255) DEFAULT NULL,
  `station` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`volunteer_id`),
  KEY `vl_fk` (`user_id`),
  CONSTRAINT `vl_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `volunteer`
--

LOCK TABLES `volunteer` WRITE;
/*!40000 ALTER TABLE `volunteer` DISABLE KEYS */;
INSERT INTO `volunteer` VALUES (1,'123','2023-08-22T16:00:00.000Z','Zedrick Emmanuel ','riders',' Zafra','','','true','Delivery',1);
/*!40000 ALTER TABLE `volunteer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-10 19:03:55
