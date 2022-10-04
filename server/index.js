// LIBRARY UNTUK EXPRESS
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");

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
  password: "12345",
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
          res.send({ message: "Wrong username/password combination!" });
        }
      });
    } else {
      res.send({ message: "User doesn't exist" });
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

//AMBIL DATA RENAKSI STATUS = 'SEMUA'

app.get("/ambilRenaksi", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL DATA RENAKSI STATUS = 'JADWAL DIUBAH'

app.get("/ambilRenaksiJadwalDiubah", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = "Menunggu Jadwal Diubah" ';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL DATA RENAKSI STATUS = 'MENUNGGU RENAKSI DITERIMA'

app.get("/ambilRenaksiMenunggu", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = "Menunggu Renaksi Diterima" ';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL DATA RENAKSI STATUS = 'SEMENTARA'

app.get("/ambilRenaksiSementara", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = "Sementara" ';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL DATA RENAKSI STATUS = 'SELESAI'

app.get("/ambilRenaksiSelesai", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = "Selesai" ';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL DATA RENAKSI STATUS = 'DIHAPUS'

app.get("/ambilRenaksiDihapus", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = "Menunggu Renaksi Dihapus" ';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL CAKIN JUMLAH KEGIATAN
app.get("/jumlahKegiatan", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, pegawai.nama, pegawai.nip, pegawai.sub_bidang, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status NOT IN  ("Dihapus", "Menunggu Renaksi Diterima")';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL CAKIN LAMPIRAN DISUBMIT
app.get("/lampiranDisubmit", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, pegawai.nama, pegawai.nip, pegawai.sub_bidang, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status IN ("Selesai", "Unggah Lampiran")';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL CAKIN LAMPIRAN BELUM SUBMIT
app.get("/belumSubmit", (req, res) => {
  const sqlSelect =
    'SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, pegawai.nama, pegawai.nip, pegawai.sub_bidang, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status NOT IN ("Selesai", "Dihapus", "Menunggu Renaksi Diterima")';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//AMBIL DATA CAKIN
app.get("/cakin", (req, res) => {
  const sqlSelect =
    "SELECT pegawai.nama, pegawai.jabatan, cakin.bulan, cakin.jumlah_kegiatan, cakin.lampiran_disubmit, cakin.lampiran_bsubmit, cakin.hasil_kinerja, cakin.id_cakin, cakin.nip, pegawai.nip FROM cakin INNER JOIN pegawai ON cakin.nip=pegawai.nip";

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
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Renaksi Diterima' AND data_renaksi.kirim_ke = 'Kasubid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KASUBID AMBIL RENAKSI STATUS = 'MENUNGGU JADWAL DIUBAH' AND KIRIM_KE = 'KASUBID'
app.get("/kasubidAmbilRenaksiMJD", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Jadwal Diubah' AND data_renaksi.kirim_ke = 'Kasubid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KASUBID AMBIL RENAKSI STATUS = 'SELESAI' AND KIRIM_KE = 'KASUBID'
app.get("/kasubidAmbilRenaksiSelesai", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Selesai' AND data_renaksi.kirim_ke = 'Kasubid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KASUBID AMBIL RENAKSI STATUS = 'HAPUS' AND KIRIM_KE = 'KASUBID'
app.get("/kasubidAmbilRenaksiHapus", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.files, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, data_renaksi.req_start_date, data_renaksi.req_end_date, data_renaksi.ket_pegawai, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Renaksi Dihapus' AND data_renaksi.kirim_ke = 'Kasubid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KASUBID MENERIMA RENAKSI
app.post("/kasubidMenerimaRenaksi", (req, res) => {
  const idRenaksi = req.body.idRenaksi;

  const sqlUpdate =
    'UPDATE data_renaksi SET kirim_ke = "Kabid" WHERE id_renaksi = ?';
  db.query(sqlUpdate, idRenaksi, (err, result) => {
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
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Renaksi Diterima' AND data_renaksi.kirim_ke = 'Kabid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KABID AMBIL RENAKSI STATUS = 'MENUNGGU JADWAL DIUBAH' AND KIRIM_KE = 'KABID'
app.get("/kabidAmbilRenaksiMJD", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Menunggu Jadwal Diubah' AND data_renaksi.kirim_ke = 'Kabid' ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//KABID AMBIL RENAKSI STATUS = 'SELESAI' AND KIRIM_KE = 'KABID'
app.get("/kabidAmbilRenaksiSelesai", (req, res) => {
  const sqlSelect =
    "SELECT data_renaksi.id_renaksi, data_renaksi.kegiatan, data_renaksi.sub_kegiatan, data_renaksi.kirim_ke, data_renaksi.tupoksi_tambahan, data_renaksi.tupoksi_inti, data_renaksi.status, data_renaksi.program, data_renaksi.end_date, data_renaksi.start_date, data_renaksi.nip, pegawai.nama, pegawai.sub_bidang, pegawai.jabatan, pegawai.foto, thl.nama_thl, thl.thl FROM data_renaksi INNER JOIN pegawai ON data_renaksi.nip=pegawai.nip LEFT OUTER JOIN thl ON data_renaksi.thl=thl.thl WHERE data_renaksi.status = 'Selesai' AND data_renaksi.kirim_ke = 'Kabid' ";
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
