const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
const product = require('./routes/product')(app)


app.get('/', (req, res) => {
  res.send('OK Fajar')
})

app.listen(3000, () => {
  console.log('Server udah running sekarang');
})
