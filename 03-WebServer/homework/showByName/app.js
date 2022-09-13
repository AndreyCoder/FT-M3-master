var fs = require("fs")
var http = require("http")

// Escribí acá tu servidor
http.createServer((req, res) => {
  console.log(req.url)

  fs.readFile(`./images/${req.url}_doge.jpg`, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('No se encontro')
    }
    else {
      res.writeHead(200, { 'Content-Type': 'image/jpg' })
      res.end(data)
    }
  })

}).listen(3001, () => console.log('Corriendo en puerto 3001'))

