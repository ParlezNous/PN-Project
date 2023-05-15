
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` int DEFAULT NULL,
  `created` timestamp NULL DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `sellers`;
CREATE TABLE `sellers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `shop` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `messages` (`id`, `author`, `created`, `content`) VALUES
(1, 2, NULL, 'Bienvenue sur le fil de discussion. Envoyez moi votre demande dès maintenant !'),
(2, 1, NULL, 'Merci !'),
(3, 1, NULL, 'Bonjour Jean Michel :-)'),
(4, 1, NULL, 'BOnjour à toi '),
(5, 1, NULL, 'test'),
(6, 1, NULL, 'test'),
(7, 2, NULL, 'test'),
(8, 2, NULL, 'test');

INSERT INTO `sellers` (`id`, `firstname`, `name`, `shop`, `email`, `password`) VALUES
(1, 'Jean-Michel', 'BROU', 'La Petite Italie', 'boutique@lapetiteitalie.fr', 'LPIpn2023+');

INSERT INTO `users` (`id`, `name`, `firstname`, `phone`) VALUES
(1, 'Lecoq', 'Franck', '0102030405'),
(2, 'Langlois', 'Mathieu', '0001020304'),
(3, NULL, NULL, NULL),
(4, NULL, NULL, NULL),
(5, NULL, NULL, NULL),
(6, NULL, NULL, NULL),
(7, NULL, NULL, NULL),
(8, NULL, NULL, NULL),
(9, NULL, NULL, NULL),
(10, 'Langlois', 'Mathieu', '0784212862'),
(11, 'Langlois', 'Mathieu', '0784212862'),
(12, 'Langlois', 'Emilie', '0123456789'),
(13, 'Langlois', 'Emilie', '0784212862'),
(14, 'Pastre', 'David', '1122334455'),
(15, 'test', 'test', '0102030405'),
(16, 'test', 'test', '0102030405'),
(17, 'Langlois', 'Mathieu', '0122334455'),
(18, 'Langlois', 'Math', '0784212862'),
(19, 'Langlois', 'Math', '0784212862'),
(20, 'test', 'test', 'test'),
(21, 'Langlos', 'Mathieu', '0102030405');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;