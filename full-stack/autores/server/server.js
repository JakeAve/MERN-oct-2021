require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');

require('./config/connectDB')();

const PORT = process.env.PORT || 5100;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api', require('./routes/api'));

app.listen(PORT, () => console.log(`Servidor está en port: ${PORT}`));
