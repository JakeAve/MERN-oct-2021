require("dotenv").config();
const PORT = process.env.PORT;
if (!PORT) throw new Error("hay que especificar PORT");

require("./config/connectToDB")();

const express = require("express");

const app = express();
app.use(express.json());

app.use("/api", require("./routes/api"));

app.listen(PORT, () => console.log(`App está en PORT: ${PORT}`));
