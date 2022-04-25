const express = require('express')
const app = express()
const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
const request = require('request');



const port = '8000'
const url = 'https://www.superzoo.cl/catalogo/perro/alimentos/Adultos/2'


axios(url)
        .then(response => {
            const datos = response.data
            const $datos = cheerio.load('script')

            const productos = [];
            });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




