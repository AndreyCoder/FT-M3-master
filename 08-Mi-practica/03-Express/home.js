const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Estoy en home')
})

module.exports = router