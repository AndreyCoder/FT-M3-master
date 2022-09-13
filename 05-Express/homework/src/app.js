const { server } = require('./server.js');

server.listen(
  3000,
  () => console.log('corriendo en el puerto 3000')
);
