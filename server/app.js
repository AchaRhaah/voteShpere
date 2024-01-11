const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes/authRoutes");
const electionRoutes = require("./routes/electionRoutes/electionRoutes");
const cookieRoutes = require("./routes/cookieRoutes/cookieRoutes");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", electionRoutes);
app.use("/api", cookieRoutes);

app.set("view engin", "ejs");


// DATABASE CONNECTION

mongoose
  .connect(process.env.DBURI)
  .then((result) => {
    console.log("connected to DB");
  })
  .then((result) =>
    app.listen(process.env.PORT, () => {
      console.log("Listening on ", process.env.PORT);
    })
  )
  .catch((err) => console.log(err));
