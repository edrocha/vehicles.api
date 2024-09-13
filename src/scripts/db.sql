###SCRIPT PARA CRIAR DATABASE E TABELA DE vehicles

CREATE DATABASE conhecimentoe;
use conhecimentoe;

CREATE TABLE `vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `placa` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
   `chassi` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
   `renavam` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
   `modelo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
   `marca` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `ano` int(11) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
