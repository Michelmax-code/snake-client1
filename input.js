let connection;
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === 'p') {
    connection.write("Say: I'm fast!");
  } else if (key === 'o') {
    connection.write("Say: I like donuts");
  } else if (key === 'i') {
    connection.write("Say: I need shoes!");
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

module.exports = setupInput;
