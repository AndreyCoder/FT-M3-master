const http = require('http')
const fs = require('fs')
const PORT = 3001

http.createServer(function (request, response) {
  // console.log('REQUEST', request)

  if (request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hola Mundo\n')

  }

  else if (request.url === '/html') {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    let html = fs.readFileSync(__dirname + '/index.html')
    response.end(html)
  }

  else if (request.url === '/json') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    let obj = {
      proyecto: 'WebServer',
      autor: 'Andrey'
    }
    response.end(JSON.stringify(obj))
  }

  else {
    response.writeHead(404, { 'Content-Type': 'text/plain' })
    response.end('La pagina no existe')
  }
}).listen(PORT, () => console.log('Server corriendo en puerto 3001'))

