import express from "express";
import bodyParser from "body-parser";
// import db from "./connection.js";
// import response from "./response.js";
import cors from "cors";
import router from "./api/mahasiswa";

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("api/", router);

// app.get("/mahasiswa/:nim", (req, res) => {
//   let nim = req.params.nim;
//   const query = `SELECT * FROM mahasiswa WHERE nim = ${nim}`;
//   db.query(query, (error, rows) => {
//     if (error) throw error;
//     response(200, "Get data spesific mahasiswa!", rows, res);
//   });
// });

// app.post("/mahasiswa", (req, res) => {
//   const { nim, nama, kelas, alamat } = req.body;
//   const query = `INSERT INTO mahasiswa (nim, nama, kelas, alamat) VALUES ('${nim}', '${nama}', '${kelas}', '${alamat}')`;
//   db.query(query, (error, rows) => {
//     if (error) throw error;
//     if (rows.affectedRows) {
//       const data = {
//         isSuccess: rows.affectedRows,
//         id: rows.insertId,
//       };
//       response(201, "Data added successfully..", data, res);
//       console.info(rows.affectedRows);
//     } else {
//       console.info("Gak masuk yaa..!");
//     }
//   });
// });

// app.put("/mahasiswa/:nim", (req, res) => {
//   const nim = req.params.nim;
//   const { nama, kelas, alamat } = req.body;
//   const query = `UPDATE mahasiswa SET nama='${nama}', kelas='${kelas}', alamat='${alamat}' WHERE nim=${nim}`;
//   db.query(query, (error, rows) => {
//     if (error) response(500, "Invalid", "Error", res);
//     if (rows?.affectedRows) {
//       const data = {
//         isSuccess: rows.affectedRows,
//         message: rows.message,
//       };
//       response(200, "Data updated successfully...!", data, res);
//     } else {
//       response(404, "Data not found..", "Not found", res);
//     }
//   });
// });

// app.delete("/mahasiswa/:nim", (req, res) => {
//   const { nim } = req.params;
//   const query = `DELETE FROM mahasiswa WHERE nim='${nim}'`;
//   db.query(query, (error, rows) => {
//     if (error) response(500, "Invalid", "error", res);
//     if (rows?.affectedRows) {
//       const data = {
//         isDeleted: rows.affectedRows,
//       };
//       response(200, "Delete data successfully..!", data, res);
//     } else {
//       response(404, "Data not found..", "Not found", res);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
