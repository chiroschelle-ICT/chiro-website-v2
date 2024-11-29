-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2024 at 11:28 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chiro_website_v2`
--

-- --------------------------------------------------------

--
-- Table structure for table `afdeling`
--

CREATE TABLE `afdeling` (
  `Id` int(11) NOT NULL,
  `afdeling` varchar(244) NOT NULL,
  `Next` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `afdeling`
--

INSERT INTO `afdeling` (`Id`, `afdeling`, `Next`) VALUES
(1, 'Ribbel Jongens', 3),
(2, 'Ribbel Meisjes', 4),
(3, 'Speelclub Jongens', 5),
(4, 'Speelclub Meisjes', 6),
(5, 'Rakkers', 7),
(6, 'Kwiks', 8),
(7, 'Toppers', 9),
(8, 'Tippers', 10),
(9, 'Kerels', 11),
(10, 'Tip10\'s', 12),
(11, 'Aspi Jongens', 14),
(12, 'Aspi Meisjes', 14),
(13, 'VB\'s', 13);

-- --------------------------------------------------------

--
-- Table structure for table `blogposts`
--

CREATE TABLE `blogposts` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` longtext NOT NULL,
  `userId` int(11) NOT NULL,
  `Image` varchar(233) NOT NULL,
  `category` varchar(32) NOT NULL,
  `Link` varchar(255) DEFAULT NULL,
  `HasLink` int(11) NOT NULL,
  `timePosted` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogposts`
--

INSERT INTO `blogposts` (`id`, `title`, `description`, `userId`, `Image`, `category`, `Link`, `HasLink`, `timePosted`) VALUES
(5, 'Update Test', 'Update Test', 18, 'Blogposts_images\\Back_images\\modder.png', '1', NULL, 0, '2024-05-07 18:59:40'),
(7, 'Kerstactie', 'Christmas promotion: buy one get one free!', 12, 'Blogposts_images\\Back_images\\pompoen.png', '4', NULL, 0, '2024-05-04 17:00:04'),
(8, 'Paaseirenverkoop', 'Easter egg sale for charity', 15, 'Blogposts_images\\Back_images\\woutje_timon_politie_wiewaa.png', '4', NULL, 0, '2024-05-09 16:00:07');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `bgColor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `color`, `bgColor`) VALUES
(1, 'Zondag', '#22c55e\n', '#86efac'),
(2, 'Info', '#3b82f6\n', '#93c5fd'),
(3, 'Bouw', '#ef4444\n', '#fca5a5'),
(4, 'Activiteit', '#eab308\n', '#fef08a');

-- --------------------------------------------------------

--
-- Table structure for table `goepie`
--

CREATE TABLE `goepie` (
  `id` int(11) NOT NULL,
  `location` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `goepie`
--

INSERT INTO `goepie` (`id`, `location`, `active`) VALUES
(1, 'qwe', 0),
(2, 'GOEPEI 1', 0),
(5, 'qwe', 1),
(6, 'C:\\fakepath\\290_09--18500_sizespecs.pdf', 0),
(7, 'C:\\fakepath\\ex1.pdf', 0);

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(24) NOT NULL,
  `groeps` tinyint(1) NOT NULL,
  `jaar_leiding` int(11) NOT NULL,
  `leeftijd` int(11) NOT NULL,
  `image` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`id`, `userId`, `email`, `phone`, `groeps`, `jaar_leiding`, `leeftijd`, `image`) VALUES
