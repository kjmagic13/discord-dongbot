import express from 'express'
import './discord'

const PORT = process.env.PORT || 3000
const app = express()

// https redirect
app.get('*', (req, res, next) => {
  if (
    process.env.NODE_ENV == 'production' &&
    req.headers['x-forwarded-proto'] != 'https'
  ) {
    res.redirect(`https://${req.headers.host + req.url}`)
  } else {
    return next()
  }
})

app.use(express.static('public'))
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
