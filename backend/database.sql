CREATE TABLE `user` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `pseudo` VARCHAR(100) NULL,
  `password` VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

INSERT INTO `user` (`pseudo`, `password`) VALUES ('admin', 'adminpass');

CREATE TABLE project (
  `id` int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `date` datetime NOT NULL,
  `image` varchar(255) NOT NULL,
  `stack` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO project (`title`, `description`, `date`, `image`, `stack`, `link`) VALUES 
('Pep\'s Design', 'Pep\'s Design est un projet de site de vente en ligne.', '2022-12-31 00:00:00', 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg', 'Symfony, Bootstrap, Twig, PHP, MySQL, HTML, SCSS, JavaScript', 'https://www.pepsdesign.fr')
,('Gaby\'s Web', 'Gaby\'s Web est un projet de site de vente en ligne.', '2022-12-31 00:00:00', 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg', 'Symfony, Bootstrap, Twig, PHP, MySQL, HTML, SCSS, JavaScript', 'https://www.gabyweb.fr')

