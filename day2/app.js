const express = require ("express");

const app = express();

app.get('/products', (req, res) => res.status(400).send("this is products"));

module.exports = app