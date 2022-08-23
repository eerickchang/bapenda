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
app.use(bodyParser.urlencoded({ extended: true }));

app.post("api/insert", (req, res) => {
  const nama = req.body.namaReg;
  const password = req.body.passwordReg;

  const sqlInsert = "INSERT INTO staff (nama, password) VALUES (?,?)";
  db.query(sqlInsert, [nama, password], (err, result) => {
    console.log(err);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