(21, 1, 'killian.serluppens@chiroschelle.be', '04 71 81 27 48', 0, 4, 21, 'unkown.jpg'),
(22, 2, 'mats.robroeckx@chiroschelle.be', '04 71 81 22 44', 0, 4, 22, 'Mats.jpg'),
(23, 3, 'fien.heirbaut@chiroschelle.be', '04 71 81 22 44', 1, 4, 21, 'Fien.jpg'),
(24, 4, 'nore.vanlangendonck@chiroschelle.be', '04 71 81 22 44', 0, 2, 20, 'Nore.jpg'),
(26, 5, 'lore.heirbaut@chiroschelle.be', '04 71 81 22 44', 0, 2, 19, 'Lore.jpg'),
(27, 6, 'laetitiea.collignon@chiroschelle.be', '04 71 81 22 44', 0, 1, 19, 'Laei.jpg'),
(28, 7, 'liza.nicleas@chiroschelle.be', '04 71 81 22 44', 0, 4, 21, 'Liza.jpg'),
(29, 8, 'kobe.celen@chiroschelle.be', '04 71 81 22 44', 0, 1, 17, 'Kobe.jpg'),
(30, 9, 'josephme.lenearts@chiroschelle.be', '04 71 81 22 44', 0, 2, 19, 'Jos.jpg'),
(31, 10, 'jelle.kerstens@chiroschelle.be', '04 71 81 22 44', 0, 1, 19, 'Jelle.jpg'),
(32, 11, 'julie.huyck@chiroschelle.be', '04 71 81 22 44', 0, 2, 19, 'Julie.jpg'),
(33, 12, 'louise.f@chiroschelle.be', '04 71 81 22 44', 0, 1, 18, 'Louise.jpg'),
(34, 13, 'siemen.vancamp@chiroschelle.be', '04 71 81 22 44', 0, 1, 18, 'Siemen.jpg'),
(35, 14, 'dries.turkben@chiroschelle.be', '04 71 81 22 44', 1, 2, 20, 'Dries.jpg'),
(36, 15, 'evelien.arens@chiroschelle.be', '04 71 81 22 44', 0, 2, 19, 'Evelien.jpg'),
(37, 16, 'bieke.vaneraa@chiroschelle.be', '04 71 81 22 44', 0, 1, 18, 'Bieke.jpg'),
(38, 17, 'rune.devil@chiroschelle.be', '04 71 81 22 44', 0, 2, 19, 'Rune.jpg'),
(39, 18, 'wout.vanlangendonck@chiroschelle.be', '04 71 81 22 44', 0, 4, 22, 'Woody.jpg'),
(40, 19, 'luna.stoops@chiroschelle.be', '04 71 81 22 44', 0, 1, 18, 'Luna.jpg'),
(41, 20, 'sander.celen@chiroschelle.be', '04 71 81 22 44', 0, 2, 20, 'Celen_1.jpg'),
(42, 21, 'wout.bridts@chiroschelle.be', '04 71 81 22 44', 0, 2, 20, 'Woutje_1.jpg'),
(43, 22, 'lindger.boen@chiroschelle.be', '04 71 81 22 44', 0, 2, 2, 'Lindger.jpg'),
(44, 23, 'eline.vandooren@chiroschelle.be', '04 71 81 22 44', 0, 2, 19, 'Eline.jpg'),
(45, 24, 'felix.rabou@chiroschelle.be', '04 71 81 22 44', 1, 4, 23, 'Felix.jpg'),
(46, 25, 'kamiel.wittoek@chiroschelle.be', '04 71 81 22 44', 0, 3, 19, 'Kamiel.jpg'),
(47, 27, 'amina.vanranst@chirosche', '04 71 81 22 44', 0, 2, 19, 'Amina.jpg'),
(48, 26, 'jobbe.deridder@chirosche', '04 71 81 22 44', 0, 2, 19, 'Jobbe.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '20240213214741_migration_name.js', 1, '2024-02-13 21:48:07'),
(2, '20240215200310_migration_version_1.js', 2, '2024-02-15 20:03:34');

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `programma`
--

CREATE TABLE `programma` (
  `id` int(11) NOT NULL,
  `afdelingId` int(11) NOT NULL,
  `programma` longtext NOT NULL,
  `datum` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `programma`
--

INSERT INTO `programma` (`id`, `afdelingId`, `programma`, `datum`) VALUES
(67, 11, 'Vandaag Gaan we Spelen', '2024-10-12'),
(68, 12, 'Vandaag Gaan we Spelen', '2024-10-12'),
(69, 10, 'Vandaag Gaan we Spelen', '2024-10-12'),
(70, 9, 'Vandaag Gaan we Spelen', '2024-10-12'),
(71, 8, 'Vandaag Gaan we Spelen', '2024-10-12'),
(72, 7, 'Vandaag Gaan we Spelen', '2024-10-12'),
(73, 6, 'Vandaag Gaan we Spelen', '2024-10-12'),
(74, 4, 'Vandaag Gaan we Spelen', '2024-10-12'),
(75, 5, 'Vandaag Gaan we Spelen', '2024-10-12'),
(76, 3, 'Vandaag Gaan we Spelen', '2024-10-12'),
(77, 2, 'Vandaag Gaan we Spelen', '2024-10-12'),
(78, 1, 'Vandaag Gaan we Spelen', '2024-10-12'),
(79, 12, 'GEEN CHIRO', '2024-10-20'),
(80, 11, 'GEEN CHIRO', '2024-10-20'),
(81, 10, 'GEEN CHIRO', '2024-10-20'),
(82, 9, 'GEEN CHIRO', '2024-10-20'),
(83, 8, 'GEEN CHIRO', '2024-10-20'),
(84, 7, 'GEEN CHIRO', '2024-10-20'),
(85, 6, 'GEEN CHIRO', '2024-10-20'),
(86, 4, 'GEEN CHIRO', '2024-10-20'),
(87, 5, 'GEEN CHIRO', '2024-10-20'),
(88, 3, 'GEEN CHIRO', '2024-10-20'),
(89, 2, 'GEEN CHIRO', '2024-10-20'),
(90, 1, 'GEEN CHIRO', '2024-10-20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `Name` varchar(244) NOT NULL,
  `AfdelingId` int(11) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `Name`, `AfdelingId`, `password`) VALUES
(1, 'Killian', 'Killian Serluppens', 9, 'bier'),
(2, 'Mats', 'Mats Robroeckx', 1, 'Hello123!'),
(3, 'Fien', 'Fien Heribaut', 1, 'Hello123!'),
(4, 'Nore', 'Nore Van Langendonck', 1, 'Hello123!'),
(5, 'Lore', 'Lore Heirbaut', 2, 'Hello123!'),
(6, 'Laetitie ', 'Laetitiea Collignon', 2, 'Hello123!'),
(7, 'Liza', 'Liza Nicleas', 2, 'Hello123!'),
(8, 'Kobe', 'Kobe Celen', 3, 'Hello123!'),
(9, 'Jos', 'Josephine Lenaerts', 3, 'Hello123!'),
(10, 'Jelle', 'Jelle Kerstens', 4, 'Hello123!'),
(11, 'Julie', 'Julie Huyck', 4, 'Hello123!'),
(12, 'Louise', 'Louise F', 4, 'Hello123!'),
(13, 'Siemen', 'Siemen Van Camp', 5, 'Hello123!'),
(14, 'Dries', 'Dries Turkben', 5, 'Hello123!'),
(15, 'Evelien', 'Evelien Arens', 6, 'Hello123!'),
(16, 'Bieke', 'Bieke Van Der Aa', 6, 'Hello123!'),
(17, 'Rune', 'Rune De Vil', 7, 'Hello123!'),
(18, 'Woody', 'Wout Van Langendonck', 8, 'Hello123!'),
(19, 'Luna', 'Luna Stoops', 8, 'Hello123!'),
(20, 'Sander', 'Sander Celen', 9, 'Hello123!'),
(21, 'Woutje', 'Wout Bridts', 9, 'Hello123!'),
(22, 'Lindger', 'Lindger Boen', 10, 'Hello123!'),
(23, 'Eline', 'Eline Van Dooren', 10, 'Hello123!'),
(24, 'Felix', 'Felix Rabou', 11, 'Hello123!'),
(25, 'Kamiel', 'Kamiel Wittoek', 11, 'Hello123!'),
(26, 'jobbe', 'Jobbe De Ridder', 12, 'Hello123!'),
(27, 'Amina', 'Amina van Ranst', 12, 'Hello123!');

-- --------------------------------------------------------

--
-- Table structure for table `verhuur`
--

CREATE TABLE `verhuur` (
  `Id` int(11) NOT NULL,
  `item` varchar(24) NOT NULL,
  `prijs` int(11) NOT NULL,
  `waarborg` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `verhuur`
--

INSERT INTO `verhuur` (`Id`, `item`, `prijs`, `waarborg`, `userId`) VALUES
(3, 'Wood', 21, 12, 17),
(4, 'Wood', 20, 93, 9),
(5, 'Aluminum', 3, 93, 3),
(6, 'Stone', 25, 91, 22),
(7, 'Granite', 15, 99, 7),
(8, 'Steel', 50, 33, 14),
(9, 'Stone', 46, 28, 22),
(10, 'Wood', 3, 52, 7),
(11, 'Wood', 18, 93, 11),
(12, 'Steel', 10, 82, 19),
(13, 'Glass', 41, 89, 11),
(14, 'Aluminum', 5, 86, 19),
(15, 'Glass', 44, 91, 18),
(16, 'Granite', 18, 83, 10),
(17, 'Brass', 12, 21, 5),
(18, 'Vinyl', 33, 80, 15),
(19, 'Brass', 39, 98, 8),
(20, 'Plexiglass', 21, 27, 7),
(21, 'Rubber', 11, 67, 20),
(22, 'Stone', 29, 51, 22);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `afdeling`
--
ALTER TABLE `afdeling`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `blogposts`
--
ALTER TABLE `blogposts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `goepie`
--
ALTER TABLE `goepie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_userID` (`userId`);

--
-- Indexes for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `programma`
--
ALTER TABLE `programma`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Programma` (`afdelingId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_User` (`AfdelingId`);

--
-- Indexes for table `verhuur`
--
ALTER TABLE `verhuur`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `FK_Verhuur` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `afdeling`
--
ALTER TABLE `afdeling`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `blogposts`
--
ALTER TABLE `blogposts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `goepie`
--
ALTER TABLE `goepie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `programma`
--
ALTER TABLE `programma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `verhuur`
--
ALTER TABLE `verhuur`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blogposts`
--
ALTER TABLE `blogposts`
  ADD CONSTRAINT `blogposts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`Id`);

--
-- Constraints for table `info`
--
ALTER TABLE `info`
  ADD CONSTRAINT `FK_userID` FOREIGN KEY (`userId`) REFERENCES `users` (`Id`);

--
-- Constraints for table `programma`
--
ALTER TABLE `programma`
  ADD CONSTRAINT `FK_Programma` FOREIGN KEY (`afdelingId`) REFERENCES `afdeling` (`Id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_User` FOREIGN KEY (`AfdelingId`) REFERENCES `afdeling` (`Id`);

--
-- Constraints for table `verhuur`
--
ALTER TABLE `verhuur`
  ADD CONSTRAINT `FK_Verhuur` FOREIGN KEY (`userId`) REFERENCES `users` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
