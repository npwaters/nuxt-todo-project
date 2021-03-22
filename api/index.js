const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send([
    { id: '1', text: '1', done: false },
    { id: '2', text: '2', done: false },
    { id: '3', text: '3', done: false },
  ])
})

module.exports = {
  path: '/api/',
  handler: app,
}
