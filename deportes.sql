-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-02-2019 a las 20:13:41
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `ahorcado`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deportes`
--

CREATE TABLE IF NOT EXISTS `deportes` (
  `idPalabra` int(3) NOT NULL AUTO_INCREMENT,
  `textoPalabra` varchar(16) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`idPalabra`),
  UNIQUE KEY `textoPalabra` (`textoPalabra`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=53 ;

--
-- Volcado de datos para la tabla `deportes`
--

INSERT INTO `deportes` (`idPalabra`, `textoPalabra`) VALUES
(1, 'futbol'),
(2, 'natacion'),
(3, 'baloncesto'),
(4, 'surf'),
(5, 'teni'),
(6, 'gimnasia'),
(7, 'voleybol'),
(8, 'tiro'),
(9, 'snowboard'),
(10, 'equitacion'),
(11, 'skate'),
(12, 'montañismo'),
(13, 'motociclismo'),
(14, 'atletismo'),
(15, 'ciclismo'),
(16, 'handball'),
(17, 'esgrima'),
(18, 'beisbol'),
(19, 'boxeo'),
(20, 'ajedrez'),
(21, 'parapente'),
(22, 'waterpolo'),
(23, 'bungee'),
(24, 'bolos'),
(25, 'padel'),
(26, 'rugby'),
(27, 'lucha'),
(28, 'billar'),
(29, 'pesas'),
(30, 'golf'),
(31, 'badminton'),
(32, 'hockey'),
(33, 'caza'),
(34, 'petanca'),
(35, 'canoa'),
(36, 'vela'),
(37, 'criquet'),
(38, 'dardos'),
(39, 'judo'),
(40, 'karate'),
(41, 'kickboxing'),
(42, 'motonautica'),
(43, 'paracaidismo'),
(44, 'parkour'),
(45, 'triatlon'),
(46, 'taekwondo'),
(47, 'croquet'),
(48, 'acrobacia'),
(49, 'alpinismo'),
(50, 'automobilismo'),
(51, 'bodyboard'),
(52, 'billarda');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
