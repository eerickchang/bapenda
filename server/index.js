const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "bapenda_kepatuhan",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   const sqlInsert = "INSERT INTO staff (nama, sandi) VALUES ('Erick', '123');";
//   db.query(sqlInsert, (err, result) => {
//     res.send("Hello World");
//     console.log(result);
//   });
// });

app.post("/api/insert", (req, res) => {
  const nama = req.body.nama;
  const sandi = req.body.sandi;
  const nip = req.body.nip;

  const sqlInsert = "INSERT INTO staff (nama, sandi, nip) VALUES (?,?,?)";
  db.query(sqlInsert, [nama, sandi, nip], (err, result) => {
    console.log(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
