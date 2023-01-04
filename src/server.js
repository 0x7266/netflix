require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const connect = require("./config/database.js");
const index = require("./routes/index.js");
const PORT = process.env.PORT || 3334;
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/api", index);

connect(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
