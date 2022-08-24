const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const session = require("express-session");
const cookieParser = require("cookie-parser");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "bapenda_kepatuhan",
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/masuk", (req, res) => {
  const nama = req.body.nama;
  const sandi = req.body.sandi;
  const nip = req.body.nip;

  db.query("SELECT * FROM staff WHERE nip = ?", nip, (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      console.log("Sandi DB: ", result[0].sandi);
      console.log("Sandi FE: ", sandi);
      bcrypt.compare(sandi, result[0].sandi, (error, response) => {
        if (response) {
          res.send(response);
        } else {
          res.send({ message: "Wrong username/password combination!" });
        }
      });
    } else {
      res.send({ message: "User doesn't exist" });
    }
  });
});

app.post("/daftar", (req, res) => {
  const nama = req.body.nama;
  const sandi = req.body.sandi;
  const nip = req.body.nip;
  const nohp = req.body.nohp;

  bcrypt.hash(sandi, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    const sqlInsert =
      "INSERT INTO staff (nama, sandi, nip, no_hp) VALUES (?,?,?,?)";
    db.query(sqlInsert, [nama, hash, nip, nohp], (err, result) => {
      console.log(result);
    });
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
