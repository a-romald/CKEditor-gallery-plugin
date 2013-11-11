--
-- Database `db1`
--

-- --------------------------------------------------------

--
-- Table `galleries`
--

CREATE TABLE IF NOT EXISTS `galleries` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dump table `galleries`
--

INSERT INTO `galleries` (`id`, `title`) VALUES
(1, 'Trees'),
(2, 'Flowers'),
(3, 'Grasses'),
(4, 'Bushes');

