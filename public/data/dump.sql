/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: Messages
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `Messages` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `senderName` text NOT NULL,
  `senderId` int(11) NOT NULL,
  `receiverId` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: Users
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `Users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `user` text NOT NULL,
  `password` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: Messages
# ------------------------------------------------------------

INSERT INTO
  `Messages` (
    `ID`,
    `senderName`,
    `senderId`,
    `receiverId`,
    `createdAt`,
    `updatedAt`,
    `message`
  )
VALUES
  (
    1,
    'steve',
    2,
    3,
    '2018-10-08',
    '2018-10-08',
    '240081376a049f5a163881245013c569:5338fbfeaf8e676b0d8a3bb84868bac3'
  );
INSERT INTO
  `Messages` (
    `ID`,
    `senderName`,
    `senderId`,
    `receiverId`,
    `createdAt`,
    `updatedAt`,
    `message`
  )
VALUES
  (
    2,
    'steve',
    2,
    3,
    '2018-10-08',
    '2018-10-08',
    'ddeb5950df4637b33e0a53a74917f215:44ead83e0d94af8ddc9d145920a16768'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: Users
# ------------------------------------------------------------

INSERT INTO
  `Users` (`ID`, `user`, `password`, `createdAt`, `updatedAt`)
VALUES
  (
    2,
    'steve',
    '$2b$10$uQHBa/3VV8bWUELHeO4gKe75a4vv4gJ0sr/Hvww0XT2CL.BQXX0jC',
    '2018-10-04',
    '2018-10-04'
  );
INSERT INTO
  `Users` (`ID`, `user`, `password`, `createdAt`, `updatedAt`)
VALUES
  (
    3,
    'beagie',
    '$2b$10$OpF3/R/3CkxpMDtfd8zfZ.Ju3WWClmiISDWZBjrPlLM6v.qXwCsKO',
    '2018-10-05',
    '2018-10-05'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
