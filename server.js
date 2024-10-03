const express = require('express');

const app = express();
const port = process.env.PORT || '5000';

const routes = ('./routes/index.js');

app.use('/', routes);

app.listen(port);

module.exports = app;
