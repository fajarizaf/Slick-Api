const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
const product = require('./routes/product')(app)
const post = require('./routes/post')(app)

app.listen(3005, () => {
  console.log('Server udah running sekarang');
})
