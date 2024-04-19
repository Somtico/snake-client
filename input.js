let connection;

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }

  if (key === 'w' || key === "\u001b[A") {
    connection.write('Move: up');
  }

  if (key === 'a' || key === "\u001b[D") {
    connection.write('Move: left');
  }

  if (key === 's' || key === "\u001b[B") {
    connection.write('Move: down');
  }

  if (key === 'd' || key === "\u001b[C") {
    connection.write('Move: right');
  }

  if (key === 'h') {
    connection.write('Say: Hello!');
  }

  if (key === 'i') {
    connection.write('Say: I\'m doing well. You?');
  }

  if (key === 'q') {
    connection.write('Say: How are you?');
  }

  if (key === 'y') {
    connection.write('Say: Yes!');
  }
};

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;