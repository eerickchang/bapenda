-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2022 at 03:00 AM
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
(413, '2022-01-01', 0, 0, 0, 0, 123, 0),
(414, '2022-02-01', 0, 0, 0, 0, 123, 0),
(415, '2022-03-01', 0, 0, 0, 0, 123, 0),
(416, '2022-04-01', 0, 0, 0, 0, 123, 0),
(417, '2022-06-01', 0, 0, 0, 0, 123, 0),
(418, '2022-05-01', 0, 0, 0, 0, 123, 0),
(419, '2022-08-01', 0, 0, 0, 0, 123, 0),
(420, '2022-09-01', 0, 0, 0, 0, 123, 0),
(421, '2022-07-01', 0, 0, 0, 0, 123, 0),
(422, '2022-10-01', 20, 5, 1, 4, 123, 1),
(423, '2022-11-01', 14, 7, 2, 5, 123, 1),
(424, '2022-12-01', 0, 9, 1, 8, 123, 0),
(425, '2022-01-01', 0, 0, 0, 0, 11, 0),
(426, '2022-02-01', 0, 0, 0, 0, 11, 0),
(427, '2022-03-01', 0, 0, 0, 0, 11, 0),
(428, '2022-06-01', 0, 0, 0, 0, 11, 0),
(429, '2022-05-01', 0, 0, 0, 0, 11, 0),
(430, '2022-04-01', 0, 0, 0, 0, 11, 0),
(431, '2022-08-01', 0, 0, 0, 0, 11, 0),
(432, '2022-10-01', 0, 2, 1, 1, 11, 0),
(433, '2022-07-01', 0, 0, 0, 0, 11, 0),
(434, '2022-09-01', 0, 0, 0, 0, 11, 0),
(435, '2022-11-01', 0, 2, 1, 1, 11, 0),
(436, '2022-12-01', 0, 4, 1, 3, 11, 0),
(461, '2022-01-01', 0, 0, 0, 0, 141, 0),
(462, '2022-03-01', 0, 0, 0, 0, 141, 0),
(463, '2022-02-01', 0, 0, 0, 0, 141, 0),
(464, '2022-11-01', 6, 16, 4, 12, 141, 1),
(465, '2022-04-01', 0, 0, 0, 0, 141, 0),
(466, '2022-05-01', 0, 0, 0, 0, 141, 0),
(467, '2022-09-01', 0, 0, 0, 0, 141, 0),
(468, '2022-07-01', 0, 0, 0, 0, 141, 0),
(469, '2022-06-01', 0, 0, 0, 0, 141, 0),
(470, '2022-12-01', 0, 20, 5, 15, 141, 0),
(471, '2022-10-01', 0, 0, 0, 0, 141, 0),
(472, '2022-08-01', 0, 0, 0, 0, 141, 0),
(473, '2022-01-01', 0, 0, 0, 0, 1411, 0),
(474, '2022-02-01', 0, 0, 0, 0, 1411, 0),
(475, '2022-03-01', 0, 0, 0, 0, 1411, 0),
(476, '2022-04-01', 0, 0, 0, 0, 1411, 0),
(477, '2022-05-01', 0, 0, 0, 0, 1411, 0),
(478, '2022-07-01', 0, 0, 0, 0, 1411, 0),
(479, '2022-09-01', 0, 0, 0, 0, 1411, 0),
(480, '2022-08-01', 0, 0, 0, 0, 1411, 0),
(481, '2022-06-01', 0, 0, 0, 0, 1411, 0),
(482, '2022-10-01', 0, 0, 0, 0, 1411, 0),
(483, '2022-11-01', 5, 22, 4, 18, 1411, 1),
(484, '2022-12-01', 0, 23, 5, 18, 1411, 0),
(485, '2022-01-01', 0, 0, 0, 0, 142, 0),
(486, '2022-02-01', 0, 0, 0, 0, 142, 0),
(487, '2022-03-01', 0, 0, 0, 0, 142, 0),
(488, '2022-04-01', 0, 0, 0, 0, 142, 0),
(489, '2022-06-01', 0, 0, 0, 0, 142, 0),
(490, '2022-05-01', 0, 0, 0, 0, 142, 0),
(491, '2022-11-01', 67, 3, 0, 3, 142, 2),
(492, '2022-09-01', 0, 0, 0, 0, 142, 0),
(493, '2022-07-01', 0, 0, 0, 0, 142, 0),
(494, '2022-08-01', 0, 0, 0, 0, 142, 0),
(495, '2022-10-01', 0, 0, 0, 0, 142, 0),
(496, '2022-12-01', 0, 3, 0, 3, 142, 0),
(497, '2022-01-01', 0, 0, 0, 0, 7781, 0),
(498, '2022-02-01', 0, 0, 0, 0, 7781, 0),
(499, '2022-03-01', 0, 0, 0, 0, 7781, 0),
(500, '2022-05-01', 0, 0, 0, 0, 7781, 0),
(501, '2022-07-01', 0, 0, 0, 0, 7781, 0),
(502, '2022-10-01', 0, 0, 0, 0, 7781, 0),
(503, '2022-04-01', 0, 0, 0, 0, 7781, 0),
(504, '2022-11-01', 33, 6, 2, 4, 7781, 2),
(505, '2022-08-01', 0, 0, 0, 0, 7781, 0),
(506, '2022-12-01', 0, 0, 0, 0, 7781, 0),
(507, '2022-06-01', 0, 0, 0, 0, 7781, 0),
(508, '2022-09-01', 0, 0, 0, 0, 7781, 0),
(509, '2022-01-01', 0, 0, 0, 0, 1, 0),
(510, '2022-02-01', 0, 0, 0, 0, 1, 0),
(511, '2022-03-01', 0, 0, 0, 0, 1, 0),
(512, '2022-05-01', 0, 0, 0, 0, 1, 0),
(513, '2022-04-01', 0, 0, 0, 0, 1, 0),
(514, '2022-07-01', 0, 0, 0, 0, 1, 0),
(515, '2022-10-01', 0, 0, 0, 0, 1, 0),
(516, '2022-06-01', 0, 0, 0, 0, 1, 0),
(517, '2022-09-01', 0, 0, 0, 0, 1, 0),
(518, '2022-08-01', 0, 0, 0, 0, 1, 0),
(519, '2022-12-01', 0, 5, 1, 4, 1, 0),
(520, '2022-11-01', 0, 3, 1, 2, 1, 0),
(521, '2022-02-01', 0, 0, 0, 0, 2, 0),
(522, '2022-01-01', 0, 0, 0, 0, 2, 0),
(523, '2022-05-01', 0, 0, 0, 0, 2, 0),
(524, '2022-03-01', 0, 0, 0, 0, 2, 0),
(525, '2022-06-01', 0, 0, 0, 0, 2, 0),
(526, '2022-04-01', 0, 0, 0, 0, 2, 0),
(527, '2022-07-01', 0, 0, 0, 0, 2, 0),
(528, '2022-08-01', 0, 0, 0, 0, 2, 0),
(529, '2022-09-01', 0, 0, 0, 0, 2, 0),
(530, '2022-10-01', 0, 0, 0, 0, 2, 0),
(531, '2022-11-01', 0, 0, 0, 0, 2, 0),
(532, '2022-12-01', 0, 3, 0, 3, 2, 0),
(533, '2022-01-01', 0, 0, 0, 0, 22, 0),
(534, '2022-02-01', 0, 0, 0, 0, 22, 0),
(535, '2022-03-01', 0, 0, 0, 0, 22, 0),
(536, '2022-05-01', 0, 0, 0, 0, 22, 0),
(537, '2022-04-01', 0, 0, 0, 0, 22, 0),
(538, '2022-08-01', 0, 0, 0, 0, 22, 0),
(539, '2022-10-01', 0, 0, 0, 0, 22, 0),
(540, '2022-06-01', 0, 0, 0, 0, 22, 0),
(541, '2022-07-01', 0, 0, 0, 0, 22, 0),
(542, '2022-09-01', 0, 0, 0, 0, 22, 0),
(543, '2022-11-01', 0, 0, 0, 0, 22, 0),
(544, '2022-12-01', 0, 0, 0, 0, 22, 0),
(545, '2022-01-01', 0, 0, 0, 0, 12345, 0),
(546, '2022-02-01', 0, 0, 0, 0, 12345, 0),
(547, '2022-04-01', 0, 0, 0, 0, 12345, 0),
(548, '2022-03-01', 0, 0, 0, 0, 12345, 0),
(549, '2022-05-01', 0, 0, 0, 0, 12345, 0),
(550, '2022-06-01', 0, 0, 0, 0, 12345, 0),
(551, '2022-11-01', 0, 22, 4, 18, 12345, 0),
(552, '2022-07-01', 0, 0, 0, 0, 12345, 0),
(553, '2022-10-01', 0, 0, 0, 0, 12345, 0),
(554, '2022-08-01', 0, 0, 0, 0, 12345, 0),
(555, '2022-12-01', 0, 23, 5, 18, 12345, 0),
(556, '2022-09-01', 0, 0, 0, 0, 12345, 0),
(557, '2022-02-01', 0, 0, 0, 0, 1123, 0),
(558, '2022-01-01', 0, 0, 0, 0, 1123, 0),
(559, '2022-09-01', 0, 0, 0, 0, 1123, 0),
(560, '2022-08-01', 0, 0, 0, 0, 1123, 0),
(561, '2022-07-01', 0, 0, 0, 0, 1123, 0),
(562, '2022-06-01', 0, 0, 0, 0, 1123, 0),
(563, '2022-03-01', 0, 0, 0, 0, 1123, 0),
(564, '2022-10-01', 0, 0, 0, 0, 1123, 0),
(565, '2022-12-01', 0, 0, 0, 0, 1123, 0),
(566, '2022-04-01', 0, 0, 0, 0, 1123, 0),
(567, '2022-05-01', 0, 0, 0, 0, 1123, 0),
(568, '2022-11-01', 50, 10, 5, 5, 1123, 5),
(569, '2022-01-01', 0, 0, 0, 0, 1124, 0),
(570, '2022-02-01', 0, 0, 0, 0, 1124, 0),
(571, '2022-03-01', 0, 0, 0, 0, 1124, 0),
(572, '2022-04-01', 0, 0, 0, 0, 1124, 0),
(573, '2022-05-01', 0, 0, 0, 0, 1124, 0),
(574, '2022-06-01', 0, 0, 0, 0, 1124, 0),
(575, '2022-07-01', 0, 0, 0, 0, 1124, 0),
(576, '2022-08-01', 0, 0, 0, 0, 1124, 0),
(577, '2022-09-01', 0, 0, 0, 0, 1124, 0),
(578, '2022-10-01', 0, 0, 0, 0, 1124, 0),
(579, '2022-11-01', 67, 30, 20, 10, 1124, 20),
(580, '2022-12-01', 0, 0, 0, 0, 1124, 0),
(581, '2022-03-01', 0, 0, 0, 0, 1125, 0),
(582, '2022-05-01', 0, 0, 0, 0, 1125, 0),
(583, '2022-04-01', 0, 0, 0, 0, 1125, 0),
(584, '2022-01-01', 0, 0, 0, 0, 1125, 0),
(585, '2022-07-01', 0, 0, 0, 0, 1125, 0),
(586, '2022-02-01', 0, 0, 0, 0, 1125, 0),
(587, '2022-06-01', 0, 0, 0, 0, 1125, 0),
(588, '2022-09-01', 0, 0, 0, 0, 1125, 0),
(589, '2022-08-01', 0, 0, 0, 0, 1125, 0),
(590, '2022-10-01', 0, 0, 0, 0, 1125, 0),
(591, '2022-12-01', 0, 0, 0, 0, 1125, 0),
(592, '2022-11-01', 60, 50, 40, 10, 1125, 30),
(593, '2022-01-01', 0, 0, 0, 0, 1122, 0),
(594, '2022-02-01', 0, 0, 0, 0, 1122, 0),
(595, '2022-05-01', 0, 0, 0, 0, 1122, 0),
(596, '2022-04-01', 0, 0, 0, 0, 1122, 0),
(597, '2022-03-01', 0, 0, 0, 0, 1122, 0),
(598, '2022-09-01', 0, 0, 0, 0, 1122, 0),
(599, '2022-08-01', 0, 0, 0, 0, 1122, 0),
(600, '2022-07-01', 0, 0, 0, 0, 1122, 0),
(601, '2022-06-01', 0, 0, 0, 0, 1122, 0),
(602, '2022-10-01', 0, 0, 0, 0, 1122, 0),
(603, '2022-12-01', 0, 0, 0, 0, 1122, 0),
(604, '2022-11-01', 25, 20, 15, 5, 1122, 5),
(617, '2022-05-01', 0, 0, 0, 0, 123123, 0),
(618, '2022-04-01', 0, 0, 0, 0, 123123, 0),
(619, '2022-03-01', 0, 0, 0, 0, 123123, 0),
(620, '2022-07-01', 0, 0, 0, 0, 123123, 0),
(621, '2022-06-01', 0, 0, 0, 0, 123123, 0),
(622, '2022-01-01', 0, 0, 0, 0, 123123, 0),
(623, '2022-02-01', 0, 0, 0, 0, 123123, 0),
(624, '2022-11-01', 0, 22, 4, 18, 123123, 0),
(625, '2022-08-01', 0, 0, 0, 0, 123123, 0),
(626, '2022-12-01', 0, 0, 0, 0, 123123, 0),
(627, '2022-10-01', 0, 0, 0, 0, 123123, 0),
(628, '2022-09-01', 0, 0, 0, 0, 123123, 0),
(629, '2022-02-01', 0, 0, 0, 0, 441123, 0),
(630, '2022-01-01', 0, 0, 0, 0, 441123, 0),
(631, '2022-03-01', 0, 0, 0, 0, 441123, 0),
(632, '2022-04-01', 0, 0, 0, 0, 441123, 0),
(633, '2022-07-01', 0, 0, 0, 0, 441123, 0),
(634, '2022-05-01', 0, 0, 0, 0, 441123, 0),
(635, '2022-08-01', 0, 0, 0, 0, 441123, 0),
(636, '2022-11-01', 0, 0, 0, 0, 441123, 0),
(637, '2022-12-01', 0, 22, 4, 18, 441123, 0),
(638, '2022-09-01', 0, 0, 0, 0, 441123, 0),
(639, '2022-06-01', 0, 0, 0, 0, 441123, 0),
(640, '2022-10-01', 0, 0, 0, 0, 441123, 0);

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
  `ditolak` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_renaksi`
--

INSERT INTO `data_renaksi` (`id_renaksi`, `program`, `kegiatan`, `sub_kegiatan`, `tupoksi_inti`, `nip`, `tupoksi_tambahan`, `thl`, `status`, `start_date`, `end_date`, `files`, `ket_pegawai`, `ket_admin`, `ket_kaban`, `req_start_date`, `req_end_date`, `kirim_ke`, `ditolak`) VALUES
(6152, 'Memukul Sapi', 'Memukul Sapi', 'Memukul Sapi', 'Memukul Sapi', 123, 'Labeling', 0, 'Menunggu Renaksi Dihapus', '2022-01-01', '2022-05-01', '', 'So bangka bangka tu sapi', 'Sde', 'Tolak', NULL, NULL, 'Staff', 'Kabid'),
(6153, 'Menggoreng Telur', 'Menggoreng Telur', 'Menggoreng Telur', 'Menggoreng Telur', 123, 'Labeling', 0, 'Menunggu Renaksi Diterima', '2022-01-01', '2022-12-01', '', 'So gosong tu telor', '', 'Tolak', NULL, NULL, 'Admin', 'Kabid'),
(6154, 'Latihan Tinju', 'Latihan Tinju', 'Latihan Tinju', 'Latihan Tinju', 123, 'See Samrat', 0, 'Menunggu Renaksi Diterima', '2022-05-01', '2022-05-01', 'IMG-20220420-WA0025_1665486033422.jpg', 'So cape latihan tinju', '', 'Katedu', '2022-05-01', '2022-12-01', '', ''),
(6155, 'Makan Pisang Goreng', 'Makan Pisang Goreng', 'Makan Pisang Goreng', 'Makan Pisang Goreng', 123, 'Labeling', 0, 'Sementara', '2022-01-01', '2022-12-01', '', '', '', '', '0000-00-00', '0000-00-00', '', ''),
(6156, 'Main Bola', 'Main Bola', 'Main Bola', 'Main Bola', 123, 'Labeling', 70123, 'Menunggu Renaksi Dihapus', '2022-01-01', '2022-12-01', '', 'Cek jdg', 'katedu', '', NULL, NULL, 'Staff', ''),
(6157, 'Menjaga Anak', 'Menjaga Anak', 'Menjaga Anak', 'Menjaga Anak', 123, 'Labeling', 70123, 'Menunggu Renaksi Dihapus', '2022-01-01', '2022-12-01', 'IMG-20220420-WA0026_1665484970813.jpg', 'So ganti ade baru', 'Nembole mo hapus tu ade', '', NULL, NULL, 'Staff', ''),
(6158, 'Membawa Anak ke Rumah Sakit', 'Membawa Anak ke Rumah Sakit', 'Membawa Anak ke Rumah Sakit', 'Membawa Anak ke Rumah Sakit', 123, '', 80129, 'Menunggu Renaksi Dihapus', '2022-06-01', '2022-12-01', '', 'kirim pa kaban', 'Hapus Jo Dang!', 'Coba sekarang', '2022-06-01', '2022-11-01', 'Staff', 'Kabid'),
(6159, 'Memasak Abon', 'Memasak Abon', 'Memasak Abon', 'Memasak Abon', 123, '', 0, 'Sementara', '2022-01-01', '2022-12-01', '', '', '', '', NULL, NULL, '', ''),
(6160, 'Menggoreng Sapi', 'Menggoreng Sapi', 'Menggoreng Sapi', 'Menggoreng Sapi', 123, '', 70123, 'Menunggu Renaksi Dihapus', '2022-06-01', '2022-12-01', 'IMG-20220420-WA0025_1665484623552.jpg', 'So klar goreng napa riki so gosong', 'Hapus Jo Dang!', '', NULL, NULL, 'Staff', 'Kabid'),
(6164, 'Menggocek Lawan', 'Menggocek Lawan', 'Menggocek Lawan', 'Menggocek Lawan', 1, 'Labeling', 80129, 'Sementara', '2022-02-01', '2022-12-01', '', '', '', '', NULL, NULL, '', ''),
(6165, 'Ojek Online', 'Ojek Online', 'Ojek Online', 'Ojek Online', 1, '', 0, 'Sementara', '2022-06-01', '2022-12-01', '', '', '', '', NULL, NULL, '', ''),
(6166, 'Mengecas Hp', 'Mengecas Hp', 'Mengecas Hp', 'Mengecas Hp', 1, 'Labeling', 80129, 'Selesai', '2022-01-01', '2022-12-01', '', 'Hp ilang', '', 'Mana dang dp bukti!``11111', NULL, NULL, 'Staff', 'Kabid'),
(6167, 'Mendengar Radio', 'Mendengar Radio', 'Mendengar Radio', 'Mendengar Radio', 1, 'Lainnya', 70123, 'Sementara', '2022-04-01', '2022-12-01', '', '', '', '', NULL, NULL, '', ''),
(6168, 'Beli Laptop', 'Beli Laptop', 'Beli Laptop', 'Beli Laptop', 1, 'Labeling', 80129, 'Selesai', '2022-02-01', '2022-12-01', 'IMG-20220308-WA0040_1665487851647.jpg', 'Napa so ada laptop', 'Bukti berbeda deng keterangan', '', NULL, NULL, 'Admin', ''),
(6169, 'Berkencan deng Andre', 'Berkencan deng Andre', 'Berkencan deng Andre', 'Berkencan deng Andre', 11, '', 70123, 'Sementara', '2022-07-01', '2022-12-01', '', '', '', '', NULL, NULL, '', ''),
(6170, 'Belajar Tidur', 'Belajar Tidur', 'Belajar Tidur', 'Belajar Tidur', 11, '', 70123, 'Sementara', '2022-10-01', '2022-12-01', '', '', '', '', NULL, NULL, '', ''),
(6171, 'Mencuci Baju', 'Mencuci Baju', 'Mencuci Baju', 'Mencuci Baju', 11, 'Labeling', 70123, 'Sementara', '2022-10-01', '2022-12-01', '', 'Talalu banya baju', 'Ba laundry jo brikut', '', '0000-00-00', '0000-00-00', '', ''),
(6172, 'Membeli Parfum', 'Membeli Parfum', 'Membeli Parfum', 'Membeli Parfum', 11, 'Labeling', 80129, 'Selesai', '2022-10-01', '2022-12-01', '', 'Parfum mantap', 'Nda ada bukti', '', NULL, NULL, 'Admin', ''),
(6173, ' Menikah', ' Menikah', ' Menikah', ' Menikah', 123, 'Labeling', 70123, 'Sementara', '2022-01-01', '2022-12-01', '', '', '', '', NULL, NULL, '', ''),
(6174, 'Makan KFC', 'Makan KFC', 'Makan KFC', 'Makan KFC', 123, '', 80129, 'Sementara', '2022-06-01', '2022-12-01', '', '', '', '', NULL, NULL, '', ''),
(6175, 'Minum Kopi Kenangan Mantan', 'Minum Kopi Kenangan Mantan', 'Minum Kopi Kenangan Mantan', 'Minum Kopi Kenangan Mantan', 123, '', 70123, 'Menunggu Renaksi Diterima', '2022-10-01', '2022-12-01', '', '', '', '', NULL, NULL, '', ''),
(6176, 'Bersandar di bahu pasangan', 'Bersandar di bahu pasangan', 'Bersandar di bahu pasangan', 'Bersandar di bahu pasangan', 123, '', 70123, 'Selesai', '2022-10-01', '2022-12-01', 'SURAT PERMOHONAN TAMAT_ONLINE_RevMaret 2022_1670313430951.pdf', '', '', '', NULL, NULL, 'Kasubid', ''),
(6177, 'Keceplosan', 'Keceplosan', 'Keceplosan', 'Keceplosan', 2, 'Labeling', 0, 'Sementara', '2022-10-01', '2022-12-01', '', '', '', '', NULL, NULL, '', ''),
(6178, 'Melahirkan', 'Melahirkan', 'Melahirkan', 'Melahirkan', 2, '', 0, 'Sementara', '2022-10-01', '2022-12-01', '', '', '', '', NULL, NULL, '', ''),
(6179, 'Memancing Ikan', 'Memancing Ikan', 'Memancing Ikan', 'Memancing Ikan', 2, '', 0, 'Sementara', '2022-06-01', '2022-12-01', '', '', '', '', NULL, NULL, '', ''),
(6180, 'Menggiring Opini', 'Menggiring Opini', 'Menggiring Opini', 'Menggiring Opini', 2, '', 0, 'Sementara', '2022-04-01', '2022-11-01', '', '', '', '', NULL, NULL, '', ''),
(6181, 'Memperbaiki Diri', 'Memperbaiki Diri', 'Memperbaiki Diri', 'Memperbaiki Diri', 22, 'Labeling', 0, 'Sementara', '2022-02-01', '2022-11-01', '', '', '', 'Xixapi tidak boleh berenang di lautan api!!', NULL, NULL, '', ''),
(6182, 'Menyanyi Kerupuk', 'Menyanyi Kerupuk', 'Menyanyi Kerupuk', 'Menyanyi Kerupuk', 22, '', 0, 'Sementara', '2022-04-01', '2022-11-01', '', '', '', 'Xixapi tidak boleh berenang di lautan api!!', NULL, NULL, '', ''),
(6183, 'Berenang Di Lautan Api', 'Berenang Di Lautan Api', 'Berenang Di Lautan Api', 'Berenang Di Lautan Api', 22, '', 0, 'Sementara', '2022-03-01', '2022-11-01', '', '', '', 'Xixapi tidak boleh berenang di lautan api!!', NULL, NULL, '', ''),
(6185, '123123', '', '', '', 11, '', 0, 'Menunggu Renaksi Diterima', '2022-05-01', '2022-12-01', '', '', 'asdasda', '', NULL, NULL, 'Staff', ''),
(6186, '123123', '', '', '', 11, '', 0, 'Menunggu Renaksi Diterima', '2022-05-01', '2022-12-01', '', '', 'asdasda', '', NULL, NULL, 'Staff', ''),
(6187, '123123', '', '', '', 11, '', 0, 'Menunggu Renaksi Diterima', '2022-05-01', '2022-12-01', '', '', 'Belum boleh dilanjutkan!', '', NULL, NULL, 'Staff', ''),
(6188, '111', '', '', '', 11, '', 0, 'Menunggu Renaksi Diterima', '0000-00-00', '0000-00-00', '', '', 'Jangan macam-macam!', '', NULL, NULL, 'Staff', ''),
(6189, 'Membayar Pajak', 'Membayar Pajak', 'Membayar Pajak', 'Membayar Pajak', 123, 'Labeling', 80129, 'Selesai', '2022-03-01', '2022-11-01', 'Ninja 05-12-2022_1670313901275.pdf', '', 'Nmble bayar pajak!', 'Bayar pajak nanti Desember saja!', NULL, NULL, 'Kasubid', ''),
(6190, 'Kasubid Punya', 'Kasubid Punya', 'Kasubid Punya', 'Kasubid Punya', 141, 'Labeling', 0, 'Menunggu Renaksi Dihapus', '2022-07-01', '2022-12-01', '', '', 'shiro', '', NULL, NULL, 'Staff', 'Kaban'),
(6191, 'Tes', '', 'Kasubid Punya', 'Kasubid Punya', 141, 'Labelling', 0, 'Selesai', '2022-12-14', '2022-12-24', '', '', 'shiky', 'Anet', NULL, NULL, 'Kaban', ''),
(6192, 'Kabid Punya', 'Kabid Punya', 'Kabid Punya', 'Kabid Punya', 1411, 'Labeling', 0, 'Menunggu Renaksi Diterima', '2022-04-01', '2022-07-01', '', '', '', '', NULL, NULL, 'Kaban', ''),
(6193, 'Tes Ulang Kabid', '', '', '', 1411, '', 0, 'Menunggu Renaksi Diterima', '0000-00-00', '0000-00-00', '', '', '', '', NULL, NULL, 'Kaban', ''),
(6194, 'Tes Ulang Kabid', '', '', '', 1411, '', 0, 'Menunggu Renaksi Diterima', '2022-04-01', '2022-07-01', '', '', '', '', NULL, NULL, 'Kaban', '');

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
-- Table structure for table `notifikasi`
--

CREATE TABLE `notifikasi` (
  `id_notifikasi` int(100) NOT NULL,
  `dari` int(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `pesan` longtext NOT NULL,
  `pesan_template` longtext NOT NULL,
  `ke` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notifikasi`
