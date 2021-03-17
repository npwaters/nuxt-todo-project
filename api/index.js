const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send([
    { text: '1', done: false },
    { text: '2', done: false },
    { text: '3', done: false },
  ])
})

module.exports = {
  path: '/api/',
  handler: app,
}
