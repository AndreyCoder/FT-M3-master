const express = require('express')
const morgan = require('morgan')
const app = express()


// == Middleware morgan == \\
app.use(morgan('dev'))

// == Middleware expres == \\
app.use(express.json())

let routes = require('./home')
app.use('/home', routes)

// == Creo mi propio middleware == \\
// app.use('/', function (req, res, next) {
//   console.log('Hicieron un request a: ', req.url)
//   next()
// })

app.get('/', function (req, res, next) {
  res.send('Hola mundo')
})

// == Esta ruta matcheara acd y abcd == \\
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

// == Esta ruta matcheara acd, abbcd, abbbbcd y asi sucesivamente == \\
app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})

// == Pasando parametros == \\
app.get('/api/:id', function (req, res) {
  res.json({ parametro: req.params.id })
})

// == Query fetch(http://localhost:3001?id=58&name=andrey) == \\
app.get('/query', (req, res) => {
  let { name, id } = req.query
  if (name && id) return res.send(`Mi nombre es ${name} y mi id es ${id}`)
  else res.redirect('/error')
})

// == Ruta de error == \\
app.get('/error', (req, res) => {
  res.status(404).send('Informacion invalida')
})

// == Capta rutas no configuradas == \\
app.get('*', (req, res) => {
  // res.sendStatus(404) // -> solomanda error 404 en el dom
  res.status(404).send('Ruta invalida')
})

app.post('/', (req, res) => {
  console.log(req.body)
  let { name, lastname } = req.body
  res.send(`Me enviaron esto por body, ${name} ${lastname}`)
})



app.listen(3001, (() => console.log('corriendo en puerto 3001')))