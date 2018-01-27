const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config()

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api/s/:movie', (req, res) => {
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDb_API_Key}&s=${req.params.movie}`)
        .then(r => res.send(r.data))
        .catch(err => res.send(err.message))
})

app.get('/api/i/:movie', (req, res) => {
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDb_API_Key}&i=${req.params.movie}`)
        .then(r => res.send(r.data))
        .catch(err => res.send(err.message))
})

module.exports = app;
