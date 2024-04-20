const { movement, message } = require("./constants");

// Initialize a variable to be used later
let connection;

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }

  // If player presses a movement key, snake should move in the specified direction
  if (movement[key]) {
    connection.write(movement[key]);
  }

  // If player presses a special message key, display message on screen
  if (message[key]) {
    connection.write(message[key]);
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
