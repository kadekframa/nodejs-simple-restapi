import express, { response } from "express";
import db from "../connection";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Holla semuanya...!");
});

router.get("/mahasiswa", (req, res) => {
  const query = "SELECT * FROM mahasiswa";
  db.query(query, (error, rows) => {
    if (error) throw error;
    response(200, "Berhasil mendapatkan data mahasiswa", rows, res);
  });
});

export default router;
