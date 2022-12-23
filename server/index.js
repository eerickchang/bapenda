// LIBRARY UNTUK EXPRESS
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");
const moment = require("moment");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      path.parse(file.originalname).name +
        "_" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });
const upload_file = multer({ storage });

// LIBRARY UNTUK SESSION & COOKIE
const session = require("express-session");
const cookieParser = require("cookie-parser");

// LIBRARY UNTUK HASH PASSWORD
const bcrypt = require("bcrypt");
const { promisify } = require("util");
const saltRounds = 10;

// CONNECT DATABASE
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "bapenda_kepatuhan",
});

// COOKIE
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// SESSION
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 99999 * 99999 * 99999,
    },
  })
);

// MIDDLEWARE
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client")));

app.post("/uploadFile", upload_file.single("file"), (req, res) => {
  if (req.file === undefined) {
    res.send("File belum di upload");
  } else {
    let finalFileURL = req.file.filename;
    res.send({ status: "success", file: finalFileURL });
  }
});

// UPLOAD FOTO
app.post("/uploadFoto", upload.single("photo"), (req, res) => {
  // let finalImageURL =
  //   req.protocol + "://" + req.get("host") + "/public/" + req.file.filename;
  let finalImageURL = req.file.filename;
  res.json({ status: "success", image: finalImageURL });
});

// SIMPAN FOTO DB
app.post("/simpanFotoDB", (req, res) => {
  const foto = req.body.foto;
  const nip = req.body.nip;

  const sqlUpdate = "UPDATE pegawai SET foto = ? WHERE nip = ?";
  let data = [foto, nip];

  db.query(sqlUpdate, data, (err, result) => {
    console.log(err);
  });

  const sqlUpdate2 = "UPDATE thl SET foto = ? WHERE nip = ?";
  let data2 = [foto, nip];

  db.query(sqlUpdate2, data2, (err, result) => {
    console.log(err);
  });
});

// AUTHENTIKASI LOGIN
app.post("/masuk", (req, res) => {
  const nama = req.body.nama;
  const sandi = req.body.sandi;
  const nip = req.body.nip;

  db.query("SELECT * FROM pegawai WHERE nip = ?", nip, (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      bcrypt.compare(sandi, result[0].sandi, (error, response) => {
        if (response) {
          req.session.user = result;
          res.send(result);
        } else {
          res.send({ message: "Password yang anda masukkan salah!" });
        }
      });
    } else {
      res.send({ message: "NIP yang anda masukkan salah!" });
    }
  });
});

