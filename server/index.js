const express = require('express')
const cors = require('cors');
const axios = require('axios')

let app = express()
app.use(cors());
app.options('*', cors());

const url =
  'https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375&longitude=-0.0964509&count='

app.get('/drivers', (req, res, next) => {
  const { count } = req.query
  axios
    .get(`${url}${count}`)
    .then(response => res.status(200).send(response.data))
    .catch(next)
})

app.listen(5000)
