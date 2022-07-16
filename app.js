const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// app.use('/login')
// app.use('/investimentos')
// app.use('/ativos')
// app.use('/conta')
// app.use('/conta')


module.exports = app