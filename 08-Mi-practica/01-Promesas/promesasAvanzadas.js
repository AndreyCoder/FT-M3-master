// let promesa = new Promise(executor)

// let executor = (resolve, reject) => {
//   // condiciones en la cual se resuelve o se rechaza la promesa
//   if(1 > 0) resolve(value)
//   else reject(reson)
// }

// let Promise = function() {

// }

let fs = require('fs')

let promiseFiedReadFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) reject('Todo se rompio')
      else resolve(0)
    })
  })
}

p = promiseFiedReadFile('./text.txt')
// .then(data => console.log(data))
// console.log('Linea: 25', p)

// p.then(data1 => console.log(data1))
//   .then(data2 => console.log('data2', data2))

p.then(a => a + ' Hola ')
  .then(b => b + 'Andrey ')
  .then(c => c + 'Rico ')
  .then(d => d + 'Como estas ', err => err)
  .then(e => console.log('Soy la promesa e', e))