--

INSERT INTO `notifikasi` (`id_notifikasi`, `dari`, `title`, `pesan`, `pesan_template`, `ke`) VALUES
(1, 5123, 'Diterima', '', 'Renaksi tahun 2023 telah diterima', 123);

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
  `foto` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pegawai`
--

INSERT INTO `pegawai` (`nama`, `nip`, `bidang`, `sub_bidang`, `jabatan`, `no_hp`, `sandi`, `foto`) VALUES
('Chintya Somba', 1, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '1', '$2b$10$rs5yCrMpvWljmgIeW3XSrOkD5FbN.6diwFRS/NI1K02/oQ0Ri9WGa', ''),
('Shingeki', 2, 'Perencanaan dan Pengembangan', 'Pengelolaan Pendapatan Daerah', 'Staff', '2', '$2b$10$vuBFkI7SyPMCJ2aZYNEWxuf.r24rA63lAkVRxTgv0QZNyfPrWZ3Bq', ''),
('Monica Toshiba', 11, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '11', '$2b$10$LHtKw0GOPilDL06JHb/iTOYfkpIW8Qa.v6tfmaPf95tqQvz7Cynv6', ''),
('Xixapi', 22, 'Perencanaan dan Pengembangan', 'Pelaporan Data Pendapatan', 'Staff', '22', '$2b$10$NRolw8BxF9FAtUavEjro/eIz1PelA6y/Ck7YXK1lg4wRmQkyarbLy', ''),
('George Olaf', 123, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '123', '$2b$10$wXEUX7NVv.Kf/Bd6c6SVCut.QGRvShjyifS8NKlsoyCLBXMrAG8LW', '/Bukti Pembayaran Serti_1669170186397.jpeg'),
('Andre Waani', 141, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Kasubid', '141', '$2b$10$KCBcAv.xCK/VafjPxBGjSuFW0rJrTqcQWU.lboOS9zc3Guqv1gTiq', ''),
('Rizky Paputungan', 142, 'Perencanaan dan Pengembangan', 'Pengelolaan Pendapatan Daerah', 'Kasubid', '142', '$2b$10$aCqRaO9SC6zRiXFk/FJACumm2Mim8ycx/hf4.xyDxVf59icdrEJWa', ''),
('Sekre', 1122, 'Sekretaris', '', 'Sekretaris', '1122', '$2b$10$yQp6mZmAv.ffou.9/iDHFeQ92uKtHQoUj2eVJxvImrCRXHFtOc7QO', ''),
('Kabid Pajak', 1123, 'Pajak Daerah', '', 'Kabid', '1123', '$2b$10$QFv5xPq.bKkKL9Gxl3v6s.gUSp7jG28AwwDQS/RWBgEafN2LkaQbS', ''),
('Kabid Retribusi', 1124, 'Retribusi dan Lain-lain Pendapatan', '', 'Kabid', '1124', '$2b$10$YiESkBxdlv51FQUF0McoguQiDQugXsnifySBs9u8L8sfOd0QtH21C', ''),
('Kabid Pengendalian', 1125, 'Pengendalian dan Evaluasi', '', 'Kabid', '1125', '$2b$10$grXUApq55KD980lpvtNOqesRAnBFscJNS1ez2tts7pnAQKDKpthU2', ''),
('Gerald Wuysang', 1411, 'Perencanaan dan Pengembangan', '', 'Kabid', '1411', '$2b$10$EinZwUDvOiddxVG0mYTNOu7b3oLc2zD3v.bbzk8gD1yeMKJrC06zW', ''),
('Wahyudi Edkinson', 7781, 'Perencanaan dan Pengembangan', 'Pelaporan Data Pendapatan', 'Kasubid', '123', '$2b$10$e/YIXBZc73AjeHva.mAVL.np03jcvRjpXUJ3rMplvMN2qjtTr4EPC', ''),
('Kasub Pengendalian 1', 11251, 'Pengendalian dan Evaluasi', 'Evaluasi Kinerja', 'Kasubid', '11251', '$2b$10$Ty1NGeDqJ78O/bhkdkRomev5tYIhNTRZxH/DSoE.QPsuvDUg4yMCq', ''),
('Kasub Pengendalian 2', 11252, 'Pengendalian dan Evaluasi', 'Pengendalian dan Pembinaan Administrasi', 'Kasubid', '11252', '$2b$10$56TzUE7Rndvc1HYjRrrttOzJzke4qakekograNFYMrCQncVeI4PEq', ''),
('Kasub Pengendalian 3', 11253, 'Pengendalian dan Evaluasi', 'Pengendalian Pendapatan Daerah', 'Kasubid', '11253', '$2b$10$9cBoITqq2E9gjyL7RJSCZ.kS2Vf/MRQjQThQBVOywmesABSw7PvQa', ''),
('Ferren Kalalo', 12345, '', '', 'Kaban', '12345', '$2b$10$lqxj73QnOgpPtAAsTQlL9OZi0JuJ6rD2PX4CVDdhKyUVtABihLFo6', ''),
('Mikha Pandelaki', 70123, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'THL', '123', '$2b$10$iy/rIgE.ZeTOepfvsKhafuQCLjkd3dBsmNnKIe6/GRS8KjvgTID7O', '/Bukti Pembayaran Serti_1669170186397.jpeg'),
('Passofer', 80129, 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'THL', '123', '$2b$10$5YHac.KEk9nLD58G719XJO2Ha07PmXGIP0Vr7mO3fHQH7KDn5DSkG', ''),
('Admin', 123123, '', '', 'Admin', '123123', '$2b$10$abG9KbWGgEEt8Rc1McKP.e5uusijyP3J2./CocjooR5JEHkAi4Am2', '');

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
  `end_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `riwayat_kegiatan`
