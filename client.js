const net = require("net");
const {IP, PORT} = require('./constants');
//const { stdin } = require("process");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT, }, () => {
    console.log("Connected with game server!");
    conn.write(`Name: MAJ`);
    conn.on('data', (data) => {
      console.log('message from server', data);
    });
  });

  // interpret incoming data as text

  conn.setEncoding("utf8");

  const name = 'MAJ';
  conn.write(`Name: ${name}`);
  //conn.write('Move: up');

  return conn;
};

module.exports = connect;