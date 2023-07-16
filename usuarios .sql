-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-07-2023 a las 01:57:30
-- Versión del servidor: 8.0.33
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `id` int NOT NULL,
  `Zona` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Departamento` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Municipio` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Caso` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Tipo_tk` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Cliente` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Observacion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Estado` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Analista` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Fecha_de_Apertura` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Contratista` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`id`, `Zona`, `Departamento`, `Municipio`, `Caso`, `Tipo_tk`, `Cliente`, `Observacion`, `Estado`, `Analista`, `Fecha_de_Apertura`, `Contratista`) VALUES
(1, '', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL),
(2, NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Apellido` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Fecha` date DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `Nombre`, `Apellido`, `Email`, `Fecha`, `password`, `imagen`) VALUES
(1, '111', NULL, '11111', NULL, '1111', NULL),
(2, 'assdasda', NULL, 'dasdas', NULL, 'dsadsad', NULL),
(3, 'dsadadasdsa', NULL, 'adsadad', NULL, 'adsadsa', NULL),
(4, 'Juan Diego', 'Quintero', 'juandiegoq56@gmail.com', NULL, '$2a$05$dTC5nAi.2WhoWG7p6dp5eewif6Z78Yk2rivrwQjiX/FktpIofj59e', NULL),
(5, 'asdsad', NULL, 'ddd', NULL, '$2a$05$p689IDq2wBBekXvCQgqanONxQok8S5/2wf4eJpC5HXAFCaFLVXFPe', NULL),
(6, '1', NULL, '1', NULL, '$2a$05$VZY/vLJ.vEhex5dDWJ6SP.CnPltSSpY3eUNHBCym7ltv/i244Sc5y', NULL),
(7, 'Juan diego', NULL, 'juandiegoq56@gmail.com', NULL, '$2a$05$Bsg9BiGeIu2eaiNX92tXfOfszyWbkcYbp1/ytz8E0z/AfLLEoyf7m', NULL),
(8, 'Juan', NULL, 'juandiegoq56@gmail.com', NULL, '$2a$05$03.UMFyZfsepN.h/isBJdetvFGwknJVeNKZlTpjbHNZVQHhxsKFNW', NULL),
(9, '11', NULL, 'juandiegoq56@gmail.com', NULL, '$2a$05$rrhRmKRciSU7LZwHayHi9eWBhRQr7VgZ5d.Nwj.SJoGipV/a5nmC.', NULL),
(10, 'adsdsa', NULL, 'juandiegoq56@gmail.com', NULL, '$2a$05$fF/xcsWpOwVBrN600bYXs.CN2.Fv2z/yTzQ8oAKNu1YW8aoAHVR8G', NULL),
(11, 'Juan ', NULL, 'juandiegoq56@gmail.com', NULL, '$2a$05$e1vlNi1K42DkILsOx8pTq.jcS4/G8EXOKkMsnui8JJ70.019lw6xq', NULL),
(12, 'Juan Diego', NULL, 'judquinterop@gmail.com', NULL, '$2a$05$6gQ31IZ68wnB2TxXF6l7R.KfrbGOKd8NT7EnbXjJVgzI4gRjCa7pC', NULL),
(13, 'Juan', NULL, 'juandiego@gmail.com', NULL, '$2a$05$VBw8IObyfKIiiwFaw182DuqX5hov4HzEeNc2cYh8P6s/nrY/hNsNq', NULL),
(14, 'jsjsjs', NULL, 'dd@gmail.com', NULL, '$2a$05$PJnfeCL6dtitk1jPyLmcb.MHn9q1ljJ90GJ7fX5aRFFEl.chPh.oi', NULL),
(15, 'dsd', 'sdsd', '1@gmail.com', NULL, '$2a$05$D7ryScgeJIKVexcstPFlwuTZTgrRToQZlp8B3AK9ocaw3hXHTwTLS', NULL),
(16, 'das', 'sdadsa', 'ashgdhah@gmail.com', NULL, '$2a$05$uSES61FlmDKHjT9M91V81.iS2YhbWB0LtqOCHQRYMuH9nkt2pNXFa', 'default-image.png'),
(17, 'dasda', 'sadasda', 'asda@gmail.com', NULL, '$2a$05$./bOrVPetTqK/u8nL3MPLOW..gpz1XLx90svdxo2fMWoBy3XhE1DW', 'default-image.png'),
(18, 'dsd', 'adsdada', 'adas@gmail.com', NULL, '$2a$05$BEHHx27boDRep5ymVpb/beNLIZpKdXsinAl52KpsdB039nr3uMyFK', 'default-image.png'),
(19, NULL, NULL, NULL, NULL, NULL, 'default-image.png'),
(20, 'dasdas', 'asdad', 'sadda@gmail.com', NULL, '$2a$05$i63kzUdM1ZvnSTv4xDZyXuMq6GI34CIzGgYNqjodp16Pp57Pdlh52', 'default-image.png'),
(21, 'adad', 'dasda', 'adssddass@gmail.com', NULL, '$2a$05$IXBE.TwBmvImwvwXkqQBDubDqJ3bqudd0FAT09KtqnFRSwg5WXBA6', 'default-image.png'),
(22, 'sdds', 'dsdsd', 'sdsds@gmail.com', NULL, '$2a$05$3umKzKo71HuYp0BdSWdgwuRcMVEk/pKwgoRKjUZq9XjNrRLMOkjlq', 'default-image.png'),
(23, 'sdd', 'sdsds', 'sdsddds@gmail.com', NULL, '$2a$05$oovWATGFbbn0wEQWFQd5IOcaVDyrWhQv6WcqgvpVNQJP/ZETa.pEa', 'default-image.png'),
(24, 'dsad', 'asddas', 'dasdasa@gmail.com', NULL, '$2a$05$NGBoBhBb9kmfZI16dI84SexJN6FcKqdpkL0PjztATkn19eVTnWrzC', 'default-image.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
