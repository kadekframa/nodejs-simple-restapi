import express from "express";
import router from "./api/product.js";

const app = express();

app.use("/api/", router);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.info(`Server is running in port ${PORT}`);
});
