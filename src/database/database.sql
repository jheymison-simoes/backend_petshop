-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18/12/2020 às 01:49
-- Versão do servidor: 10.4.11-MariaDB
-- Versão do PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `database`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(3, 1606440754244, 'createProducts1606440754244'),
(4, 1608040502415, 'createUsers1608040502415');

-- --------------------------------------------------------

--
-- Estrutura para tabela `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `value` decimal(19,2) NOT NULL,
  `image` varchar(255) NOT NULL,
  `group` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `products`
--

INSERT INTO `products` (`id`, `description`, `amount`, `value`, `image`, `group`, `category`) VALUES
(159, 'Bebedouro Automatico Pet Injet com Filtro Puripet Preto - 4 Litros - Preto', 15, '299.90', 'https://www.petlove.com.br/images/products/174841/small/Bebedouro-Autom%C3%A1tico-Pet-Injet-com-Filtro-Puripet-4-Litros---Preto.jpg?1556426875', 'Canino', 'AlimentadoresBebedores'),
(160, 'Bebedouro Truqys Pets Fonte Acqua Zoo Verde - Bivolt', 52, '189.90', 'https://www.petlove.com.br/images/products/199406/small/Bebedouro_Truqys_Pets_Fonte_Acqua_Zoo_Verde__-_Bivolt_1948911_1.jpg?1556470739', 'Canino', 'AlimentadoresBebedores'),
(161, 'Antipulgas e Carrapatos MSD Bravecto para Caes de 4,5 a 10 Kg - 250 mg', 39, '171.90', 'https://www.petlove.com.br/images/products/212200/small/Antipulgas_e_Carrapatos_MSD_Bravecto_para_C%C3%A3es_de_4_5_a_10_Kg_3104947-1_.jpg?1565109783', 'Canino', 'AntiPulgasCarrapatos'),
(162, 'Antipulgas Zoetis Simparic 40 mg para Caes 10,1 a 20 Kg - 1 Comprimido', 22, '87.90', 'https://www.petlove.com.br/images/products/191361/small/3110174.jpg?1556442858', 'Canino', 'AntiPulgasCarrapatos'),
(163, 'Brinquedo Furacao Pet Dental Bone Algodao com No - Tam. 01', 39, '10.90', 'https://www.petlove.com.br/images/products/186132/small/3100921.jpg?1556340514', 'Canino', 'Brinquedos'),
(164, 'Brinquedo Chalesco Pelucia Macaco - Tam. Unico', 58, '25.90', 'https://www.petlove.com.br/images/products/87805/small/70361.jpg?1556410755', 'Canino', 'Brinquedos'),
(165, 'Comedouro Ergonomico NF Pet Mr. Bigode Antiformigas Branco para Gatos - 140 mL', 12, '27.27', 'https://www.petlove.com.br/images/products/210780/small/Comedouro_Ergon%C3%B4mico_NF_Pet_Mr._Bigode_Antiformigas_Branco_para_Gatos_-_250_mL_2202440_3.jpg?1562165681', 'Felino', 'AlimentadoresBebedores'),
(166, 'Comedouro Plastico Furacao Pet Gato Antiformiga Vermelho - 200 mL', 99, '4.77', 'https://www.petlove.com.br/images/products/138265/small/3101748.jpg?1556342956', 'Felino', 'AlimentadoresBebedores'),
(167, 'Antipulgas e Carrapatos Zoetis Revolution 6% para Gatos de 2,5 a 7,5 kg - 45 mg - 1 Ampola de 0,75 mL', 3, '70.49', 'https://www.petlove.com.br/images/products/176852/small/7898049717965.jpg?1556360193', 'Felino', 'AntiPulgasCarrapatos'),
(168, 'Antipulgas e Carrapatos Frontline Plus para Gatos - 1 Unidade', 10, '48.49', 'https://www.petlove.com.br/images/products/227448/small/Antipulgas_e_Carrapatos_Frontline_Plus_para_Gatos_3105713.jpg?1597405132', 'Felino', 'AntiPulgasCarrapatos'),
(169, 'Brinquedo American Pets Cat Toy Ratinho com Penacho - 1 Unidade', 32, '3.90', 'https://www.petlove.com.br/images/products/219460/small/Brinquedo_American_Pets_Cat_Toy_Ratinho_com_Penacho_-_1_Unidade_31018907-1_1.jpg?1579884085', 'Felino', 'Brinquedos'),
(170, 'Brinquedo The Pets Brasil Ratinho Real de Corda - Tam. Unico', 10, '12.90', 'https://www.petlove.com.br/images/products/200116/small/Brinquedo_The_Pets_Brasil_Ratinho_Real_de_Corda_1962834.jpg?1556466632', 'Felino', 'Brinquedos'),
(171, 'Brinquedo The Pets Brasil Ratinho Real de Corda - Tam. Unico', 10, '12.90', 'https://www.petlove.com.br/images/products/200116/small/Brinquedo_The_Pets_Brasil_Ratinho_Real_de_Corda_1962834.jpg?1556466632', 'Felino', 'Brinquedos');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `users` varchar(255) NOT NULL,
  `key` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `users`, `key`, `token`) VALUES
(6, 'Jheymison', 'e10adc3949ba59abbe56e057f20f883e', '1716f2e180c705f2322a5bd69d44c7ecdabcsosdgnf875063c7e694a23bc275333cd6a4bb3');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=172;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
