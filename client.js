const { Server } = require('http');
const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: "localhost",
    port: 50541
  }, 

  );
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  //Messaging that connection is successful
  conn.on('connect', () => {
    console.log("Connection Successful!");
    conn.write("Name: TYL");
    // conn.write("Move: up");



  })

  //Error handler
  conn.on('data', (data) => {
    console.log(data);
  })

 

  return conn;
}

module.exports = connect;