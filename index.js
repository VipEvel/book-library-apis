require("dotenv").config();
const express = require("express");
const { json, urlencoded } = require("express");
const appRoutes = require("./src/routes/index");
const connectMongoDB = require("./src/libs/mongodb");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(json({ limit: "50mb" }));
app.use(urlencoded({ extended: true, limit: "50mb" }));
connectMongoDB();

app.use("/library", appRoutes.library);

app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`listening on PORT : ${PORT}`);
});
