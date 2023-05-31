const express = require("express");
const app = express();
const rotas = require("./rotas");
require("./config/dbConfig");
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({ origin: 'http://127.0.0.1:5500' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use (express.json());
app.use(rotas);


app.listen(8081);