// MENYIMPAN CACHE AGAR STATUS USER TETAP LOGGED IN
app.get("/masuk", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

// REGISTRASI ATAU INPUT DATA REGISTER
app.post("/daftar", (req, res) => {
  const nama = req.body.nama;
  const sandi = req.body.sandi;
  const nip = req.body.nip;
  const nohp = req.body.nohp;
  const jabatan = req.body.jabatan;
  const bidang = req.body.bidang;
  const subBidang = req.body.subBidang;

  bcrypt.hash(sandi, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    const sqlInsert =
      "INSERT INTO pegawai (nama, sandi, nip, no_hp, jabatan, bidang, sub_bidang) VALUES (?,?,?,?,?,?,?)";
    db.query(
      sqlInsert,
      [nama, hash, nip, nohp, jabatan, bidang, subBidang],
      (err, result) => {
        console.log(err);
      }
    );

    const sqlInsert2 =
      "INSERT INTO thl (nama_thl, sandi, thl, no_hp, jabatan, bidang, sub_bidang) VALUES (?,?,?,?,?,?,?)";
    db.query(
      sqlInsert2,
      [nama, hash, nip, nohp, jabatan, bidang, subBidang],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

// INPUT RENAKSI
app.post("/inputRenaksi", (req, res) => {
  const program = req.body.program;
  const kegiatan = req.body.kegiatan;
  const tupoksiInti = req.body.tupoksiInti;
  const subKegiatan = req.body.subKegiatan;
  const nip = req.body.nip;
  const tupoksiTambahan = req.body.tupoksiTambahan;
  const thl = req.body.thl;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  const sqlInsert =
    "INSERT INTO data_renaksi (program, kegiatan, tupoksi_inti, sub_kegiatan, nip, tupoksi_tambahan, thl, start_date, end_date, status, kirim_ke) VALUES (?,?,?,?,?,?,?,?,?, 'Menunggu Renaksi Diterima', 'Kasubid')";
  db.query(
    sqlInsert,
    [
      program,
      kegiatan,
      tupoksiInti,
      subKegiatan,
      nip,
      tupoksiTambahan,
      thl,
      startDate,
      endDate,
    ],
    (err, result) => {
      console.log(result);
    }
  );
});

// INPUT RENAKSI KASUBID
app.post("/inputRenaksiKasubid", (req, res) => {
  const program = req.body.program;
  const kegiatan = req.body.kegiatan;
  const tupoksiInti = req.body.tupoksiInti;
  const subKegiatan = req.body.subKegiatan;
  const nip = req.body.nip;
  const tupoksiTambahan = req.body.tupoksiTambahan;
  const thl = req.body.thl;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  const sqlInsert =
    "INSERT INTO data_renaksi (program, kegiatan, tupoksi_inti, sub_kegiatan, nip, tupoksi_tambahan, thl, start_date, end_date, status, kirim_ke) VALUES (?,?,?,?,?,?,?,?,?, 'Menunggu Renaksi Diterima', 'Kabid')";
  db.query(
    sqlInsert,
    [
      program,
      kegiatan,
      tupoksiInti,
      subKegiatan,
      nip,
      tupoksiTambahan,
      thl,
      startDate,
      endDate,
    ],
    (err, result) => {
      console.log(result);
    }
  );
});

// INPUT RENAKSI KABID
app.post("/inputRenaksiKabid", (req, res) => {
  const program = req.body.program;
  const kegiatan = req.body.kegiatan;
  const tupoksiInti = req.body.tupoksiInti;
  const subKegiatan = req.body.subKegiatan;
  const nip = req.body.nip;
  const tupoksiTambahan = req.body.tupoksiTambahan;
  const thl = req.body.thl;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  const sqlInsert =
    "INSERT INTO data_renaksi (program, kegiatan, tupoksi_inti, sub_kegiatan, nip, tupoksi_tambahan, thl, start_date, end_date, status, kirim_ke) VALUES (?,?,?,?,?,?,?,?,?, 'Menunggu Renaksi Diterima', 'Kaban')";
  db.query(
    sqlInsert,
    [
      program,
      kegiatan,
      tupoksiInti,
      subKegiatan,
      nip,
      tupoksiTambahan,
      thl,
      startDate,
      endDate,
    ],
    (err, result) => {
      console.log(result);
    }
  );
});

//AMBIL PEGAWAI
app.get("/pegawai", (req, res) => {
  const sqlSelect = "SELECT * FROM pegawai";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL DATA RENAKSI STATUS = 'SEMUA'
app.get("/ambilRenaksi", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kunci, data_renaksi.kegiatan, data_renaksi.ditolak, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.kirim_ke, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.nip, data_renaksi.ket_admin, data_renaksi.ket_pegawai, data_renaksi.files, pegawai.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl, thl.foto_thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE status != 'Dihapus'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
    console.log(err);
  });
});

//AMBIL DATA RENAKSI STATUS = 'SEMUA'
app.get("/ambilRiwayatKegiatan", (req, res) => {
  const sqlSelect =
    "SELECT riwayat_kegiatan.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.program, riwayat_kegiatan.end_date, riwayat_kegiatan.start_date, data_renaksi.nip, riwayat_kegiatan.ket_pegawai, riwayat_kegiatan.ket_admin, riwayat_kegiatan.req_start_date, riwayat_kegiatan.req_end_date, riwayat_kegiatan.files, pegawai.nip, pegawai.nama, pegawai.sub_bidang, pegawai.bidang, pegawai.jabatan, pegawai.foto, riwayat_kegiatan.nip, riwayat_kegiatan.status, riwayat_kegiatan.kondisi FROM riwayat_kegiatan INNER JOIN pegawai ON riwayat_kegiatan.nip=pegawai.nip LEFT OUTER JOIN data_renaksi ON riwayat_kegiatan.id_renaksi=data_renaksi.id_renaksi";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL DATA RENAKSI STATUS = 'JADWAL DIUBAH'
app.get("/ambilRenaksiJadwalDiubah", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl, thl.foto_thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = "Menunggu Jadwal Diubah" ';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL DATA RENAKSI STATUS = 'MENUNGGU RENAKSI DITERIMA'
app.get("/ambilRenaksiMenunggu", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl, thl.foto_thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = "Menunggu Renaksi Diterima" ';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL DATA RENAKSI STATUS = 'SEMENTARA'
app.get("/ambilRenaksiSementara", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kunci, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl, thl.foto_thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = "Sementara" ';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL DATA RENAKSI STATUS = 'DITOLAK'
app.get("/ambilRenaksiDitolak", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.ditolak, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.kirim_ke, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.nip, data_renaksi.ket_admin, data_renaksi.ket_pegawai, data_renaksi.files, pegawai.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl, thl.foto_thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.kirim_ke = 'Staff'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL DATA RENAKSI STATUS = 'SELESAI'
app.get("/ambilRenaksiSelesai", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl, thl.foto_thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = "Selesai" ';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL DATA RENAKSI STATUS = 'DIHAPUS'
app.get("/ambilRenaksiDihapus", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl, thl.foto_thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = "Menunggu Renaksi Dihapus" ';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL CAKIN JUMLAH KEGIATAN
app.get("/jumlahKegiatan", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, pegawai.nama, pegawai.nip, pegawai.sub_bidang, pegawai.bidang, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status NOT IN  ("Dihapus", "Menunggu Renaksi Diterima")';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL CAKIN LAMPIRAN DISUBMIT
app.get("/lampiranDisubmit", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, pegawai.nama, pegawai.nip, pegawai.sub_bidang, pegawai.bidang, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status IN ("Selesai", "Unggah Lampiran")';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL CAKIN LAMPIRAN BELUM SUBMIT
app.get("/belumSubmit", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, pegawai.nama, pegawai.nip, pegawai.sub_bidang, pegawai.bidang, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status NOT IN ("Selesai", "Dihapus", "Menunggu Renaksi Diterima")';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL DATA CAKIN
app.get("/cakin", (req, res) => {
  const sqlSelect =
    "SELECT pegawai.nama, pegawai.jabatan, pegawai.bidang, pegawai.sub_bidang, cakin.bulan, cakin.jumlah_kegiatan, cakin.lampiran_disubmit, cakin.lampiran_bsubmit, cakin.hasil_kinerja, cakin.lampiran_diterima, cakin.id_cakin, cakin.nip, pegawai.nip FROM cakin INNER JOIN pegawai ON cakin.nip=pegawai.nip ORDER BY cakin.bulan ASC";

  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL TOP PEGAWAI
app.get("/topPegawai", (req, res) => {
  let data = req.query;
  console.log(data);
  const sqlSelect = `SELECT pegawai.nama, pegawai.jabatan, pegawai.bidang, pegawai.foto, pegawai.sub_bidang, cakin.bulan, cakin.jumlah_kegiatan, cakin.lampiran_disubmit, cakin.lampiran_bsubmit, cakin.hasil_kinerja, cakin.lampiran_diterima, cakin.id_cakin, cakin.nip, pegawai.nip FROM cakin INNER JOIN pegawai ON cakin.nip=pegawai.nip WHERE bulan = "${data.bulan}" AND sub_bidang = "${data.subid}" AND jabatan NOT IN ('Kasubid', 'Kabid', 'Admin', 'Kaban', 'Sekretaris', 'Kasubag') ORDER BY hasil_kinerja DESC LIMIT 5`;

  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL TOP SUB BIDANG
app.get("/topSubid", (req, res) => {
  let data = req.query;
  console.log(data);
  const sqlSelect = `SELECT pegawai.nama, pegawai.jabatan, pegawai.bidang, pegawai.foto, pegawai.sub_bidang, cakin.bulan, cakin.jumlah_kegiatan, cakin.lampiran_disubmit, cakin.lampiran_bsubmit, cakin.hasil_kinerja, cakin.lampiran_diterima, cakin.id_cakin, cakin.nip, pegawai.nip FROM cakin INNER JOIN pegawai ON cakin.nip=pegawai.nip WHERE bulan = "${data.bulan}" AND jabatan NOT IN ('Staff', 'Kabid', 'Admin', 'Kaban', 'Sekretaris', 'Kasubag') ORDER BY hasil_kinerja DESC LIMIT 5`;

  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//UNGGAH BUKTI LAPORAN RENAKSI
app.post("/unggahLaporan", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketPegawai = req.body.ketPegawai;
  const fileURL = req.body.fileURL;

  const sqlUpdate =
    "UPDATE data_renaksi SET ket_pegawai = ?, files = ?, status = 'Selesai', kirim_ke = 'Kasubid' WHERE id_renaksi = ?";
  let data = [ketPegawai, fileURL, idRenaksi];

  db.query(sqlUpdate, data, (err, result) => {
    console.log(err);
  });
});

//FEEDBACK DARI STAFF
app.post("/feedbackStaff", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketPegawai = req.body.ketPegawai;
  const fileURL = req.body.fileURL;
  const ditolak = req.body.ditolak;

  const sqlUpdate =
    "UPDATE data_renaksi SET ket_pegawai = ?, files = ?, kirim_ke = ? WHERE id_renaksi = ?";
  let data = [ketPegawai, fileURL, ditolak, idRenaksi];

  db.query(sqlUpdate, data, (err, result) => {
    console.log(err);
  });
});

//STAFF - TUTUP RENAKSI
app.post("/tutupRenaksi", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const nip = req.body.nip;
  const status = req.body.status;
  const req_start_date = req.body.req_start_date;
  const req_end_date = req.body.req_end_date;
  const files = req.body.files;
  const ket_pegawai = req.body.ket_pegawai;
  const ket_admin = req.body.ket_admin;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;

  if (status != "Selesai" || status != "Menunggu Renaksi Diterima") {
    const sqlUpdate =
      "UPDATE data_renaksi SET status = 'Sementara', ket_pegawai = '', ket_kaban = '', ket_admin = '', req_start_date = '', req_end_date = '', kirim_ke = '', ditolak = '' WHERE id_renaksi = ?";
    let data = [idRenaksi];

    db.query(sqlUpdate, data, (err, result) => {
      console.log(err);
    });
  } else if (status == "Selesai") {
    const sqlUpdate =
      "UPDATE data_renaksi SET status = 'Bukti Ditolak', kirim_ke = '', ditolak = '' WHERE id_renaksi = ?";
    let data = [idRenaksi];

    db.query(sqlUpdate, data, (err, result) => {
      console.log(err);
    });
  } else if (status == "Menunggu Renaksi Diterima") {
    const sqlUpdate =
      "UPDATE data_renaksi SET status = 'Renaksi Ditolak', kirim_ke = '', ditolak = '' WHERE id_renaksi = ?";
    let data = [idRenaksi];

    db.query(sqlUpdate, data, (err, result) => {
      console.log(err);
    });
  }

  if (status == "Menunggu Renaksi Diterima") {
    const sqlInsert =
      "INSERT INTO riwayat_kegiatan (id_renaksi, nip, req_start_date, req_end_date, files, ket_pegawai, ket_admin, start_date, end_date, status, kondisi) VALUES (?,?,?,?,?,?,?,?,?,'Mengirim Renaksi', 'Ditolak') ";
    db.query(
      sqlInsert,
      [
        idRenaksi,
        nip,
        req_start_date,
        req_end_date,
        files,
        ket_pegawai,
        ket_admin,
        start_date,
        end_date,
      ],
      (err, result) => {
        console.log(err);
      }
    );
  } else if (status == "Menunggu Jadwal Diubah") {
    const sqlInsert =
      "INSERT INTO riwayat_kegiatan (id_renaksi, nip, req_start_date, req_end_date, files, ket_pegawai, ket_admin, start_date, end_date, status, kondisi) VALUES (?,?,?,?,?,?,?,?,?,'Ubah Jadwal', 'Ditolak') ";
    db.query(
      sqlInsert,
      [
        idRenaksi,
        nip,
        req_start_date,
        req_end_date,
        files,
        ket_pegawai,
        ket_admin,
        start_date,
        end_date,
      ],
      (err, result) => {
        console.log(err);
      }
    );
  } else if (status == "Menunggu Renaksi Dihapus") {
    const sqlInsert =
      "INSERT INTO riwayat_kegiatan (id_renaksi, nip, req_start_date, req_end_date, files, ket_pegawai, ket_admin, start_date, end_date, status, kondisi) VALUES (?,?,?,?,?,?,?,?,?,'Hapus Kegiatan', 'Ditolak') ";
    db.query(
      sqlInsert,
      [
        idRenaksi,
        nip,
        req_start_date,
        req_end_date,
        files,
        ket_pegawai,
        ket_admin,
        start_date,
        end_date,
      ],
      (err, result) => {
        console.log(err);
      }
    );
  } else if (status == "Selesai") {
    const sqlInsert =
      "INSERT INTO riwayat_kegiatan (id_renaksi, nip, req_start_date, req_end_date, files, ket_pegawai, ket_admin, start_date, end_date, status, kondisi) VALUES (?,?,?,?,?,?,?,?,?,'Unggah Lampiran', 'Ditolak') ";
    db.query(
      sqlInsert,
      [
        idRenaksi,
        nip,
        req_start_date,
        req_end_date,
        files,
        ket_pegawai,
        ket_admin,
        start_date,
        end_date,
      ],
      (err, result) => {
        console.log(err);
      }
    );
  }
});

//UBAH JADWAL RENAKSI
app.post("/ubahJadwal", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketPegawai = req.body.ketPegawai;
  const fileURL = req.body.fileURL;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  const sqlUpdate =
    "UPDATE data_renaksi SET ket_pegawai = ?, files = ?, req_start_date = ?, req_end_date = ?, status = 'Menunggu Jadwal Diubah', kirim_ke = 'Kasubid' WHERE id_renaksi = ?";
  let data = [ketPegawai, fileURL, startDate, endDate, idRenaksi];

  db.query(sqlUpdate, data, (err, result) => {
    console.log(err);
  });
});

//HAPUS RENAKSI
app.post("/hapusRenaksi", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketPegawai = req.body.ketPegawai;
  const fileURL = req.body.fileURL;

  const sqlUpdate =
    "UPDATE data_renaksi SET ket_pegawai = ?, files = ?, status = 'Menunggu Renaksi Dihapus', kirim_ke = 'Kasubid' WHERE id_renaksi = ?";
  let data = [ketPegawai, fileURL, idRenaksi];

  db.query(sqlUpdate, data, (err, result) => {
    console.log(err);
  });
});

//KASUBID AMBIL SEMUA RENAKSI AND KIRIM_KE = 'KASUBID'
app.get("/kasubidAmbilRenaksiSemua", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.kirim_ke = 'Kasubid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KASUBID AMBIL RENAKSI STATUS = 'SEMENTARA'
app.get("/kasubidAmbilRenaksiSementara", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Sementara' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KASUBID AMBIL RENAKSI STATUS = 'MENUNGGU RENAKSI DITERIMA' AND KIRIM_KE = 'KASUBID'
app.get("/kasubidAmbilRenaksiMRD", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.ket_pegawai, data_renaksi.ditolak, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Renaksi Diterima' AND data_renaksi.kirim_ke = 'Kasubid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KASUBID AMBIL RENAKSI STATUS = 'MENUNGGU JADWAL DIUBAH' AND KIRIM_KE = 'KASUBID'
app.get("/kasubidAmbilRenaksiMJD", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.ditolak, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Jadwal Diubah' AND data_renaksi.kirim_ke = 'Kasubid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KASUBID AMBIL RENAKSI STATUS = 'SELESAI' AND KIRIM_KE = 'KASUBID'
app.get("/kasubidAmbilRenaksiSelesai", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.ditolak, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Selesai' AND data_renaksi.kirim_ke = 'Kasubid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KASUBID AMBIL RENAKSI STATUS = 'HAPUS' AND KIRIM_KE = 'KASUBID'
app.get("/kasubidAmbilRenaksiHapus", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.ditolak, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Renaksi Dihapus' AND data_renaksi.kirim_ke = 'Kasubid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KASUBID MENERIMA RENAKSI
app.post("/kasubidMenerimaRenaksi", (req, res) => {
  const idRenaksi = req.body.idRenaksi;

  const sqlUpdate =
    'UPDATE data_renaksi SET kirim_ke = "Kabid", ditolak = "" WHERE id_renaksi = ?';
  db.query(sqlUpdate, idRenaksi, (err, result) => {
    console.log(result);
  });
});

//KASUBID MENOLAK RENAKSI
app.post("/kasubidMenolakRenaksi", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketAdmin = req.body.ketAdmin;

  const sqlUpdate =
    'UPDATE data_renaksi SET kirim_ke = "Staff", ditolak = "Kasubid", ket_admin = ? WHERE id_renaksi = ?';
  let data = [ketAdmin, idRenaksi];
  db.query(sqlUpdate, data, (err, result) => {
    console.log(result);
  });
});

//AMBIL SEMUA PEGAWAI DENGAN JABATAN STAFF
app.get("/ambilPegawai", (req, res) => {
  const sqlSelect = 'SELECT * FROM pegawai WHERE jabatan = "Staff"';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL SEMUA KASUBID DENGAN JABATAN KASUBID
app.get("/ambilKasubid", (req, res) => {
  const sqlSelect = 'SELECT * FROM pegawai WHERE jabatan = "Kasubid"';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KABID AMBIL RENAKSI STATUS = 'MENUNGGU RENAKSI DITERIMA' AND KIRIM_KE = 'KABID'
app.get("/kabidAmbilRenaksiMRD", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.ditolak, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Renaksi Diterima' AND data_renaksi.kirim_ke = 'Kabid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KABID AMBIL RENAKSI STATUS = 'MENUNGGU JADWAL DIUBAH' AND KIRIM_KE = 'KABID'
app.get("/kabidAmbilRenaksiMJD", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, data_renaksi.ket_pegawai, data_renaksi.req_start_date, data_renaksi.req_end_date, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Jadwal Diubah' AND data_renaksi.kirim_ke = 'Kabid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KABID AMBIL RENAKSI STATUS = 'MENUNGGU RENAKSI DIHAPUS' AND KIRIM_KE = 'KABID'
app.get("/kabidAmbilRenaksiHapus", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Renaksi Dihapus' AND data_renaksi.kirim_ke = 'Kabid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KABID AMBIL RENAKSI STATUS = 'SELESAI' AND KIRIM_KE = 'KABID'
app.get("/kabidAmbilRenaksiSelesai", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Selesai' AND data_renaksi.kirim_ke = 'Kabid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KABID MENERIMA RENAKSI
app.post("/kabidMenerimaRenaksi", (req, res) => {
  const idRenaksi = req.body.idRenaksi;

  const sqlUpdate =
    'UPDATE data_renaksi SET kirim_ke = "Kaban" WHERE id_renaksi = ?';
  db.query(sqlUpdate, idRenaksi, (err, result) => {
    console.log(result);
  });
});

//KABID MENOLAK RENAKSI
app.post("/kabidMenolakRenaksi", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketAdmin = req.body.ketAdmin;

  const sqlUpdate =
    'UPDATE data_renaksi SET kirim_ke = "Admin", ditolak = "Kabid", ket_kaban = ? WHERE id_renaksi = ?';
  let data = [ketAdmin, idRenaksi];
  db.query(sqlUpdate, data, (err, result) => {
    console.log(result);
  });
});

//KABID MENOLAK RENAKSI PER ROW
app.post("/kabidMenolakRenaksiRow", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketAdmin = req.body.ketAdmin;

  const sqlUpdate =
    'UPDATE data_renaksi SET kirim_ke = "Staff", ditolak = "Kabid", ket_admin = ? WHERE id_renaksi = ?';
  let data = [ketAdmin, idRenaksi];
  db.query(sqlUpdate, data, (err, result) => {
    console.log(result);
  });
});

//KABAN MENERIMA RENAKSI
app.post("/kabanMenerimaRenaksi", (req, res) => {
  const idRenaksi = req.body.idRenaksi;

  const sqlUpdate =
    'UPDATE data_renaksi SET kirim_ke = "Admin" WHERE id_renaksi = ?';
  db.query(sqlUpdate, idRenaksi, (err, result) => {
    console.log(result);
  });
});

//KABAN MENERIMA RENAKSI UBAH STATUS = 'SEMENTARA'
app.post("/kabanMenerimaRenaksiFinal", (req, res) => {
  const idRenaksi = req.body.idRenaksi;

  const sqlUpdate =
    'UPDATE data_renaksi SET status = "Sementara", kirim_ke = "" WHERE id_renaksi = ?';
  db.query(sqlUpdate, idRenaksi, (err, result) => {
    console.log(result);
  });
});

//KABAN MENOLAK RENAKSI PER ROW
app.post("/kabanMenolakRenaksiRow", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketAdmin = req.body.ketAdmin;

  const sqlUpdate =
    'UPDATE data_renaksi SET kirim_ke = "Staff", ditolak = "Kaban", ket_admin = ? WHERE id_renaksi = ?';
  let data = [ketAdmin, idRenaksi];
  db.query(sqlUpdate, data, (err, result) => {
    console.log(result);
  });
});

//KABAN MENERIMA RENAKSI UBAH STATUS = 'SEMENTARA'
app.post("/kabanMenolakRenaksiFinal", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketKaban = req.body.ketKaban;

  const sqlUpdate =
    'UPDATE data_renaksi SET status = "Menunggu Renaksi Diterima", kirim_ke = "Admin", ditolak = "Kaban", ket_kaban = ? WHERE id_renaksi = ?';
  let data = [ketKaban, idRenaksi];
  db.query(sqlUpdate, data, (err, result) => {
    console.log(result);
  });
});

//KABAN AMBIL RENAKSI STATUS = 'MENUNGGU RENAKSI DITERIMA' AND KIRIM_KE = 'KABAN'
app.get("/kabanAmbilRenaksiMRD", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.nip, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Renaksi Diterima' AND data_renaksi.kirim_ke = 'Kaban' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KABAN AMBIL RENAKSI STATUS = 'MENUNGGU JADWAL DIUBAH' AND KIRIM_KE = 'KABAN'
app.get("/kabanAmbilRenaksiMJD", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.nip, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Jadwal Diubah' AND data_renaksi.kirim_ke = 'Kaban' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KABAN AMBIL RENAKSI STATUS = 'SELESAI' AND KIRIM_KE = 'KABAN'
app.get("/kabanAmbilRenaksiSelesai", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.nip, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Selesai' AND data_renaksi.kirim_ke = 'Kaban' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KABAN AMBIL RENAKSI STATUS = 'MENUNGGU RENAKSI DIHAPUS' AND KIRIM_KE = 'KABAN'
app.get("/kabanAmbilRenaksiDihapus", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.nip, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Renaksi Dihapus' AND data_renaksi.kirim_ke = 'Kaban' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//ADMIN AMBIL RENAKSI STATUS = 'MENUNGGU RENAKSI DITERIMA' AND KIRIM_KE = 'ADMIN'
app.get("/adminAmbilRenaksiMRD", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.nip, data_renaksi.ket_kaban, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Renaksi Diterima' AND data_renaksi.kirim_ke = 'Admin' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//ADMIN AMBIL RENAKSI STATUS = 'MENUNGGU JADWAL DIUBAH' AND KIRIM_KE = 'ADMIN'
app.get("/adminAmbilRenaksiMJD", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.nip, data_renaksi.ket_kaban, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Jadwal Diubah' AND data_renaksi.kirim_ke = 'Admin' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//ADMIN AMBIL RENAKSI STATUS = 'SELESAI' AND KIRIM_KE = 'ADMIN'
app.get("/adminAmbilRenaksiSelesai", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.nip, data_renaksi.ket_kaban, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Selesai' AND data_renaksi.kirim_ke = 'Admin' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//ADMIN AMBIL RENAKSI STATUS = 'MENUNGGU RENAKSI DIHAPUS' AND KIRIM_KE = 'ADMIN'
app.get("/adminAmbilRenaksiDihapus", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.nip, data_renaksi.ket_kaban, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Renaksi Dihapus' AND data_renaksi.kirim_ke = 'Admin' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//ADMIN MENERIMA RENAKSI UBAH JADWAL
app.post("/adminMenerimaRenaksiMJD", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketAdmin = req.body.ketAdmin;
  const reqStartDate = req.body.reqStartDate;
  const reqEndDate = req.body.reqEndDate;
  const nip = req.body.nip;
  const files = req.body.files;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;

  const sqlUpdate =
    'UPDATE data_renaksi SET status = "Sementara", kirim_ke = "", start_date = ?, end_date = ?, ket_admin = ?  WHERE id_renaksi = ?';
  let data = [reqStartDate, reqEndDate, ketAdmin, idRenaksi];
  db.query(sqlUpdate, data, (err, result) => {
    console.log(result);
  });

  const sqlInsert =
    "INSERT INTO riwayat_kegiatan (id_renaksi, nip, req_start_date, req_end_date, files, ket_admin, start_date, end_date, status, kondisi) VALUES (?,?,?,?,?,?,?,?,'Ubah Jadwal', 'Diterima') ";
  db.query(
    sqlInsert,
    [
      idRenaksi,
      nip,
      reqStartDate,
      reqEndDate,
      files,
      ketAdmin,
      start_date,
      end_date,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

//ADMIN MENOLAK RENAKSI UBAH JADWAL;
app.post("/adminMenolakRenaksiMJD", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketAdmin = req.body.ketAdmin;
  const nip = req.body.nip;

  const sqlUpdate =
    'UPDATE data_renaksi SET kirim_ke = "Staff", ket_admin = ?, ditolak = "Admin"  WHERE id_renaksi = ?';
  let data = [ketAdmin, idRenaksi];
  db.query(sqlUpdate, data, (err, result) => {
    console.log(result);
  });
});

//ADMIN MENERIMA RENAKSI DIHAPUS
app.post("/adminMenerimaRenaksiDihapus", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketAdmin = req.body.ketAdmin;
  const nip = req.body.nip;
  const req_start_date = req.body.req_start_date;
  const req_end_date = req.body.req_end_date;
  const files = req.body.files;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;

  const sqlUpdate =
    'UPDATE data_renaksi SET status = "Dihapus", kirim_ke = "", ket_admin = ?  WHERE id_renaksi = ?';
  let data = [ketAdmin, idRenaksi];
  db.query(sqlUpdate, data, (err, result) => {
    console.log(result);
  });

  const sqlInsert =
    "INSERT INTO riwayat_kegiatan (id_renaksi, nip, req_start_date, req_end_date, files, ket_admin, start_date, end_date, status, kondisi) VALUES (?,?,?,?,?,?,?,?,'Hapus Kegiatan', 'Diterima') ";
  db.query(
    sqlInsert,
    [
      idRenaksi,
      nip,
      req_start_date,
      req_end_date,
      files,
      ketAdmin,
      start_date,
      end_date,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

//ADMIN MENOLAK RENAKSI DIHAPUS;
app.post("/adminMenolakRenaksiDihapus", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketAdmin = req.body.ketAdmin;
  const nip = req.body.nip;

  const sqlUpdate =
    'UPDATE data_renaksi SET kirim_ke = "Staff", ditolak = "Admin", ket_admin = ?  WHERE id_renaksi = ?';
  let data = [ketAdmin, idRenaksi];
  db.query(sqlUpdate, data, (err, result) => {
    console.log(result);
  });
});

//ADMIN MENERIMA RENAKSI MRD
app.post("/adminMenerimaRenaksiMRD", (req, res) => {
  const idRenaksi = req.body.idRenaksi;

  const sqlUpdate =
    'UPDATE data_renaksi SET status = "Sementara", kirim_ke = "" WHERE id_renaksi = ?';
  db.query(sqlUpdate, idRenaksi, (err, result) => {
    console.log(err);
  });
});

//ADMIN MENOLAK RENAKSI MRD
app.post("/adminMenolakRenaksiMRD", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketAdmin = req.body.ketAdmin;
  const nip = req.body.nip;

  const sqlUpdate =
    'UPDATE data_renaksi SET kirim_ke = "Staff", ket_admin = ? WHERE id_renaksi = ?';
  let data = [ketAdmin, idRenaksi];
  db.query(sqlUpdate, data, (err, result) => {
    console.log(result);
  });
});

//ADMIN MENERIMA RENAKSI FINAL
app.post("/adminMenerimaRenaksiFinal", (req, res) => {
  const idRenaksi = req.body.idRenaksi;

  const sqlUpdate =
    'UPDATE data_renaksi SET status = "Sementara", kirim_ke = "" WHERE id_renaksi = ?';
  db.query(sqlUpdate, idRenaksi, (err, result) => {
    console.log(result);
  });
});

//ADMIN MENERIMA EVALUASI LAMPIRAN
app.post("/adminMenerimaRenaksiSelesai", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketAdmin = req.body.ketAdmin;
  const nip = req.body.nip;
  const bulan = req.body.bulan;
  const nip_kasubid = req.body.nip_kasubid;
  const nip_kabid = req.body.nip_kabid;
  const req_start_date = req.body.req_start_date;
  const req_end_date = req.body.req_end_date;
  const files = req.body.files;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;

  const sqlUpdate =
    'UPDATE data_renaksi SET status = "Selesai", kirim_ke = "", ket_admin = ?, nip = ? WHERE id_renaksi = ?';
  let data = [ketAdmin, nip, idRenaksi];
  db.query(sqlUpdate, data, (err, result) => {
    console.log(result);
  });

  const sqlUpdate2 =
    "UPDATE cakin SET lampiran_diterima = lampiran_diterima + 1 WHERE nip = ? AND bulan = ?";
  db.query(sqlUpdate2, [nip, bulan], (err, result) => {
    console.log(err);
  });

  const sqlUpdate3 =
    "UPDATE cakin SET lampiran_diterima = lampiran_diterima + 1 WHERE nip = ? AND bulan = ?";
  db.query(sqlUpdate3, [nip_kasubid, bulan], (err, result) => {
    console.log(err);
  });

  const sqlUpdate4 =
    "UPDATE cakin SET lampiran_diterima = lampiran_diterima + 1 WHERE nip = ? AND bulan = ?";
  db.query(sqlUpdate4, [nip_kabid, bulan], (err, result) => {
    console.log(err);
  });

  const sqlInsert =
    "INSERT INTO riwayat_kegiatan (id_renaksi, nip, req_start_date, req_end_date, files, ket_admin, start_date, end_date, status, kondisi) VALUES (?,?,?,?,?,?,?,?,'Unggah Lampiran', 'Diterima') ";
  db.query(
    sqlInsert,
    [
      idRenaksi,
      nip,
      req_start_date,
      req_end_date,
      files,
      ketAdmin,
      start_date,
      end_date,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

//ADMIN MENOLAK EVALUASI LAMPIRAN
app.post("/adminMenolakRenaksiSelesai", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketAdmin = req.body.ketAdmin;
  const nip = req.body.nip;

  const sqlUpdate =
    'UPDATE data_renaksi SET kirim_ke = "Staff", ditolak = "Admin", ket_admin = ?, nip = ? WHERE id_renaksi = ?';
  let data = [ketAdmin, nip, idRenaksi];
  db.query(sqlUpdate, data, (err, result) => {
    console.log(result);
  });
});

app.post("/tanggapan", (req, res) => {
  const idRenaksi = req.body.idRenaksi;
  const ketAdmin = req.body.ketAdmin;

  const sqlUpdate =
    'UPDATE data_renaksi SET kirim_ke = "Staff", ket_admin = ? WHERE id_renaksi = ?';
  let data = [ketAdmin, idRenaksi];
  db.query(sqlUpdate, data, (err, result) => {
    console.log(result);
  });
});

app.post("/deadline", (req, res) => {
  const idRenaksi = req.body.idRenaksi;

  const sqlUpdate = 'UPDATE data_renaksi SET kunci = "Ya" WHERE id_renaksi = ?';
  db.query(sqlUpdate, idRenaksi, (err, result) => {
    console.log(result);
  });
});

app.post("/bukaForm", (req, res) => {
  const idRenaksi = req.body.idRenaksi;

  const sqlUpdate = 'UPDATE data_renaksi SET kunci = "" WHERE id_renaksi = ?';
  db.query(sqlUpdate, idRenaksi, (err, result) => {
    console.log(result);
  });

  const sqlUpdate2 =
    'UPDATE pegawai SET ket = "", req = "" WHERE jabatan = "Kaban"';
  db.query(sqlUpdate2, (err, result) => {
    console.log(result);
  });
});

app.post("/tolakForm", (req, res) => {
  const sqlUpdate =
    'UPDATE pegawai SET ket = "", req = "" WHERE jabatan = "Kaban"';
  db.query(sqlUpdate, (err, result) => {
    console.log(result);
  });

  const sqlUpdate2 =
    'UPDATE pegawai SET ket = "", req = "Ditolak" WHERE jabatan = "Admin"';
  db.query(sqlUpdate2, (err, result) => {
    console.log(result);
  });
});

app.post("/reqBukaForm", (req, res) => {
  const ketAdmin = req.body.ketAdmin;
  const sqlUpdate =
    "UPDATE pegawai SET req = 'Ya', ket = ? WHERE jabatan = 'Kaban'";
  db.query(sqlUpdate, ketAdmin, (err, result) => {
    console.log(err);
  });

  const sqlUpdate2 =
    "UPDATE pegawai SET req = '', ket = '' WHERE jabatan = 'Admin'";
  db.query(sqlUpdate2, (err, result) => {
    console.log(err);
  });
});

//AMBIL DATA CAKIN
app.get("/createRowCakin", (req, res) => {
  const sqlCekRowCakin = "SELECT * FROM cakin";
  db.query(sqlCekRowCakin, (err, result) => {
    res.send(result);
  });
});

//ADD BULAN PADA CAKIN DI TAHUN YANG BARU
app.post("/addBulanCakin", (req, res) => {
  const nip = req.body.nip;

  for (let i = 1; i <= 12; i++) {
    const sqlInsert = "INSERT INTO cakin (bulan, nip) VALUES (?,?)";
    db.query(
      sqlInsert,
      [moment().format(`YYYY-${i}-01`), nip],
      (err, result) => {
        console.log(err);
      }
    );
  }
});

//UPDATE JUMLAH KEGIATAN KE TABEL CAKIN
app.post("/addJumlahKegiatan", (req, res) => {
  const jumlah = req.body.jumlah;
  const nip = req.body.nip;
  const bulan = req.body.bulan;

  const sqlInsert =
    "UPDATE cakin SET jumlah_kegiatan = ? WHERE nip = ? AND bulan = ?";
  db.query(sqlInsert, [jumlah, nip, bulan], (err, result) => {
    console.log(err);
  });
});

//UPDATE KEGIATAN BELUM SUBMIT KE TABEL CAKIN
app.post("/addKegiatanBS", (req, res) => {
  const jumlah = req.body.jumlah;
  const nip = req.body.nip;
  const bulan = req.body.bulan;

  const sqlInsert =
    "UPDATE cakin SET lampiran_bsubmit = ? WHERE nip = ? AND bulan = ?";
  db.query(sqlInsert, [jumlah, nip, bulan], (err, result) => {
    console.log(err);
  });
});

//UPDATE KEGIATAN SUDAH SUBMIT KE TABEL CAKIN
app.post("/addKegiatanS", (req, res) => {
  const jumlah = req.body.jumlah;
  const nip = req.body.nip;
  const bulan = req.body.bulan;

  const sqlInsert =
    "UPDATE cakin SET lampiran_disubmit = ? WHERE nip = ? AND bulan = ?";
  db.query(sqlInsert, [jumlah, nip, bulan], (err, result) => {
    console.log(err);
  });
});

//COOKIES DLL

app.get("/cookies", (req, res) => {
  tampilkan = req.cookies;
  res.send(tampilkan);
});

app.get("/downloadFile:files", (req, res) => {
  const files = req.params.files;
  console.log(files);
  res.download(`../client/public/${files}`);
});

app.get("/THL", (req, res) => {
  const sqlSelect = "SELECT * FROM pegawai WHERE jabatan = 'THL'";

  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

// PADA PORT BERAPA BACKEND DIJALANAKAN
app.listen(3001, () => {
  console.log("running on port 3001");
});
