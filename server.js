const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
var path = require('path')

require('./discord')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
