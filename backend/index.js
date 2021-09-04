const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./server/database/connection");
const router = require("./server/routes/router");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

connectDB();
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
