CREATE TABLE `user` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `pseudo` VARCHAR(100) NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

INSERT INTO `user` (`pseudo`, `password`, `role`) VALUES ('admin', 'adminpass', 'ROLE_ADMIN');

CREATE TABLE `service` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `icon` VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE project (
  `id` int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `date` datetime NOT NULL,
  `image` varchar(255) NOT NULL,
  `stack` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `stack` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE `review` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `review` TEXT NOT NULL,
  `logo` VARCHAR(255) NOT NULL
) ENGINE=InnoDB;




