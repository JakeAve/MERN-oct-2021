const express = require("express");

const PORT = 8000;
const app = express();
app.use(express.json());

app.use("/api", require("./routes/api"));

app.listen(PORT, () => console.log(`Servidor está en port: ${PORT}`));
