const net = require("net");
//const { stdin } = require("process");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542, }, () => {
    console.log("Connection established!");
    conn.on('data', (data) => {
      console.log('message from server', data);
    });
  });

  // interpret incoming data as text

  conn.setEncoding("utf8");

  const name = 'MAJ';
  conn.write(`Name: ${name}`);

  return conn;
};

module.exports = connect;