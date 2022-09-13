const commands = require('./commands');

const done = function (output) {
  process.stdout.write(output)
  process.stdout.write('\nprompt > ')
}

process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {

  var args = data.toString().trim().split(' ');
  var cmd = args.shift()

  if (commands.hasOwnProperty(cmd)) {
    commands[cmd](args, done);

  } else {
    process.stdout.write('Command not found')
  }

});

