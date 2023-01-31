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
('Web Design', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor.', 'https://loremflickr.com/320/240')
,('Web Development', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor.', 'https://loremflickr.com/320/240')
,('Digital Marketing', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor.', 'https://loremflickr.com/320/240');

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
,('Gaby\'s Web', 'Gaby\'s Web est un projet de site de vente en ligne.', '2022-12-31 00:00:00', 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg', 'Symfony, Bootstrap, Twig, PHP, MySQL, HTML, SCSS, JavaScript', 'https://www.gabyweb.fr')
,('Endogirl', 'Endogirl est un projet de site de vente en ligne.', '2022-12-31 00:00:00', 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg', 'Symfony, Bootstrap, Twig, PHP, MySQL, HTML, SCSS, JavaScript', 'https://www.endogirl.fr')
,('Gaby\'s Web', 'Gaby\'s Web est un projet de site de vente en ligne.', '2022-12-31 00:00:00', 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg', 'Symfony, Bootstrap, Twig, PHP, MySQL, HTML, SCSS, JavaScript', 'https://www.gabyweb.fr')
,('Endogirl', 'Endogirl est un projet de site de vente en ligne.', '2022-12-31 00:00:00', 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg', 'Symfony, Bootstrap, Twig, PHP, MySQL, HTML, SCSS, JavaScript', 'https://www.endogirl.fr')
,('Gaby\'s Web', 'Gaby\'s Web est un projet de site de vente en ligne.', '2022-12-31 00:00:00', 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg', 'Symfony, Bootstrap, Twig, PHP, MySQL, HTML, SCSS, JavaScript', 'https://www.gabyweb.fr');

CREATE TABLE `stack` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

INSERT INTO `stack` (`name`, `image`) VALUES 
('Symfony', 'https://symfony.com/logos/symfony_black_03.svg')
,('Bootstrap', 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png')
,('Twig', 'http://svgur.com/i/1j0.svg')
,('PHP', 'https://www.php.net/images/logos/new-php-logo.svg')
,('MySQL', 'https://www.mysql.com/common/logos/logo-mysql-170x115.png')
,('HTML', 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png')
,('SCSS', 'https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png')
,('JavaScript', 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg')
,('React', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png')
,('Vue', 'https://vuejs.org/images/logo.png')
,('Laravel', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png')
,('WordPress', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png');

CREATE TABLE `project_stack` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `project_id` INT NOT NULL,
  `stack_id` INT NOT NULL
) ENGINE=InnoDB;

INSERT INTO `project_stack` (`project_id`, `stack_id`) VALUES 
(1, 1)
, (1, 2)
, (1, 3)
, (1, 4)
, (1, 5)
, (1, 6)
, (1, 7)
, (1, 8)
, (1, 9)
, (1, 10)
, (1, 11)
, (1, 12)
, (2, 1)
, (2, 2)
, (2, 3)
, (2, 4)
, (2, 5)
, (2, 6);


CREATE TABLE `review` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `review` TEXT NOT NULL,
  `logo` VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

INSERT INTO `review` (`name`, `review`, `logo`) VALUES 
('John Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png')
,('Jane Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor.', 'https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png')
,('John Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor.', 'https://vuejs.org/images/logo.png')
,('Jane Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor. Sed euismod, nunc sit amet aliquam tincidunt, nunc elit luctus nunc, eget aliquam massa nisl eget dolor.', 'http://svgur.com/i/1j0.svg');