--

INSERT INTO `riwayat_kegiatan` (`id_riwayat`, `id_renaksi`, `nip`, `status`, `kondisi`, `files`, `req_start_date`, `req_end_date`, `ket_pegawai`, `ket_admin`, `start_date`, `end_date`) VALUES
(1, 6141, 8800, 'Ubah Jadwal', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(2, 227, 123, 'Ubah Jadwal', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(3, 226, 123, 'Ubah Jadwal', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(4, 226, 123, 'Ubah Jadwal', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(5, 226, 123, 'Ubah Jadwal', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL),
(6, 6137, 8800, 'Hapus Kegiatan', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(7, 221, 123, 'Hapus Kegiatan', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(8, 6135, 123, 'Hapus Kegiatan', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(9, 6135, 123, 'Hapus Kegiatan', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL),
(10, 225, 123, 'Ubah Jadwal', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL),
(11, 211, 123, 'Mengirim Renaksi', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL),
(12, 222, 123, 'Mengirim Renaksi', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL),
(13, 6142, 8800, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(14, 6142, 8800, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(15, 6142, 8800, 'Unggah Lampiran', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL),
(16, 6154, 123, 'Ubah Jadwal', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(18, 6153, 123, 'Hapus Kegiatan', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(19, 6183, 22, 'Mengirim Renaksi', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL),
(20, 6171, 11, 'Ubah Jadwal', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL),
(21, 6158, 123, 'Ubah Jadwal', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(22, 6154, 123, 'Ubah Jadwal', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(23, 6172, 11, 'Unggah Lampiran', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL),
(24, 6168, 1, 'Unggah Lampiran', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL),
(25, 6152, 123, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(26, 6156, 123, 'Hapus Kegiatan', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL),
(27, 6153, 123, 'Hapus Kegiatan', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(28, 6160, 123, 'Unggah Lampiran', 'Diterima', '', NULL, NULL, '', '', NULL, NULL),
(29, 6189, 123, 'Mengirim Renaksi', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL),
(30, 6189, 123, 'Mengirim Renaksi', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL),
(31, 6158, 123, 'Ubah Jadwal', 'Ditolak', '', NULL, NULL, '', '', NULL, NULL),
(32, 6155, 123, 'Hapus Kegiatan', 'Ditolak', '', '0000-00-00', '0000-00-00', '', '', '2021-12-31', '2022-11-30');

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
(123, 'George Olaf', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '123', '$2b$10$wXEUX7NVv.Kf/Bd6c6SVCut.QGRvShjyifS8NKlsoyCLBXMrAG8LW', ''),
(141, 'Andre Waani', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Kasubid', '141', '$2b$10$qA7yKvXRlgzXkkWPQYCRY.tUwl/RgXSCgYsYYRJB9/mOHye4pkHwO', ''),
(142, 'Rizky Paputungan', 'Perencanaan dan Pengembangan', 'Pengelolaan Pendapatan Daerah', 'Kasubid', '142', '$2b$10$aCqRaO9SC6zRiXFk/FJACumm2Mim8ycx/hf4.xyDxVf59icdrEJWa', ''),
(1111, 'Sapi', 'Pajak Daerah', 'Administrasi dan Pelayanan Pajak', 'Staff', '1111', '$2b$10$A8s8SPpWaPSOuXj8GOBk0eS7LDe5BUrMTFJzyZtjG23oqdDYNzt2W', ''),
(1122, 'Erick', '', '', 'Kabid', '123', '$2b$10$xifLsFGrWn1YGK4UhHh4gOKbmHYSjkBO9a6S4xF4Urz5BQDkTkE1K', ''),
(1123, 'Kabid Pajak', 'Pajak Daerah', '', 'Kabid', '1123', '$2b$10$QFv5xPq.bKkKL9Gxl3v6s.gUSp7jG28AwwDQS/RWBgEafN2LkaQbS', ''),
(1124, 'Kabid Retribusi', 'Retribusi dan Lain-lain Pendapatan', '', 'Kabid', '1124', '$2b$10$YiESkBxdlv51FQUF0McoguQiDQugXsnifySBs9u8L8sfOd0QtH21C', ''),
(1125, 'Kabid Pengendalian', 'Pengendalian dan Evaluasi', '', 'Kabid', '1125', '$2b$10$grXUApq55KD980lpvtNOqesRAnBFscJNS1ez2tts7pnAQKDKpthU2', ''),
(1234, 'Shinzui', 'Perencanaan dan Pengembangan', 'Pengelolaan Pendapatan Daerah', 'Staff', '1234', '$2b$10$9vHxevqWv0a3O0IHGm4vqui9jNNKTFCL2EDEBG4KfUtxbBnayYIqG', ''),
(1411, 'Chintya', '', '', 'Kabid', '1411', '$2b$10$AnY9s9EB68l0MewPKNIOZOEoGpyx301cdIatyfNVJERWRrQsidWKi', ''),
(1551, 'Ka Isye', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'Staff', '123', '$2b$10$XbCB4SFVgfcg4X/bJMAlzOdCOgAM2qgXkAIlT0wphAMGUUyGSd.kG', ''),
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
(1256123, 'Ferren', 'Perencanaan dan Pengembangan', 'Pengembangan Teknologi', 'THL', '123', '$2b$10$/ZzwYJbMeEQzJdcuNxMN5OFvNBl6dCkr9kfR7WAeDGd7sZZmaFcEi', ''),
(5123123, 'Peter Pan', 'Perencanaan dan Pengembangan', 'Pengelolaan Pendapatan Daerah', 'Kasubid', '123', '$2b$10$gKrJAqC0S0d.owXXYPKdN.7LgysXK1/x0Ix6ewi1UCSxTaMyYa6z2', ''),
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
-- Indexes for table `notifikasi`
--
ALTER TABLE `notifikasi`
  ADD PRIMARY KEY (`id_notifikasi`);

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
  MODIFY `id_cakin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=641;

--
-- AUTO_INCREMENT for table `data_renaksi`
--
ALTER TABLE `data_renaksi`
  MODIFY `id_renaksi` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6195;

--
-- AUTO_INCREMENT for table `riwayat_kegiatan`
--
ALTER TABLE `riwayat_kegiatan`
  MODIFY `id_riwayat` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
