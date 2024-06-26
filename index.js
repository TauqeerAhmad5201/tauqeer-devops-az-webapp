const express = require('express')
const app = express()
const path = require('path')
const port = 8080

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})