import express from 'express'
import './discord'

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.static('public'))
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
