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

// LIBRARY UNTUK SESSION & COOKIE
const session = require("express-session");
const cookieParser = require("cookie-parser");

// LIBRARY UNTUK HASH PASSWORD
const bcrypt = require("bcrypt");
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
    console.log(result);
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
        console.log(result);
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
  const rencana = req.body.rencana;

  const sqlInsert =
    "INSERT INTO data_renaksi (program, kegiatan, tupoksi_inti, sub_kegiatan, nip, tupoksi_tambahan, thl, rencana) VALUES (?,?,?,?,?,?,?,?)";
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
      rencana,
    ],
    (err, result) => {
      console.log(result);
    }
  );
});

//AMBIL DATA CAKIN
app.get("/cakin", (req, res) => {
  const sqlSelect = "SELECT * FROM cakin";

  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/cookies", (req, res) => {
  tampilkan = req.cookies;
  res.send(tampilkan);
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
