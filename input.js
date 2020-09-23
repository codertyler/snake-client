const { builtinModules } = require("module");
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;

};

const handleUserInput = process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("so long!")
    process.exit();
  }
  
});

module.exports = setupInput;
