-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2023 at 05:12 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bapenda_kepatuhan`
--

-- --------------------------------------------------------

--
-- Table structure for table `cakin`
--

CREATE TABLE `cakin` (
  `id_cakin` int(11) NOT NULL,
  `bulan` date NOT NULL,
  `hasil_kinerja` int(100) NOT NULL,
  `jumlah_kegiatan` int(100) NOT NULL,
  `lampiran_disubmit` int(100) NOT NULL,
  `lampiran_bsubmit` int(100) NOT NULL,
  `nip` int(100) NOT NULL,
  `lampiran_diterima` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cakin`
--

INSERT INTO `cakin` (`id_cakin`, `bulan`, `hasil_kinerja`, `jumlah_kegiatan`, `lampiran_disubmit`, `lampiran_bsubmit`, `nip`, `lampiran_diterima`) VALUES
(413, '2023-01-01', 20, 50, 13, 37, 123, 10),
(414, '2023-02-01', 67, 15, 10, 5, 123, 10),
(415, '2023-03-01', 100, 7, 7, 0, 123, 7),
(416, '2023-04-01', 6, 48, 11, 37, 123, 3),
(417, '2023-06-01', 73, 11, 11, 0, 123, 8),
(418, '2023-05-01', 100, 15, 15, 0, 123, 15),
(419, '2023-08-01', 50, 10, 5, 0, 123, 5),
(420, '2023-09-01', 44, 9, 8, 0, 123, 4),
(421, '2023-07-01', 83, 30, 30, 0, 123, 25),
(422, '2023-10-01', 20, 5, 1, 4, 123, 1),
(423, '2023-11-01', 14, 7, 2, 5, 123, 1),
(424, '2023-12-01', 17, 30, 8, 22, 123, 5),
(425, '2023-01-01', 40, 10, 4, 4, 11, 4),
(426, '2023-02-01', 20, 20, 4, 4, 11, 4),
(427, '2023-03-01', 0, 0, 0, 0, 11, 0),
(428, '2023-06-01', 0, 0, 0, 0, 11, 0),
(429, '2023-05-01', 0, 0, 0, 0, 11, 0),
(430, '2023-04-01', 0, 0, 0, 0, 11, 0),
(431, '2023-08-01', 0, 0, 0, 0, 11, 0),
(432, '2023-10-01', 0, 2, 1, 1, 11, 0),
(433, '2023-07-01', 0, 0, 0, 0, 11, 0),
(434, '2023-09-01', 0, 0, 0, 0, 11, 0),
(435, '2023-11-01', 0, 2, 1, 1, 11, 0),
(436, '2023-12-01', 25, 4, 1, 3, 11, 1),
(461, '2023-01-01', 47, 64, 17, 47, 141, 30),
(462, '2023-03-01', 75, 20, 20, 0, 141, 15),
(463, '2023-02-01', 72, 25, 20, 5, 141, 18),
(464, '2023-11-01', 6, 16, 4, 12, 141, 1),
(465, '2023-04-01', 45, 62, 14, 48, 141, 28),
(466, '2023-05-01', 100, 27, 27, 0, 141, 27),
(467, '2023-09-01', 97, 30, 29, 1, 141, 29),
(468, '2023-07-01', 97, 31, 30, 1, 141, 30),
(469, '2023-06-01', 89, 28, 28, 0, 141, 25),
(470, '2023-12-01', 14, 50, 15, 35, 141, 7),
(471, '2023-10-01', 112, 25, 25, 0, 141, 28),
(472, '2023-08-01', 100, 29, 29, 0, 141, 29),
(473, '2023-01-01', 58, 69, 14, 55, 1411, 40),
(474, '2023-02-01', 100, 50, 50, 0, 1411, 50),
(475, '2023-03-01', 91, 55, 53, 2, 1411, 50),
(476, '2023-04-01', 80, 71, 14, 57, 1411, 57),
(477, '2023-05-01', 96, 55, 53, 2, 1411, 53),
(478, '2023-07-01', 99, 69, 68, 1, 1411, 68),
(479, '2023-09-01', 77, 65, 60, 5, 1411, 50),
(480, '2023-08-01', 70, 50, 40, 10, 1411, 35),
(481, '2023-06-01', 75, 40, 40, 0, 1411, 30),
(482, '2023-10-01', 69, 55, 51, 4, 1411, 38),
(483, '2023-11-01', 5, 22, 4, 18, 1411, 1),
(484, '2023-12-01', 13, 53, 15, 38, 1411, 7),
(485, '2023-01-01', 580, 5, 0, 5, 142, 29),
(486, '2023-02-01', 90, 29, 29, 0, 142, 26),
(487, '2023-03-01', 100, 29, 29, 0, 142, 29),
(488, '2023-04-01', 96, 24, 23, 1, 142, 23),
(489, '2023-06-01', 100, 20, 20, 0, 142, 20),
(490, '2023-05-01', 76, 33, 30, 3, 142, 25),
(491, '2023-11-01', 91, 33, 33, 3, 142, 30),
(492, '2023-09-01', 87, 23, 20, 3, 142, 20),
(493, '2023-07-01', 86, 29, 28, 1, 142, 25),
(494, '2023-08-01', 100, 35, 35, 0, 142, 35),
(495, '2023-10-01', 100, 33, 33, 0, 142, 33),
(496, '2023-12-01', 33, 3, 0, 3, 142, 1),
(497, '2023-01-01', 0, 0, 0, 0, 7781, 0),
(498, '2023-02-01', 0, 0, 0, 0, 7781, 0),
(499, '2023-03-01', 0, 0, 0, 0, 7781, 0),
(500, '2023-05-01', 0, 0, 0, 0, 7781, 0),
(501, '2023-07-01', 0, 0, 0, 0, 7781, 0),
(502, '2023-10-01', 0, 0, 0, 0, 7781, 0),
(503, '2023-04-01', 0, 0, 0, 0, 7781, 0),
(504, '2023-11-01', 33, 6, 2, 4, 7781, 2),
(505, '2023-08-01', 0, 0, 0, 0, 7781, 0),
(506, '2023-12-01', 0, 0, 0, 0, 7781, 0),
(507, '2023-06-01', 0, 0, 0, 0, 7781, 0),
(508, '2023-09-01', 0, 0, 0, 0, 7781, 0),
(509, '2023-01-01', 0, 5, 2, 3, 1, 0),
(510, '2023-02-01', 0, 0, 0, 0, 1, 0),
(511, '2023-03-01', 0, 0, 0, 0, 1, 0),
(512, '2023-05-01', 0, 0, 0, 0, 1, 0),
(513, '2023-04-01', 0, 0, 0, 0, 1, 0),
(514, '2023-07-01', 0, 0, 0, 0, 1, 0),
(515, '2023-10-01', 0, 0, 0, 0, 1, 0),
(516, '2023-06-01', 0, 0, 0, 0, 1, 0),
(517, '2023-09-01', 0, 0, 0, 0, 1, 0),
(518, '2023-08-01', 0, 0, 0, 0, 1, 0),
(519, '2023-12-01', 20, 5, 2, 3, 1, 1),
(520, '2023-11-01', 0, 3, 1, 2, 1, 0),
(521, '2023-02-01', 0, 0, 0, 0, 2, 0),
(522, '2023-01-01', 0, 0, 0, 0, 2, 0),
(523, '2023-05-01', 0, 0, 0, 0, 2, 0),
(524, '2023-03-01', 0, 0, 0, 0, 2, 0),
(525, '2023-06-01', 0, 0, 0, 0, 2, 0),
(526, '2023-04-01', 0, 0, 0, 0, 2, 0),
(527, '2023-07-01', 0, 0, 0, 0, 2, 0),
(528, '2023-08-01', 0, 0, 0, 0, 2, 0),
(529, '2023-09-01', 0, 0, 0, 0, 2, 0),
(530, '2023-10-01', 0, 0, 0, 0, 2, 0),
(531, '2023-11-01', 0, 0, 0, 0, 2, 0),
(532, '2023-12-01', 0, 3, 0, 3, 2, 0),
(533, '2023-01-01', 0, 0, 0, 0, 22, 0),
(534, '2023-02-01', 0, 0, 0, 0, 22, 0),
(535, '2023-03-01', 0, 0, 0, 0, 22, 0),
(536, '2023-05-01', 0, 0, 0, 0, 22, 0),
(537, '2023-04-01', 0, 0, 0, 0, 22, 0),
(538, '2023-08-01', 0, 0, 0, 0, 22, 0),
(539, '2023-10-01', 0, 0, 0, 0, 22, 0),
(540, '2023-06-01', 0, 0, 0, 0, 22, 0),
(541, '2023-07-01', 0, 0, 0, 0, 22, 0),
(542, '2023-09-01', 0, 0, 0, 0, 22, 0),
(543, '2023-11-01', 0, 0, 0, 0, 22, 0),
(544, '2023-12-01', 0, 0, 0, 0, 22, 0),
(545, '2023-01-01', 24, 70, 14, 56, 12345, 17),
(546, '2023-02-01', 93, 75, 70, 5, 12345, 70),
(547, '2023-04-01', 76, 72, 14, 58, 12345, 55),
(548, '2023-03-01', 0, 0, 0, 0, 12345, 45),
(549, '2023-05-01', 88, 80, 70, 10, 12345, 70),
(550, '2023-06-01', 94, 85, 80, 5, 12345, 80),
(551, '2023-11-01', 91, 22, 20, 2, 12345, 20),
(552, '2023-07-01', 95, 60, 57, 3, 12345, 57),
(553, '2023-10-01', 90, 50, 45, 5, 12345, 45),
(554, '2023-08-01', 93, 45, 42, 3, 12345, 42),
(555, '2023-12-01', 100, 53, 53, 0, 12345, 53),
(556, '2023-09-01', 98, 55, 54, 1, 12345, 54),
(557, '2023-02-01', 90, 20, 20, 0, 1123, 18),
(558, '2023-01-01', 95, 20, 19, 0, 1123, 19),
(559, '2023-09-01', 90, 20, 18, 0, 1123, 18),
(560, '2023-08-01', 85, 20, 17, 0, 1123, 17),
(561, '2023-07-01', 75, 20, 16, 0, 1123, 15),
(562, '2023-06-01', 75, 20, 15, 0, 1123, 15),
(563, '2023-03-01', 50, 20, 10, 0, 1123, 10),
(564, '2023-10-01', 90, 20, 20, 0, 1123, 18),
(565, '2023-12-01', 0, 0, 0, 0, 1123, 16),
(566, '2023-04-01', 90, 20, 18, 0, 1123, 18),
(567, '2023-05-01', 75, 20, 15, 0, 1123, 15),
(568, '2023-11-01', 50, 10, 5, 0, 1123, 5),
(569, '2023-01-01', 100, 30, 30, 0, 1124, 30),
(570, '2023-02-01', 100, 30, 30, 0, 1124, 30),
(571, '2023-03-01', 97, 30, 30, 0, 1124, 29),
(572, '2023-04-01', 97, 30, 30, 0, 1124, 29),
(573, '2023-05-01', 87, 30, 30, 0, 1124, 26),
(574, '2023-06-01', 97, 30, 30, 0, 1124, 29),
(575, '2023-07-01', 100, 30, 30, 0, 1124, 30),
(576, '2023-08-01', 90, 30, 30, 0, 1124, 27),
(577, '2023-09-01', 93, 30, 30, 0, 1124, 28),
(578, '2023-10-01', 67, 30, 30, 0, 1124, 20),
(579, '2023-11-01', 67, 30, 20, 10, 1124, 20),
(580, '2023-12-01', 0, 0, 0, 0, 1124, 30),
(581, '2023-03-01', 100, 25, 25, 0, 1125, 25),
(582, '2023-05-01', 100, 25, 25, 0, 1125, 25),
(583, '2023-04-01', 96, 25, 25, 0, 1125, 24),
(584, '2023-01-01', 80, 25, 20, 0, 1125, 20),
(585, '2023-07-01', 100, 25, 25, 0, 1125, 25),
(586, '2023-02-01', 92, 25, 23, 0, 1125, 23),
(587, '2023-06-01', 88, 25, 22, 0, 1125, 22),
(588, '2023-09-01', 84, 25, 21, 0, 1125, 21),
(589, '2023-08-01', 96, 25, 24, 0, 1125, 24),
(590, '2023-10-01', 100, 25, 25, 0, 1125, 25),
(591, '2023-12-01', 0, 0, 0, 0, 1125, 22),
(592, '2023-11-01', 60, 50, 40, 10, 1125, 30),
(593, '2023-01-01', 95, 42, 42, 0, 1122, 40),
(594, '2023-02-01', 88, 33, 30, 3, 1122, 29),
(595, '2023-05-01', 98, 40, 40, 0, 1122, 39),
(596, '2023-04-01', 88, 34, 34, 0, 1122, 30),
(597, '2023-03-01', 100, 30, 30, 0, 1122, 30),
(598, '2023-09-01', 94, 32, 32, 0, 1122, 30),
(599, '2023-08-01', 97, 34, 34, 0, 1122, 33),
(600, '2023-07-01', 97, 31, 31, 0, 1122, 30),
(601, '2023-06-01', 100, 30, 30, 0, 1122, 30),
(602, '2023-10-01', 83, 30, 30, 0, 1122, 25),
(603, '2023-12-01', 0, 0, 0, 0, 1122, 27),
(604, '2023-11-01', 50, 20, 15, 5, 1122, 10),
(617, '2023-05-01', 0, 0, 0, 0, 123123, 0),
(618, '2023-04-01', 0, 0, 0, 0, 123123, 0),
(619, '2023-03-01', 0, 0, 0, 0, 123123, 0),
(620, '2023-07-01', 0, 0, 0, 0, 123123, 0),
(621, '2023-06-01', 0, 0, 0, 0, 123123, 0),
(622, '2023-01-01', 0, 0, 0, 0, 123123, 0),
(623, '2023-02-01', 0, 0, 0, 0, 123123, 0),
(624, '2023-11-01', 0, 22, 4, 18, 123123, 0),
(625, '2023-08-01', 0, 0, 0, 0, 123123, 0),
(626, '2023-12-01', 0, 22, 5, 17, 123123, 0),
(627, '2023-10-01', 0, 0, 0, 0, 123123, 0),
(628, '2023-09-01', 0, 0, 0, 0, 123123, 0),
(629, '2023-02-01', 0, 0, 0, 0, 441123, 0),
(630, '2023-01-01', 0, 0, 0, 0, 441123, 0),
(631, '2023-03-01', 0, 0, 0, 0, 441123, 0),
(632, '2023-04-01', 0, 0, 0, 0, 441123, 0),
(633, '2023-07-01', 0, 0, 0, 0, 441123, 0),
(634, '2023-05-01', 0, 0, 0, 0, 441123, 0),
(635, '2023-08-01', 0, 0, 0, 0, 441123, 0),
(636, '2023-11-01', 0, 0, 0, 0, 441123, 0),
(637, '2023-12-01', 0, 22, 4, 18, 441123, 0),
(638, '2023-09-01', 0, 0, 0, 0, 441123, 0),
(639, '2023-06-01', 0, 0, 0, 0, 441123, 0),
(640, '2023-10-01', 0, 0, 0, 0, 441123, 0),
(641, '2023-01-01', 0, 0, 0, 0, 112, 0),
(642, '2023-02-01', 0, 0, 0, 0, 112, 0),
(643, '2023-04-01', 0, 0, 0, 0, 112, 0),
(644, '2023-03-01', 0, 0, 0, 0, 112, 0),
(645, '2023-05-01', 0, 0, 0, 0, 112, 0),
(646, '2023-06-01', 0, 0, 0, 0, 112, 0),
(647, '2023-07-01', 0, 0, 0, 0, 112, 0),
(648, '2023-08-01', 0, 0, 0, 0, 112, 0),
(649, '2023-10-01', 0, 0, 0, 0, 112, 0),
(650, '2023-11-01', 0, 0, 0, 0, 112, 0),
(651, '2023-12-01', 0, 0, 0, 0, 112, 0),
(652, '2023-09-01', 0, 0, 0, 0, 112, 0),
(653, '2023-01-01', 0, 0, 0, 0, 113, 0),
(654, '2023-02-01', 0, 0, 0, 0, 113, 0),
(655, '2023-03-01', 0, 0, 0, 0, 113, 0),
(656, '2023-04-01', 0, 0, 0, 0, 113, 0),
(657, '2023-05-01', 0, 0, 0, 0, 113, 0),
(658, '2023-06-01', 0, 0, 0, 0, 113, 0),
(659, '2023-07-01', 0, 0, 0, 0, 113, 0),
(660, '2023-09-01', 0, 0, 0, 0, 113, 0),
(661, '2023-08-01', 0, 0, 0, 0, 113, 0),
(662, '2023-10-01', 0, 0, 0, 0, 113, 0),
(663, '2023-11-01', 0, 0, 0, 0, 113, 0),
(664, '2023-12-01', 0, 0, 0, 0, 113, 0),
(665, '2023-01-01', 92, 13, 2, 11, 70123, 12),
(666, '2023-02-01', 93, 15, 14, 1, 70123, 14),
(667, '2023-04-01', 88, 17, 15, 2, 70123, 15),
(668, '2023-06-01', 100, 13, 13, 0, 70123, 13),
(669, '2023-03-01', 100, 14, 14, 0, 70123, 14),
(670, '2023-07-01', 83, 18, 15, 3, 70123, 15),
(671, '2023-05-01', 90, 20, 18, 2, 70123, 18),
(672, '2023-09-01', 87, 15, 13, 2, 70123, 13),
(673, '2023-08-01', 70, 10, 7, 3, 70123, 7),
(674, '2023-10-01', 75, 8, 6, 2, 70123, 6),
(675, '2023-11-01', 80, 10, 8, 2, 70123, 8),
(676, '2023-12-01', 17, 12, 2, 10, 70123, 2),
(677, '2023-02-01', 50, 10, 5, 5, 1112, 5),
(678, '2023-01-01', 0, 0, 0, 0, 1112, 8),
(679, '2023-03-01', 67, 12, 8, 4, 1112, 8),
(680, '2023-05-01', 100, 8, 8, 0, 1112, 8),
(681, '2023-04-01', 50, 10, 5, 5, 1112, 5),
(682, '2023-07-01', 87, 15, 13, 2, 1112, 13),
(683, '2023-09-01', 90, 20, 18, 2, 1112, 18),
(684, '2023-08-01', 100, 17, 17, 0, 1112, 17),
(685, '2023-06-01', 100, 19, 19, 0, 1112, 19),
(686, '2023-10-01', 85, 20, 17, 3, 1112, 17),
(687, '2023-12-01', 100, 24, 24, 0, 1112, 24),
(688, '2023-11-01', 83, 12, 10, 2, 1112, 10),
(689, '2023-03-01', 0, 0, 0, 0, 1818, 0),
(690, '2023-01-01', 0, 0, 0, 0, 1818, 0),
(691, '2023-02-01', 0, 0, 0, 0, 1818, 0),
(692, '2023-04-01', 0, 0, 0, 0, 1818, 0),
(693, '2023-05-01', 0, 0, 0, 0, 1818, 0),
(694, '2023-07-01', 0, 0, 0, 0, 1818, 0),
(695, '2023-06-01', 0, 0, 0, 0, 1818, 0),
(696, '2023-09-01', 0, 0, 0, 0, 1818, 0),
(697, '2023-10-01', 0, 0, 0, 0, 1818, 0),
(698, '2023-08-01', 0, 0, 0, 0, 1818, 0),
(699, '2023-11-01', 0, 0, 0, 0, 1818, 0),
(700, '2023-12-01', 0, 0, 0, 0, 1818, 0);

