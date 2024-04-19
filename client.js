const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");

    conn.write("Name: Som");
    
    // const movements = ["Move: up", "Move: up", "Move: left", "Move: left","Move: down", "Move: down", "Move: right", "Move: right"];
    // let delay = 1000;
    // let movementsIndex = 0;

    // // for (let movement of movements) {
    // //   setTimeout(() => {
    // //     conn.write(movement);
    // //   }, delay);
    // //   delay += 1000;
    // // };

    // setInterval(() => {
    //   conn.write(movements[movementsIndex]);
    //   movementsIndex = (movementsIndex + Math.floor(Math.random() * 10)) % movements.length;
    // }, delay);
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;
