const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
var path = require('path')

require('./discord')

app.use(express.static('public'))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