-- --------------------------------------------------------

--
-- Table structure for table `data_renaksi`
--

CREATE TABLE `data_renaksi` (
  `id_renaksi` int(50) NOT NULL,
  `program` varchar(500) NOT NULL,
  `kegiatan` varchar(500) NOT NULL,
  `sub_kegiatan` varchar(500) NOT NULL,
  `tupoksi_inti` varchar(500) NOT NULL,
  `nip` int(100) NOT NULL,
  `tupoksi_tambahan` varchar(100) NOT NULL,
  `thl` int(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `files` varchar(500) NOT NULL,
  `ket_pegawai` longtext NOT NULL,
  `ket_admin` longtext NOT NULL,
  `ket_kaban` longtext NOT NULL,
  `req_start_date` date DEFAULT NULL,
  `req_end_date` date DEFAULT NULL,
  `kirim_ke` varchar(100) NOT NULL,
  `ditolak` varchar(100) NOT NULL,
  `kunci` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_renaksi`
--

INSERT INTO `data_renaksi` (`id_renaksi`, `program`, `kegiatan`, `sub_kegiatan`, `tupoksi_inti`, `nip`, `tupoksi_tambahan`, `thl`, `status`, `start_date`, `end_date`, `files`, `ket_pegawai`, `ket_admin`, `ket_kaban`, `req_start_date`, `req_end_date`, `kirim_ke`, `ditolak`, `kunci`) VALUES
(6152, 'Memukul Sapi', 'Memukul Sapi', 'Memukul Sapi', 'Memukul Sapi', 123, 'Labeling', 70123, 'Sementara', '2023-01-01', '2023-02-01', '', '', '', '', '0000-00-00', '0000-00-00', '', '', 'Ya'),
(6153, 'Menggoreng Telur', 'Menggoreng Telur', 'Menggoreng Telur', 'Menggoreng Telur', 123, 'Labeling', 0, 'Sementara', '2022-12-01', '2022-12-01', '', 'So gosong tu telor', '', 'Tolak', NULL, NULL, '', '', 'Ya'),
(6154, 'Latihan Tinju', 'Latihan Tinju', 'Latihan Tinju', 'Latihan Tinju', 123, 'See Samrat', 0, 'Menunggu Jadwal Diubah', '2023-01-01', '2023-04-01', 'IMG-20220420-WA0025_1665486033422.jpg', 'Baku pukul', '', 'Katedu', '2023-05-01', '2023-12-01', 'Kaban', '', ''),
(6155, 'Makan Pisang Goreng', 'Makan Pisang Goreng', 'Makan Pisang Goreng', 'Makan Pisang Goreng', 123, 'Labeling', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', '0000-00-00', '0000-00-00', '', '', ''),
(6156, 'Main Bola', 'Main Bola', 'Main Bola', 'Main Bola', 123, 'Labeling', 70123, 'Menunggu Jadwal Diubah', '2023-01-01', '2023-04-01', 'IMG-20220420-WA0025_1665486033422 (3)_1672757499344.jpg', 'Sudah konfirmasi ke kabid, dan kabid memperbolehkan', 'Laksanakan Kegiatan Ini Segera!', '', NULL, NULL, 'Kaban', '', ''),
(6157, 'Menjaga Anak', 'Menjaga Anak', 'Menjaga Anak', 'Menjaga Anak', 123, 'Labeling', 70123, 'Sementara', '2023-05-01', '2023-12-01', 'IMG-20220420-WA0026_1665484970813.jpg', 'So ganti ade baru', '', '', '0000-00-00', '0000-00-00', '', '', ''),
(6158, 'Membawa Anak ke Rumah Sakit', 'Membawa Anak ke Rumah Sakit', 'Membawa Anak ke Rumah Sakit', 'Membawa Anak ke Rumah Sakit', 123, 'Labeling', 80129, 'Menunggu Jadwal Diubah', '2023-01-01', '2023-04-01', '', 'kirim pa kaban', 'Hapus Jo Dang!', 'Coba sekarang', '2023-06-01', '2023-11-01', 'Kaban', '', ''),
(6159, 'Memasak Abon', 'Memasak Abon', 'Memasak Abon', 'Memasak Abon', 123, '', 0, 'Menunggu Renaksi Dihapus', '2023-01-01', '2023-04-01', 'IMG-20220420-WA0025_1665486033422 (3)_1672757499344.jpg', 'Ikan di tahun 2023 lagi kosong!', '', '', NULL, NULL, 'Admin', '', ''),
(6160, 'Menggoreng Sapi', 'Menggoreng Sapi', 'Menggoreng Sapi', 'Menggoreng Sapi', 123, '', 70123, 'Sementara', '2023-01-01', '2023-04-01', 'Data Cakin Mikha Pandelaki_1672757293891.pdf', 'Sapi so matang', '', '', '0000-00-00', '0000-00-00', '', '', ''),
(6164, 'Menggocek Lawan', 'Menggocek Lawan', 'Menggocek Lawan', 'Menggocek Lawan', 1, 'Labeling', 80129, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6165, 'Ojek Online', 'Ojek Online', 'Ojek Online', 'Ojek Online', 1, '', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6166, 'Mengecas Hp', 'Mengecas Hp', 'Mengecas Hp', 'Mengecas Hp', 1, 'Labeling', 80129, 'Sementara', '2023-01-01', '2023-04-01', '', 'Hp ilang', '', 'Mana dang dp bukti!``11111', NULL, NULL, '', '', ''),
(6167, 'Mendengar Radio', 'Mendengar Radio', 'Mendengar Radio', 'Mendengar Radio', 1, 'Lainnya', 70123, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6168, 'Beli Laptop', 'Beli Laptop', 'Beli Laptop', 'Beli Laptop', 1, 'Labeling', 80129, 'Selesai', '2023-01-01', '2023-04-01', 'IMG-20220308-WA0040_1665487851647.jpg', 'Napa so ada laptop', '', '', NULL, NULL, '', '', ''),
(6169, 'Berkencan deng Andre', 'Berkencan deng Andre', 'Berkencan deng Andre', 'Berkencan deng Andre', 11, '', 70123, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6170, 'Belajar Tidur', 'Belajar Tidur', 'Belajar Tidur', 'Belajar Tidur', 11, '', 70123, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6171, 'Mencuci Baju', 'Mencuci Baju', 'Mencuci Baju', 'Mencuci Baju', 11, 'Labeling', 70123, 'Sementara', '2023-01-01', '2023-04-01', '', 'Talalu banya baju', 'Ba laundry jo brikut', '', '0000-00-00', '0000-00-00', '', '', ''),
(6172, 'Membeli Parfum', 'Membeli Parfum', 'Membeli Parfum', 'Membeli Parfum', 11, 'Labeling', 80129, 'Selesai', '2023-01-01', '2023-04-01', '', 'Parfum mantap', '', '', NULL, NULL, '', '', ''),
(6173, ' Menikah', ' Menikah', ' Menikah', ' Menikah', 123, 'Labeling', 70123, 'Menunggu Jadwal Diubah', '2023-01-01', '2023-04-01', 'IMG-20220308-WA0040_1665487851647.jpg', 'Pernikahan dibatalkan', '', '', '2023-06-01', '2023-10-01', 'Kaban', 'Kaban', ''),
(6174, 'Makan KFC', 'Makan KFC', 'Makan KFC', 'Makan KFC', 123, '', 80129, 'Dihapus', '2023-01-01', '2023-04-01', 'bapenda_kepatuhan (8)_1670988983248.sql', 'Mo Hapus', '', '', NULL, NULL, '', '', ''),
(6175, 'Minum Kopi Kenangan Mantan', 'Minum Kopi Kenangan Mantan', 'Minum Kopi Kenangan Mantan', 'Minum Kopi Kenangan Mantan', 123, '', 70123, 'Sementara', '2023-01-01', '2023-04-01', '', 'Sudah konfirmasi ke kaban, dan kaban sudah acc', '', '', NULL, NULL, 'Admin', '', ''),
(6176, 'Bersandar di bahu pasangan', 'Bersandar di bahu pasangan', 'Bersandar di bahu pasangan', 'Bersandar di bahu pasangan', 123, '', 70123, 'Sementara', '2023-01-01', '2023-04-01', 'SURAT PERMOHONAN TAMAT_ONLINE_RevMaret 2022_1670313430951.pdf', '', 'Kurang jelas buktinya!', '', NULL, NULL, '', '', ''),
(6177, 'Keceplosan', 'Keceplosan', 'Keceplosan', 'Keceplosan', 2, 'Labeling', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6178, 'Melahirkan', 'Melahirkan', 'Melahirkan', 'Melahirkan', 2, '', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6179, 'Memancing Ikan', 'Memancing Ikan', 'Memancing Ikan', 'Memancing Ikan', 2, '', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6180, 'Menggiring Opini', 'Menggiring Opini', 'Menggiring Opini', 'Menggiring Opini', 2, '', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6181, 'Memperbaiki Diri', 'Memperbaiki Diri', 'Memperbaiki Diri', 'Memperbaiki Diri', 22, 'Labeling', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', 'Xixapi tidak boleh berenang di lautan api!!', NULL, NULL, '', '', ''),
(6182, 'Menyanyi Kerupuk', 'Menyanyi Kerupuk', 'Menyanyi Kerupuk', 'Menyanyi Kerupuk', 22, '', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', 'Xixapi tidak boleh berenang di lautan api!!', NULL, NULL, '', '', ''),
(6183, 'Berenang Di Lautan Api', 'Berenang Di Lautan Api', 'Berenang Di Lautan Api', 'Berenang Di Lautan Api', 22, '', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', 'Xixapi tidak boleh berenang di lautan api!!', NULL, NULL, '', '', ''),
(6185, '123123', '', '', '', 11, '', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', 'asdasda', '', NULL, NULL, '', '', ''),
(6186, '123123', '', '', '', 11, '', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', 'asdasda', '', NULL, NULL, '', '', ''),
(6187, '123123', '', '', '', 1124, '', 0, 'Renaksi Ditolak', '2023-01-01', '2023-04-01', '', '', 'Belum boleh dilanjutkan!', 'Katedu', NULL, NULL, '', '', ''),
(6188, '111', '', '', '', 1123, '', 0, 'Menunggu Renaksi Diterima', '2023-01-01', '2023-04-01', '', '', 'Nda cocok!', '', NULL, NULL, 'Admin', 'Kaban', ''),
(6189, 'Membayar Pajak', 'Membayar Pajak', 'Membayar Pajak', 'Membayar Pajak', 123, 'Labeling', 80129, 'Selesai', '2023-01-01', '2023-04-01', 'Ninja 05-12-2022_1670313901275.pdf', 'So bayar ne!', 'Nmble bayar pajak!', 'Bayar pajak nanti Desember saja!', NULL, NULL, 'Admin', '', ''),
(6190, 'Kasubid Punya', 'Kasubid Punya', 'Kasubid Punya', 'Kasubid Punya', 141, 'Labeling', 0, 'Menunggu Renaksi Dihapus', '2023-01-01', '2023-04-01', '', '', 'shiro', '', NULL, NULL, 'Staff', 'Kaban', ''),
(6191, 'Tes', '', 'Kasubid Punya', 'Kasubid Punya', 141, 'Labelling', 0, 'Selesai', '2023-01-01', '2023-04-01', '', '', 'shiky', 'Anet', NULL, NULL, 'Admin', '', ''),
(6192, 'Kabid Punya', 'Kabid Punya', 'Kabid Punya', 'Kabid Punya', 141, 'Labeling', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6193, 'Tes Ulang Kabid', '', '', '', 142, '', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6194, 'DB Program', 'DB Kegiatan', 'DB Sub', 'DB T Inti', 1411, 'DB T Tambah', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6195, 'Evaluasi 1', 'Evaluasi 1', 'Evaluasi 1', 'Evaluasi 1', 123, 'Labeling', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6196, 'Evaluasi 2', 'Evaluasi 2', 'Evaluasi 2', 'Evaluasi 2', 123, 'Lainnya', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6197, 'Menagih Pajak', 'Menagih Pajak', 'Menagih Pajak', 'Menagih Pajak', 123, 'Labeling', 80129, 'Sementara', '2023-01-01', '2023-04-01', '', 'Minta tolong dang trima akang', 'Maaf masih belum bisa!', '', NULL, NULL, 'Admin', '', ''),
(6198, 'Merayakan Tahun Baru', 'Merayakan Tahun Baru', 'Merayakan Tahun Baru', 'Merayakan Tahun Baru', 123, 'Labeling', 80129, 'Selesai', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', '', ''),
(6199, 'Mengecek Server', 'Mengecek Server', 'Mengecek Server', 'Mengecek Server', 123, 'Labeling', 80129, 'Menunggu Renaksi Dihapus', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', '', ''),
(6200, 'Memperbaiki Server', 'Memperbaiki Server', 'Memperbaiki Server', 'Memperbaiki Server', 123, 'Labeling', 0, 'Menunggu Renaksi Dihapus', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', '', ''),
(6201, 'Upacara 17 Agustus', 'Upacara 17 Agustus', 'Upacara 17 Agustus', 'Upacara 17 Agustus', 123, '', 0, 'Menunggu Renaksi Diterima', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Kasubid', 'Kasubid', ''),
(6202, 'Menghitung Penghasilan Pajak Kendaraan', 'Menghitung Penghasilan Pajak Kendaraan', 'Menghitung Penghasilan Pajak Kendaraan', 'Menghitung Penghasilan Pajak Kendaraan', 123, '', 0, 'Menunggu Jadwal Diubah', '2023-01-01', '2023-04-01', '', '', '', '', '2023-05-01', '2023-12-01', 'Admin', '', ''),
(6203, 'Sosialisasi Mengenai Pajak', 'Sosialisasi Mengenai Pajak', 'Sosialisasi Mengenai Pajak', 'Sosialisasi Mengenai Pajak', 123, '', 0, 'Menunggu Jadwal Diubah', '2023-01-01', '2023-04-01', '', '', '', '', '2023-05-01', '2023-12-01', 'Admin', '', ''),
(6204, 'Rapat Evaluasi Bulanan', 'Rapat Evaluasi Bulanan', 'Rapat Evaluasi Bulanan', 'Rapat Evaluasi Bulanan', 123, '', 0, 'Menunggu Jadwal Diubah', '2023-01-01', '2023-04-01', '', '', 'Tidak boleh ditunda lagi!', '', '2023-05-01', '2023-12-01', 'Staff', 'Kabid', ''),
(6205, 'Menghadiri Peresmian Jalan Tol', 'Menghadiri Peresmian Jalan Tol', 'Menghadiri Peresmian Jalan Tol', 'Menghadiri Peresmian Jalan Tol', 123, '', 0, 'Selesai', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', '', ''),
(6206, 'Upload Aplikasi Kepatuhan', 'Upload Aplikasi Kepatuhan', 'Upload Aplikasi Kepatuhan', 'Upload Aplikasi Kepatuhan', 123, 'Labeling', 80129, 'Selesai', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', '', ''),
(6207, 'Install Axios Pada Server', 'Install Axios Pada Server', 'Install Axios Pada Server', 'Install Axios Pada Server', 123, '', 80129, 'Selesai', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', '', ''),
(6208, 'Instalasi Node Pada Database', 'Instalasi Node Pada Database', 'Instalasi Node Pada Database', 'Instalasi Node Pada Database', 123, '', 80129, 'Menunggu Renaksi Dihapus', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', '', ''),
(6209, 'Membuat Kue Natal', 'Membuat Kue Natal', 'Membuat Kue Natal', 'Membuat Kue Natal', 123, '', 70123, 'Menunggu Renaksi Dihapus', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', '', ''),
(6210, 'Membalut Luka Pasien', 'Membalut Luka Pasien', 'Membalut Luka Pasien', 'Membalut Luka Pasien', 123, '', 70123, 'Menunggu Renaksi Dihapus', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Kabid', '', ''),
(6211, 'Reinstall Windows Network', 'Reinstall Windows Network', 'Reinstall Windows Network', 'Reinstall Windows Network', 123, '', 0, 'Menunggu Jadwal Diubah', '2023-01-01', '2023-04-01', '', '', '', '', '2023-05-01', '2023-12-01', 'Kaban', 'Kaban', ''),
(6212, 'Mencuci Gelas', 'Mencuci Gelas', 'Mencuci Gelas', 'Mencuci Gelas', 123, '', 0, 'Menunggu Jadwal Diubah', '2023-01-01', '2023-04-01', '', '', '', '', '2023-05-01', '2023-12-01', 'Kaban', '', ''),
(6213, 'Mengupas Kulit Kacang', 'Mengupas Kulit Kacang', 'Mengupas Kulit Kacang', 'Mengupas Kulit Kacang', 123, '', 0, 'Menunggu Jadwal Diubah', '2023-01-01', '2023-04-01', '', '', 'Tidak ada keterangan kenapa mau ubah jadwal', '', '2023-05-01', '2023-12-01', 'Staff', 'Kaban', ''),
(6214, 'Memakan Keripik', 'Memakan Keripik', 'Memakan Keripik', 'Memakan Keripik', 123, '', 0, 'Selesai', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Kaban', '', ''),
(6215, 'Mengukur Ikat Pinggang', 'Mengukur Ikat Pinggang', 'Mengukur Ikat Pinggang', 'Mengukur Ikat Pinggang', 123, '', 0, 'Selesai', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Kaban', 'Kaban', ''),
(6216, 'Mengurus Pajak Kendaraan', 'Mengurus Pajak Kendaraan', 'Mengurus Pajak Kendaraan', 'Mengurus Pajak Kendaraan', 123, '', 0, 'Selesai', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Kaban', '', ''),
(6217, 'Menghitung Pemasukan di Bulan Desember', 'Menghitung Pemasukan di Bulan Desember', 'Menghitung Pemasukan di Bulan Desember', 'Menghitung Pemasukan di Bulan Desember', 123, '', 0, 'Menunggu Renaksi Dihapus', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', '', ''),
(6218, 'Pameran di Kantor Walikota', 'Pameran di Kantor Walikota', 'Pameran di Kantor Walikota', 'Pameran di Kantor Walikota', 123, '', 0, 'Menunggu Renaksi Dihapus', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Kaban', 'Kaban', ''),
(6219, 'Membuat Lukisan Bapenda', 'Membuat Lukisan Bapenda', 'Membuat Lukisan Bapenda', 'Membuat Lukisan Bapenda', 123, '', 0, 'Menunggu Renaksi Dihapus', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Kaban', 'Kaban', ''),
(6220, 'Membangun Rumah 2 Lantai', 'Membangun Rumah 2 Lantai', 'Membangun Rumah 2 Lantai', 'Membangun Rumah 2 Lantai', 123, '', 0, 'Menunggu Renaksi Dihapus', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Kaban', '', ''),
(6221, 'Membangun Rumah Tangga', 'Membangun Rumah Tangga', 'Membangun Rumah Tangga', 'Membangun Rumah Tangga', 123, '', 0, 'Menunggu Jadwal Diubah', '2023-01-01', '2023-04-01', '', '', '', '', '2023-05-01', '2023-12-01', 'Admin', 'Admin', ''),
(6222, 'Melakukan Pemeriksaan Mata', 'Melakukan Pemeriksaan Mata', 'Melakukan Pemeriksaan Mata', 'Melakukan Pemeriksaan Mata', 123, '', 0, 'Menunggu Jadwal Diubah', '2023-01-01', '2023-04-01', '', '', '', '', '2023-05-01', '2023-12-01', 'Admin', 'Admin', ''),
(6223, 'Mengganti Baterai Jam Tangan', 'Mengganti Baterai Jam Tangan', 'Mengganti Baterai Jam Tangan', 'Mengganti Baterai Jam Tangan', 123, '', 0, 'Sementara', '2023-01-01', '2023-04-01', 'IMG-20220420-WA0025_1665486033422 (5)_1675485689321.jpg', '', '', '', '0000-00-00', '0000-00-00', '', '', ''),
(6224, 'Mengganti Time Zone Pada Database', 'Mengganti Time Zone Pada Database', 'Mengganti Time Zone Pada Database', 'Mengganti Time Zone Pada Database', 123, '', 0, 'Selesai', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', '', ''),
(6225, 'Membuat User Interface', 'Membuat User Interface', 'Membuat User Interface', 'Membuat User Interface', 123, '', 0, 'Selesai', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', 'Admin', ''),
(6226, 'Set Up Folder Projek', 'Set Up Folder Projek', 'Set Up Folder Projek', 'Set Up Folder Projek', 123, '', 0, 'Selesai', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', '', ''),
(6227, 'Instalasi Typescript Pada Project', 'Instalasi Typescript Pada Project', 'Instalasi Typescript Pada Project', 'Instalasi Typescript Pada Project', 123, '', 0, 'Menunggu Renaksi Dihapus', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', '', ''),
(6228, 'Mengajukan Proposal Tahun 2023', 'Mengajukan Proposal Tahun 2023', 'Mengajukan Proposal Tahun 2023', 'Mengajukan Proposal Tahun 2023', 123, '', 70123, 'Menunggu Renaksi Dihapus', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', 'Admin', ''),
(6229, 'Mengajukan Pinjaman Online', 'Mengajukan Pinjaman Online', 'Mengajukan Pinjaman Online', 'Mengajukan Pinjaman Online', 123, '', 80129, 'Menunggu Renaksi Dihapus', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, 'Admin', 'Admin', ''),
(6230, 'Maintenance Server', 'Maintenance Server', 'Maintenance Server', 'Maintenance Server', 123, '', 80129, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6231, 'Mengadakan Rapat Evaluasi Akhir Tahun', 'Mengadakan Rapat Evaluasi Akhir Tahun', 'Mengadakan Rapat Evaluasi Akhir Tahun', 'Mengadakan Rapat Evaluasi Akhir Tahun', 123, '', 0, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6232, 'Menjaga Keamanan Bapenda', 'Menjaga Keamanan Bapenda', 'Menjaga Keamanan Bapenda', 'Menjaga Keamanan Bapenda', 123, '', 80129, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', '', NULL, NULL, '', '', ''),
(6233, 'Ronda Malam', 'Ronda Malam', 'Ronda Malam', 'Ronda Malam', 123, '', 80129, 'Sementara', '2023-01-01', '2023-04-01', '', '', '', 'George Olaf Tidak Boleh Beli Obat!', NULL, NULL, '', '', ''),
(6234, 'Membeli Obat', 'Membeli Obat', 'Membeli Obat', 'Membeli Obat', 123, '', 0, 'Menunggu Renaksi Diterima', '2023-01-01', '2023-04-01', 'IMG-20220420-WA0025_1665486033422.jpg', '', 'Kaban bilang george olaf tidak boleh beli obat!', 'George Olaf Tidak Boleh Beli Obat!', NULL, NULL, 'Admin', 'Kaban', ''),
(6235, 'Memasak Ikan', 'Memasak Ikan', 'Memasak Ikan', 'Memasak Ikan', 123, '', 70123, 'Sementara', '2023-01-01', '2023-07-01', '', '', 'kenapa memasak ikan di bapenda?', 'George Olaf Tidak Boleh Beli Obat!', '2023-03-01', '2023-06-01', '', '', ''),
(6236, 'Memasak Ikan', 'Memasak Ikan', 'Memasak Ikan', 'Memasak Ikan', 141, 'Labeling', 0, 'Sementara', '2023-01-01', '2023-10-01', '', '', '', 'George Olaf Tidak Boleh Beli Obat!', NULL, NULL, '', '', ''),
(6237, 'Makan Kerupuk', 'Makan Kerupuk', 'Makan Kerupuk', 'Makan Kerupuk', 1411, 'Labeling', 0, 'Sementara', '2023-01-01', '2023-10-01', '', '', '', '', NULL, NULL, '', '', ''),
(6238, 'Membangunkan bangunan yg lagi tidur', 'Membangunkan bangunan yg lagi tidur', 'Membangunkan bangunan yg lagi tidur', 'bangunnnnnnnn', 1818, 'See Samrat', 80129, 'Menunggu Renaksi Diterima', '2023-04-01', '2023-05-01', '', '', '', '', NULL, NULL, 'Kasubid', '', ''),
(6239, 'Mencoba untuk menghapus masalalu', 'masalalu', 'hapus', 'Berhasil menghapus', 1818, 'Lainnya', 80129, 'Menunggu Renaksi Diterima', '2023-04-01', '2023-06-01', '', '', '', '', NULL, NULL, 'Kasubid', '', '');

--
-- Triggers `data_renaksi`
--
DELIMITER $$
CREATE TRIGGER `update_hasil` AFTER UPDATE ON `data_renaksi` FOR EACH ROW BEGIN
UPDATE cakin SET hasil_kinerja = lampiran_diterima / jumlah_kegiatan * 100;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `pegawai`
--

CREATE TABLE `pegawai` (
  `nama` varchar(100) NOT NULL,
  `nip` int(100) NOT NULL,
  `bidang` varchar(100) NOT NULL,
  `sub_bidang` varchar(100) NOT NULL,
  `jabatan` varchar(100) NOT NULL,
  `no_hp` varchar(100) NOT NULL,
  `sandi` varchar(100) NOT NULL,
  `foto` varchar(100) NOT NULL,
  `ket` longtext NOT NULL,
  `req` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pegawai`
--

INSERT INTO `pegawai` (`nama`, `nip`, `bidang`, `sub_bidang`, `jabatan`, `no_hp`, `sandi`, `foto`, `ket`, `req`) VALUES
('Chintya Somba', 1, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '1', '$2b$10$rs5yCrMpvWljmgIeW3XSrOkD5FbN.6diwFRS/NI1K02/oQ0Ri9WGa', '', '', ''),
('Shingeki', 2, 'Perencanaan dan Pengembangan', 'Pengelolaan Pendapatan Daerah', 'Staff', '2', '$2b$10$vuBFkI7SyPMCJ2aZYNEWxuf.r24rA63lAkVRxTgv0QZNyfPrWZ3Bq', '', '', ''),
('Monica Toshiba', 11, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '11', '$2b$10$LHtKw0GOPilDL06JHb/iTOYfkpIW8Qa.v6tfmaPf95tqQvz7Cynv6', '', '', ''),
('Xixapi', 22, 'Perencanaan dan Pengembangan', 'Pelaporan Data Pendapatan', 'Staff', '22', '$2b$10$NRolw8BxF9FAtUavEjro/eIz1PelA6y/Ck7YXK1lg4wRmQkyarbLy', '', '', ''),
('Staff 1', 112, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '112', '$2b$10$AfMeoGwLTkzR8GcbWFaE4uYubrkNdPv9XUXQSoqvxewaeL5QU.Z2a', '', '', ''),
('Staff 2', 113, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '113', '$2b$10$82hlXp7pN0NuSXsJ97wNZe8trG.6pVCXFeBAgHwcqWzx5SROTPmae', '', '', ''),
('George Olaf', 123, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '123', '$2b$10$wXEUX7NVv.Kf/Bd6c6SVCut.QGRvShjyifS8NKlsoyCLBXMrAG8LW', '', '', ''),
('Andre Waani', 141, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Kasubid', '141', '$2b$10$KCBcAv.xCK/VafjPxBGjSuFW0rJrTqcQWU.lboOS9zc3Guqv1gTiq', '', '', ''),
('Rizky Paputungan', 142, 'Perencanaan dan Pengembangan', 'Pengelolaan Pendapatan Daerah', 'Kasubid', '142', '$2b$10$aCqRaO9SC6zRiXFk/FJACumm2Mim8ycx/hf4.xyDxVf59icdrEJWa', '', '', ''),
('Julian', 1112, 'Sekretaris', 'Hukum dan Kepegawaian', 'Kasubag', '1112', '$2b$10$GzT4JC/oQQY1OiNwUbUeL.5aRJfWlVsiiuoIpRzze9RQIzqI8J4Se', '', '', ''),
('Sekre', 1122, 'Sekretaris', '', 'Sekretaris', '1122', '$2b$10$yQp6mZmAv.ffou.9/iDHFeQ92uKtHQoUj2eVJxvImrCRXHFtOc7QO', '', '', ''),
('Kabid Pajak', 1123, 'Pajak Daerah', '', 'Kabid', '1123', '$2b$10$QFv5xPq.bKkKL9Gxl3v6s.gUSp7jG28AwwDQS/RWBgEafN2LkaQbS', '', '', ''),
('Kabid Retribusi', 1124, 'Retribusi dan Lain-lain Pendapatan', '', 'Kabid', '1124', '$2b$10$YiESkBxdlv51FQUF0McoguQiDQugXsnifySBs9u8L8sfOd0QtH21C', '', '', ''),
('Salomo Mandagi', 1125, 'Pengendalian dan Evaluasi', '', 'Kabid', '1125', '$2b$10$grXUApq55KD980lpvtNOqesRAnBFscJNS1ez2tts7pnAQKDKpthU2', '', '', ''),
('Gerald Wuysang', 1411, 'Perencanaan dan Pengembangan', '', 'Kabid', '1411', '$2b$10$EinZwUDvOiddxVG0mYTNOu7b3oLc2zD3v.bbzk8gD1yeMKJrC06zW', '', '', ''),
('Jeremia Waani', 1818, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '1818', '$2b$10$wKssHgzoxqGrEtF3.hUqbeuoHexT82m7F5vPX0FjaFrLji5fJY2RK', '/waani,jeremiaAndreas_1681170072578.jpg', '', ''),
('Kepala Badan 23', 4123, '', '', 'Kaban', '551', '$2b$10$w2PvoUBtYJqi/CL8tPk6U.gTtSCjwJzdZbQCQLEwzUUQyfwTdm6x2', '', '', ''),
('Wahyudi Edkinson', 7781, 'Perencanaan dan Pengembangan', 'Pelaporan Data Pendapatan', 'Kasubid', '123', '$2b$10$e/YIXBZc73AjeHva.mAVL.np03jcvRjpXUJ3rMplvMN2qjtTr4EPC', '', '', ''),
('Kasub Pengendalian 1', 11251, 'Pengendalian dan Evaluasi', 'Evaluasi Kinerja', 'Kasubid', '11251', '$2b$10$Ty1NGeDqJ78O/bhkdkRomev5tYIhNTRZxH/DSoE.QPsuvDUg4yMCq', '', '', ''),
('Kasub Pengendalian 2', 11252, 'Pengendalian dan Evaluasi', 'Pengendalian dan Pembinaan Administrasi', 'Kasubid', '11252', '$2b$10$56TzUE7Rndvc1HYjRrrttOzJzke4qakekograNFYMrCQncVeI4PEq', '', '', ''),
('Kasub Pengendalian 3', 11253, 'Pengendalian dan Evaluasi', 'Pengendalian Pendapatan Daerah', 'Kasubid', '11253', '$2b$10$9cBoITqq2E9gjyL7RJSCZ.kS2Vf/MRQjQThQBVOywmesABSw7PvQa', '', '', ''),
('Ferren Kalalo', 12345, '', '', 'Kaban', '12345', '$2b$10$lqxj73QnOgpPtAAsTQlL9OZi0JuJ6rD2PX4CVDdhKyUVtABihLFo6', '', '', ''),
('Mikha Pandelaki', 70123, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'THL', '123', '$2b$10$wXEUX7NVv.Kf/Bd6c6SVCut.QGRvShjyifS8NKlsoyCLBXMrAG8LW', '', '', ''),
('Passofer', 80129, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'THL', '123', '$2b$10$5YHac.KEk9nLD58G719XJO2Ha07PmXGIP0Vr7mO3fHQH7KDn5DSkG', '', '', ''),
('Admin', 123123, '', '', 'Admin', '123123', '$2b$10$abG9KbWGgEEt8Rc1McKP.e5uusijyP3J2./CocjooR5JEHkAi4Am2', '', '', ''),
('George Olaf', 576123, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '126123', '$2b$10$V7mbMLsfLSgbubsJ5WLDBO4sNVOT1b3whPTe1cQva8yXhaDUumcti', '', '', ''),
('cuma cobaaasdasd', 23123123, '', '', '', '', '$2b$10$07Dvk4rTJLmkYpltGpS3oOBnQybDYPLsii3qFXDUwJHgOzODIhygm', '', '', ''),
('George Olaf', 2147483647, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '1231241241', '$2b$10$qX1DgdKSc.q/hLkft25XYuRC7CD.SW7JuGj0.zZ/STLq8KYgFo2oy', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `riwayat_kegiatan`
--

CREATE TABLE `riwayat_kegiatan` (
  `id_riwayat` int(100) NOT NULL,
  `id_renaksi` int(100) NOT NULL,
  `nip` int(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `kondisi` varchar(100) NOT NULL,
  `files` varchar(500) NOT NULL,
  `req_start_date` date DEFAULT NULL,
  `req_end_date` date DEFAULT NULL,
  `ket_pegawai` longtext NOT NULL,
  `ket_admin` longtext NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `thl` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `riwayat_kegiatan`
--

INSERT INTO `riwayat_kegiatan` (`id_riwayat`, `id_renaksi`, `nip`, `status`, `kondisi`, `files`, `req_start_date`, `req_end_date`, `ket_pegawai`, `ket_admin`, `start_date`, `end_date`, `thl`) VALUES
(1, 6141, 8800, 'Ubah Jadwal', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(2, 227, 123, 'Ubah Jadwal', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(4, 226, 123, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(6, 6137, 8800, 'Hapus Kegiatan', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(7, 221, 123, 'Hapus Kegiatan', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(8, 6135, 123, 'Hapus Kegiatan', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(9, 6135, 123, 'Hapus Kegiatan', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL, 0),
(10, 225, 123, 'Ubah Jadwal', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL, 0),
(11, 211, 123, 'Mengirim Renaksi', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL, 0),
(12, 222, 123, 'Mengirim Renaksi', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL, 0),
(13, 6142, 8800, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(14, 6142, 8800, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(15, 6142, 8800, 'Unggah Lampiran', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL, 0),
(16, 6154, 123, 'Ubah Jadwal', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(18, 6153, 123, 'Hapus Kegiatan', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(19, 6183, 22, 'Mengirim Renaksi', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL, 0),
(20, 6171, 11, 'Ubah Jadwal', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL, 0),
(21, 6158, 123, 'Ubah Jadwal', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(22, 6154, 123, 'Ubah Jadwal', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(23, 6172, 11, 'Unggah Lampiran', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL, 0),
(24, 6168, 1, 'Unggah Lampiran', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL, 0),
(25, 6152, 123, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(26, 6156, 123, 'Hapus Kegiatan', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL, 0),
(27, 6153, 123, 'Hapus Kegiatan', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(28, 6160, 123, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', NULL, NULL, 0),
(29, 6189, 123, 'Mengirim Renaksi', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL, 0),
(30, 6189, 123, 'Mengirim Renaksi', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL, 0),
(31, 6158, 123, 'Ubah Jadwal', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL, 0),
(32, 6155, 123, 'Hapus Kegiatan', 'Ditolak', '', '0000-00-00', '0000-00-00', '', '', '2022-12-31', '2022-11-30', 70123),
(33, 6172, 11, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', '2022-09-30', '2022-11-30', 70123),
(34, 6168, 2, 'Unggah Lampiran', 'Diterima', 'IMG-20220308-WA0040_1665487851647.jpg', NULL, NULL, '', '', '2022-01-31', '2022-11-30', 0),
(35, 6196, 123, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', '2022-06-30', '2022-11-30', 0),
(36, 6195, 123, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', '2022-05-31', '2022-11-30', 70123),
(37, 6174, 123, 'Hapus Kegiatan', 'Diterima', 'bapenda_kepatuhan (8)_1670988983248.sql', NULL, NULL, '', '', '2022-05-31', '2022-11-30', 0),
(39, 6195, 123, 'Hapus Kegiatan', 'Diterima', '', NULL, NULL, '', '', '2022-05-31', '2022-11-30', 0),
(40, 6196, 2, 'Hapus Kegiatan', 'Diterima', '', '0000-00-00', '0000-00-00', '', '', '2022-06-30', '2022-11-30', 0),
(42, 6196, 123, 'Ubah Jadwal', 'Diterima', '', '0000-00-00', '0000-00-00', '', '', '2023-06-30', '2023-11-30', 70123),
(43, 6195, 123, 'Ubah Jadwal', 'Diterima', '', '0000-00-00', '0000-00-00', '', '', '2022-05-31', '2022-11-30', 0),
(44, 6196, 123, 'Ubah Jadwal', 'Diterima', '', '0000-00-00', '0000-00-00', '', '', '0000-00-00', '0000-00-00', 0),
(45, 6195, 123, 'Ubah Jadwal', 'Diterima', '', '0000-00-00', '0000-00-00', '', '', '0000-00-00', '0000-00-00', 0),
(46, 6160, 123, 'Hapus Kegiatan', 'Ditolak', '', NULL, NULL, '', 'Hapus Jo Dang!', '2022-05-31', '2022-11-30', 70123),
(47, 6153, 123, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', '2021-12-31', '2022-11-30', 70123),
(48, 6153, 123, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', '2021-12-31', '2022-11-30', NULL),
(49, 6153, 123, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', '2021-12-31', '2022-11-30', NULL),
(50, 6152, 123, 'Hapus Kegiatan', 'Ditolak', '', NULL, NULL, 'So bangka bangka tu sapi', 'Harus Dilaksanakan Tahun Ini!', '2022-12-31', '2022-12-31', 70123),
(51, 6157, 123, 'Ubah Jadwal', 'Diterima', 'IMG-20220420-WA0026_1665484970813.jpg', '2023-05-01', '2023-12-01', '', '', '2022-12-31', '2022-12-31', 70123),
(52, 6223, 123, 'Ubah Jadwal', 'Ditolak', 'IMG-20220420-WA0025_1665486033422 (5)_1675485689321.jpg', '2023-04-30', '2023-11-30', 'So konsultasi deng kaban kong dia bilang boleh', 'Terlalu lama waktunya!', '2022-12-31', '2022-12-31', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `thl`
--

CREATE TABLE `thl` (
  `thl` int(100) NOT NULL,
  `nama_thl` varchar(100) NOT NULL,
  `bidang` varchar(100) NOT NULL,
  `sub_bidang` varchar(100) NOT NULL,
  `jabatan` varchar(100) NOT NULL,
  `no_hp` varchar(100) NOT NULL,
  `sandi` varchar(100) NOT NULL,
  `foto_thl` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `thl`
--

INSERT INTO `thl` (`thl`, `nama_thl`, `bidang`, `sub_bidang`, `jabatan`, `no_hp`, `sandi`, `foto_thl`) VALUES
(1, 'Chintya Somba', 'Perencanaan dan Pengembangan', '', 'Staff', '1', '$2b$10$rs5yCrMpvWljmgIeW3XSrOkD5FbN.6diwFRS/NI1K02/oQ0Ri9WGa', ''),
(2, 'Shingeki', 'Perencanaan dan Pengembangan', 'Pengelolaan Pendapatan Daerah', 'Staff', '2', '$2b$10$vuBFkI7SyPMCJ2aZYNEWxuf.r24rA63lAkVRxTgv0QZNyfPrWZ3Bq', ''),
(11, 'Monica Toshiba', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '11', '$2b$10$LHtKw0GOPilDL06JHb/iTOYfkpIW8Qa.v6tfmaPf95tqQvz7Cynv6', ''),
(22, 'Xixapi', 'Perencanaan dan Pengembangan', 'Pelaporan Data Pendapatan', 'Staff', '22', '$2b$10$NRolw8BxF9FAtUavEjro/eIz1PelA6y/Ck7YXK1lg4wRmQkyarbLy', ''),
(112, 'Staff 1', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '112', '$2b$10$AfMeoGwLTkzR8GcbWFaE4uYubrkNdPv9XUXQSoqvxewaeL5QU.Z2a', ''),
(113, 'Staff 2', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '113', '$2b$10$82hlXp7pN0NuSXsJ97wNZe8trG.6pVCXFeBAgHwcqWzx5SROTPmae', ''),
(123, 'George Olaf', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '123', '$2b$10$wXEUX7NVv.Kf/Bd6c6SVCut.QGRvShjyifS8NKlsoyCLBXMrAG8LW', ''),
(141, 'Andre Waani', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Kasubid', '141', '$2b$10$qA7yKvXRlgzXkkWPQYCRY.tUwl/RgXSCgYsYYRJB9/mOHye4pkHwO', ''),
(142, 'Rizky Paputungan', 'Perencanaan dan Pengembangan', 'Pengelolaan Pendapatan Daerah', 'Kasubid', '142', '$2b$10$aCqRaO9SC6zRiXFk/FJACumm2Mim8ycx/hf4.xyDxVf59icdrEJWa', ''),
(1111, 'Sapi', 'Pajak Daerah', 'Administrasi dan Pelayanan Pajak', 'Staff', '1111', '$2b$10$A8s8SPpWaPSOuXj8GOBk0eS7LDe5BUrMTFJzyZtjG23oqdDYNzt2W', ''),
(1112, 'Julian', 'Sekretaris', 'Hukum dan Kepegawaian', 'Kasubag', '1112', '$2b$10$GzT4JC/oQQY1OiNwUbUeL.5aRJfWlVsiiuoIpRzze9RQIzqI8J4Se', ''),
(1122, 'Erick', '', '', 'Kabid', '123', '$2b$10$xifLsFGrWn1YGK4UhHh4gOKbmHYSjkBO9a6S4xF4Urz5BQDkTkE1K', ''),
(1123, 'Kabid Pajak', 'Pajak Daerah', '', 'Kabid', '1123', '$2b$10$QFv5xPq.bKkKL9Gxl3v6s.gUSp7jG28AwwDQS/RWBgEafN2LkaQbS', ''),
(1124, 'Kabid Retribusi', 'Retribusi dan Lain-lain Pendapatan', '', 'Kabid', '1124', '$2b$10$YiESkBxdlv51FQUF0McoguQiDQugXsnifySBs9u8L8sfOd0QtH21C', ''),
(1125, 'Kabid Pengendalian', 'Pengendalian dan Evaluasi', '', 'Kabid', '1125', '$2b$10$grXUApq55KD980lpvtNOqesRAnBFscJNS1ez2tts7pnAQKDKpthU2', ''),
(1234, 'Shinzui', 'Perencanaan dan Pengembangan', 'Pengelolaan Pendapatan Daerah', 'Staff', '1234', '$2b$10$9vHxevqWv0a3O0IHGm4vqui9jNNKTFCL2EDEBG4KfUtxbBnayYIqG', ''),
(1411, 'Chintya', '', '', 'Kabid', '1411', '$2b$10$AnY9s9EB68l0MewPKNIOZOEoGpyx301cdIatyfNVJERWRrQsidWKi', ''),
(1551, 'Ka Isye', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '123', '$2b$10$XbCB4SFVgfcg4X/bJMAlzOdCOgAM2qgXkAIlT0wphAMGUUyGSd.kG', ''),
(1818, 'Jeremia Waani', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '1818', '$2b$10$wKssHgzoxqGrEtF3.hUqbeuoHexT82m7F5vPX0FjaFrLji5fJY2RK', ''),
(4123, 'Kepala Badan 23', '', '', 'Kaban', '551', '$2b$10$w2PvoUBtYJqi/CL8tPk6U.gTtSCjwJzdZbQCQLEwzUUQyfwTdm6x2', ''),
(5123, 'Poco', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'THL', '123', '$2b$10$GRGM0aseAFAntcPjOF6ltuo7m4drVCBMgTzj3JpQy9KwWZdNwFevq', '/pexels-photo-6787776_1664345977635.jpeg'),
(5500, 'Abe2', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '123', '$2b$10$af1MeuRR6nTv4.79avo3Z.ql09/AqGjk5IIZDQXZMs0UtzTarzPh6', ''),
(7781, 'Wahyudi Edkinson', 'Perencanaan dan Pengembangan', 'Pelaporan Data Pendapatan', 'Kasubid', '123', '$2b$10$e/YIXBZc73AjeHva.mAVL.np03jcvRjpXUJ3rMplvMN2qjtTr4EPC', ''),
(8800, 'Abe', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '123', '$2b$10$0WORwhX8vRBEdr.rzUhUceoH8QWNEPj9mg3DlZP8aiYS5KniRvtde', ''),
(9900, 'Gerald', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '123', '$2b$10$6q73Efr9c7dpZ/kGxHL8zuPnM6LBs95QP7tPOdKepBu1bBdG/pAsu', ''),
(11251, 'Kasub Pengendalian 1', 'Pengendalian dan Evaluasi', '', 'Kasubid', '11251', '$2b$10$Ty1NGeDqJ78O/bhkdkRomev5tYIhNTRZxH/DSoE.QPsuvDUg4yMCq', ''),
(11252, 'Kasub Pengendalian 2', 'Pengendalian dan Evaluasi', '', 'Kasubid', '11252', '$2b$10$56TzUE7Rndvc1HYjRrrttOzJzke4qakekograNFYMrCQncVeI4PEq', ''),
(11253, 'Kasub Pengendalian 3', 'Pengendalian dan Evaluasi', '', 'Kasubid', '11253', '$2b$10$9cBoITqq2E9gjyL7RJSCZ.kS2Vf/MRQjQThQBVOywmesABSw7PvQa', ''),
(12345, 'Gerald Wuysang', '', '', 'Kepala Badan', '12345', '$2b$10$7xxKrs7jUnY06fVLfYl7teuxhceM/jwJfZWYMTyrfl5.Nsovy3RIe', ''),
(12571, 'Zakeus', '', '', 'Kasubid', '123', '$2b$10$CTSKfJTZi0IpRLj8mIjl.ewbP/kf5hBjGYmpZ8Q6gy4vkEhIaHuH2', ''),
(51231, 'Lomo', 'Retribusi dan Lain-lain Pendapatan', 'Retribusi', 'THL', '123', '$2b$10$Q9LO2bj.ykoNzsg1V/wFZOFKLESYyneAtxD0mAxkhTEvicLTDYPGq', ''),
(70123, 'Mikha Pandelaki', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'THL', '123', '$2b$10$iy/rIgE.ZeTOepfvsKhafuQCLjkd3dBsmNnKIe6/GRS8KjvgTID7O', '/Bukti Pembayaran Serti_1669170186397.jpeg'),
(80129, 'Passofer', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'THL', '123', '$2b$10$5YHac.KEk9nLD58G719XJO2Ha07PmXGIP0Vr7mO3fHQH7KDn5DSkG', '/pexels-photo-6787776_1664345977635.jpeg'),
(123123, 'Admin', '', '', '', '', '$2b$10$5LrVSkXmILObn1AxISpiFuhqfWoNDpTW5tunZod0pRO97IC0Rh1Q.', ''),
(123512, 'EASD', 'Perencanaan dan Pengembangan', '', 'Kabid', '123', '$2b$10$Y/XCFVWyxGzdw3Pua/Li/epRTvmhO/1iij2PtuUKNTwDJxng5prOu', ''),
(414141, 'SASDASDASD', 'Sekretaris', '', 'Sekretaris', '4141', '$2b$10$QwcdJkausKpCKx4YQVc4A.3651mwk.LIy3My/RbQ7OWRZdo/SvFCm', ''),
(441123, 'Tes Kaban', '', '', 'Kaban', '44123', '$2b$10$I7GUeBDKBzbv8vvGLdekEerqpnAp/UD8LFB4d0zj87GagW9dgf9Qy', ''),
(576123, 'George Olaf', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '126123', '$2b$10$V7mbMLsfLSgbubsJ5WLDBO4sNVOT1b3whPTe1cQva8yXhaDUumcti', ''),
(1256123, 'Ferren', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'THL', '123', '$2b$10$/ZzwYJbMeEQzJdcuNxMN5OFvNBl6dCkr9kfR7WAeDGd7sZZmaFcEi', ''),
(5123123, 'Peter Pan', 'Perencanaan dan Pengembangan', 'Pengelolaan Pendapatan Daerah', 'Kasubid', '123', '$2b$10$gKrJAqC0S0d.owXXYPKdN.7LgysXK1/x0Ix6ewi1UCSxTaMyYa6z2', ''),
(23123123, 'cuma cobaaasdasd', '', '', '', '', '$2b$10$07Dvk4rTJLmkYpltGpS3oOBnQybDYPLsii3qFXDUwJHgOzODIhygm', ''),
(123123121, 'Andre Waani', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Kasubid', '1231231321', '$2b$10$hPgLuaXf6PuJEElpxTfqRe3yduAyqsc5HuDaFCr1ng0xOWwIZ8ojC', ''),
(123124123, '1231241', 'Pengendalian dan Evaluasi', 'Pengendalian dan Pembinaan Administrasi', 'Staff', '123123', '$2b$10$k/Ci4NeqJ3T8xiv046bgieuLYJ4.JDZiCLH1oqBO4bCJI3XAqIMS2', ''),
(2147483647, '12312315123', '', '', 'Kepala Badan', '124123', '$2b$10$PYvfHrpc3X6u.R53ExAFmeEv5mFEMuxNKrPN8QtKQLBps6hYD.NUK', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cakin`
--
ALTER TABLE `cakin`
  ADD PRIMARY KEY (`id_cakin`);

--
-- Indexes for table `data_renaksi`
--
ALTER TABLE `data_renaksi`
  ADD PRIMARY KEY (`id_renaksi`),
  ADD KEY `thl` (`thl`),
  ADD KEY `nip` (`nip`);

--
-- Indexes for table `pegawai`
--
ALTER TABLE `pegawai`
  ADD PRIMARY KEY (`nip`);

--
-- Indexes for table `riwayat_kegiatan`
--
ALTER TABLE `riwayat_kegiatan`
  ADD PRIMARY KEY (`id_riwayat`);

--
-- Indexes for table `thl`
--
ALTER TABLE `thl`
  ADD PRIMARY KEY (`thl`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cakin`
--
ALTER TABLE `cakin`
  MODIFY `id_cakin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=701;

--
-- AUTO_INCREMENT for table `data_renaksi`
--
ALTER TABLE `data_renaksi`
  MODIFY `id_renaksi` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6240;

--
-- AUTO_INCREMENT for table `riwayat_kegiatan`
--
ALTER TABLE `riwayat_kegiatan`
  MODIFY `id_riwayat` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
