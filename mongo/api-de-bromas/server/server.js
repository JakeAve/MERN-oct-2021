const express = require('express');

const app = express();

// const connectToMongo = require('./config/connectToMongo')
// connectToMongo()
require('./config/connectToMongo')();

app.listen(8000, () => `El servidor esta listo`);
