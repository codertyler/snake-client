const connect = function() {
  const conn = net.createConnection({ 
    host: "10.2",
    port: 50541
  },);
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  //Error handler
  conn.on('error', (error) => {
    console.log("you ded cuz you idled");
  })

  return conn;
}