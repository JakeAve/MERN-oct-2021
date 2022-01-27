require("dotenv").config();
const express = require("express");

require("./config/connectDB")();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/api", require("./routes/api"));

app.listen(PORT, () => console.log(`Servidor está en port: ${PORT}`));
