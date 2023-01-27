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

INSERT INTO `service` (`title`, `description`, `icon`) VALUES 
('Web Design', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor.', 'fas fa-paint-brush')
,('Web Development', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor.', 'fas fa-code')
,('Digital Marketing', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor.', 'fas fa-chart-line');

CREATE TABLE project (
  `id` int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `date` datetime NOT NULL,
  `image` varchar(255) NOT NULL,
  `stack` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO project (`title`, `description`, `date`, `image`, `stack`, `url`) VALUES 
('Pep\'s Design', 'Pep\'s Design est un projet de site de vente en ligne.', '2022-12-31 00:00:00', 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg', 'Symfony, Bootstrap, Twig, PHP, MySQL, HTML, SCSS, JavaScript', 'https://www.pepsdesign.fr')
,('Gaby\'s Web', 'Gaby\'s Web est un projet de site de vente en ligne.', '2022-12-31 00:00:00', 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg', 'Symfony, Bootstrap, Twig, PHP, MySQL, HTML, SCSS, JavaScript', 'https://www.gabyweb.fr');

CREATE TABLE `review` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `review` TEXT NOT NULL,
  `logo` VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

INSERT INTO `review` (`name`, `review`, `logo`) VALUES 
('John Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor.', 'fas fa-quote-left')
,('Jane Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor.', 'fas fa-quote-left')
,('John Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor.', 'fas fa-quote-left')
,('Jane Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor.', 'fas fa-quote-left');



