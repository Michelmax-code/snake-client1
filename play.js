const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  const name = 'Miguel';
  conn.write(`${name} is starting to play!`);

  conn.on('data', (data) => {
    console.log('message from server', data);
  });

  return conn;
};

console.log("Connecting ...");
connect();