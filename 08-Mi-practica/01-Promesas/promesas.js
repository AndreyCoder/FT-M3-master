let fs = require('fs')


function promiseFunction() {
  let promise = new Promise(function (resolve, reject) {
    fs.readFile('./text.txt', 'utf-8', function (err, data) {
      if (err) {
        return reject(Error('No hay nada'))
      }

      console.log('2: ', data)
      resolve(data)
    })
  })
  return promise
}

// var promiseOne = promiseFunction()
// console.log('1: ', promiseOne)

// promiseOne.then(data => {
//   console.log('3: ', data)
// })
//   .catch(err => console.log(err))

// ============================================================================= \\

function promiseOne(data) {
  let promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('PROMESA ONE')
      resolve(data)
    }, 1000)
  })
  return promesa1
}

// let prom1 = promiseOne()
// prom1.then(res => { console.log(res) })

function promiseTwo(data) {
  let promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('PROMESA TWO')
      resolve({ nuevoDato: data.num })
    })
  }, 2000)
  return promesa2
}

// let prom2 = promiseTwo()
// prom2.then(res => { console.log(res) })

function promiseThree(data) {
  let promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('PROMESA THREE')
      resolve(data.nuevoDato)
      console.log('Hola')
    }, 3000)
  })
  return promesa3
}

// let prom3 = promiseTwo()
// prom3.then(res => { console.log(res) })

promiseOne({ num: '123' })
  .then(promiseTwo)
  .then(promiseThree)
  .then(function (data) {
    console.log(data)
  })

