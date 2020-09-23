const { builtinModules } = require("module");
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  connection = conn;
  
  return stdin;

};

const handleUserInput = process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("so long!")
    process.exit();
  }

  if (key === 'w') {
    connection.write("Move: up");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 'd') {
    connection.write("Move: right");
  }

  if (key === 's') {
    connection.write("Move: down");
  }
  
});

let connection;

module.exports = setupInput;
