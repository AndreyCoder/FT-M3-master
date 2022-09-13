var fs = require('fs')
var request = require('request')

function pwd(args, done) {
  done(process.cwd())
}

function date(args, done) {
  done(Date())
}

function ls(args, done) {
  fs.readdir('.', function (err, files) {
    if (err) throw err
    var out = ''

    files.forEach(function (file) {
      out = out + file + '\n'
    })
    done(out)
  });
}

function echo(args, done) {
  done(args.join(' '))
}

function cat(file, done) {
  fs.readFile(file[0], 'utf-8', function (err, data) {
    if (err) throw err
    done(data)
  })
}

function head(file, done) {
  fs.readFile(file[0], 'utf-8', function (err, data) {
    if (err) throw err
    const lines = data.split('\n').slice(0, 10).join('\n')
    done(lines)
  })
}

function tail(file, done) {
  fs.readFile(file[0], 'utf-8', function (err, data) {
    if (err) throw err
    const lines = data.split('\n').slice(-10).join('\n')
    done(lines)
  })
}

function curl(url, done) {
  request(url[0], function (err, res, body) {
    if (err) throw err
    done(body)
  })
}

module.exports = {
  pwd,
  date,
  ls,
  echo,
  cat,
  head,
  tail,
  curl
}

