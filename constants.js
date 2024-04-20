// Initialize the connection settings
const IP = "localhost";
const PORT = 50541;

// Create movement keys
const movement = {
  W: "Move: up",
  w: "Move: up",
  A: "Move: left",
  a: "Move: left",
  S: "Move: down",
  s: "Move: down",
  D: "Move: right",
  d: "Move: right",
  "\u001b[A": "Move: up",
  "\u001b[B": "Move: down",
  "\u001b[C": "Move: right",
  "\u001b[D": "Move: left",
};

// Create keys for special messages
const message = {
  h: "Say: Hello!",
  H: "Say: Hello!",
  i: "Say: I'm doing well. You?",
  I: "Say: I'm doing well. You?",
  q: "Say: How are you?",
  Q: "Say: How are you?",
  y: "Say: Yes!",
  Y: "Say: Yes!",
};

module.exports = {
  IP,
  PORT,
  movement,
  message,
};
