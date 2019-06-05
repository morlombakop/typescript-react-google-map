const express = require('express')
const data = require('./mock-data.json')
const app = express()

app.get('/map-test', function (req, res) {
  res.status(200).send(data)
})

app.listen(5000)