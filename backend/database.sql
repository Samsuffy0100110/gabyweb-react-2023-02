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

CREATE TABLE `project` (
  `id` int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- INSERT INTO `project` (`title`, `description`, `image`, `link`, `date`) VALUES 
-- ('Pep\'s Design',
-- 'Pep\'s Design est un site e-commerce de vente de produits personnalisés. Il a été développé en méthode agile. 
-- Suivant les souhaits de la cliente, nous avons développé un site e-commerce avec un back-office permettant de gérer les produits, les commandes et les utilisateurs.
-- Le site est responsive et respecte les normes d\'accèsibilité.
-- Les technologies utilisés sont : HTML, CSS, PHP, JavaScript, MySQL, Bootstrap, Symfony, jQuery, Ajax, Git, GitHub, Photoshop, Illustrator, InDesign, Figma.',
-- 'https://cdn.pixabay.com/photo/2016/11/29/08/43/blank-1868502_960_720.jpg',
-- 'https://www.pepsdesign.fr/',
-- '2022-12-30')
-- ,('Qi Gong',
-- 'Qi Gong est un site vitrine pour une praticienne de Qi Gong. Il a été développé en méthode agile.
-- Le site est responsive et respecte les normes d\'accèsibilité
-- Les technologies utilisés sont : HTML, CSS, PHP, JavaScript, MySQL, Bootstrap, Symfony, jQuery, Git, GitHub, Photoshop, Illustrator, InDesign, Figma.',
-- 'https://cdn.pixabay.com/photo/2015/05/10/16/35/qi-gong-761099_960_720.jpg',
-- 'https://www.bienetreqigong.fr/',
-- '2022-06-28')
-- ,('Endogirl',
-- 'Endogirl est un site sur l\'endométriose. Il a été développé en méthode agile.
-- Le site est responsive et respecte les normes d\'accèsibilité
-- Les technologies utilisés sont : HTML, CSS, PHP, JavaScript, MySQL, Bootstrap, Symfony, jQuery, Git, GitHub, Photoshop, Illustrator, InDesign, Figma.',
-- 'https://cdn.pixabay.com/photo/2014/04/26/04/25/woman-332278_960_720.jpg',
-- 'https://endogirl.fr',
-- '2022-08-30')
-- ,('MemeFlix',
-- 'MemeFlix est un site de streaming de vidéos. Il a été développé en méthode agile.
-- Le site est responsive et respecte les normes d\'accèsibilité
-- Les technologies utilisés sont : HTML, CSS, PHP, JavaScript, MySQL, Bootstrap, jQuery, Git, GitHub, Photoshop, Illustrator, InDesign, Figma.',
-- 'https://cdn.pixabay.com/photo/2020/09/14/17/45/tv-5571609_960_720.jpg',
-- 'https://p2-meme-flix.remote-fr-1.wilders.dev/',
-- '2022-04-16')
-- ,('Pot de vache',
-- 'Pot de vache est un site de vente de produits de la ferme. Il a été développé en méthode agile.
-- Le site est responsive et respecte les normes d\'accèsibilité
-- Les technologies utilisés sont : HTML, CSS, PHP, JavaScript, MySQL, Bootstrap, jQuery, Git, GitHub, Photoshop, Illustrator, InDesign, Figma.',
-- 'https://cdn.pixabay.com/photo/2016/10/04/23/52/cow-1715829_960_720.jpg',
-- 'https://p2-pot-de-vache.remote-fr-1.wilders.dev/',
-- '2022-06-16')
-- ,('Menuiserie Hillairet',
-- 'Menuiserie Hillairet est un site vitrine pour une menuiserie. Il a été développé en méthode agile.
-- Le site est responsive et respecte les normes d\'accèsibilité
-- Les technologies utilisés sont : HTML, CSS, PHP, JavaScript, MySQL, Bootstrap, jQuery, Git, GitHub, Photoshop, Illustrator, InDesign, Figma.',
-- 'https://cdn.pixabay.com/photo/2017/08/28/22/00/machine-2691439_960_720.jpg',
-- 'https://www.menuiserie-hillairet-17.com/',
-- '2023-04-16');

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




