const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");

    conn.write("Name: Som");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  // Handle connection close event
  conn.on("close", () => {
    console.log("Connection closed by the server.");
    // return to the prompt line
    process.exit();
  });

  return conn;
};

module.exports = connect;
