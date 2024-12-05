const http = require('node:http')
const { createBareServer } = require('@tomphttp/bare-server-node')
const express = require('express');
const sqlite = require('sqlite3').verbose();




const app = express();




app.use(express.json())

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));



app.post('/', (req, res) => {
    const { parcel } = req.body
    let search = parcel
    let now = new Date();
    let time = now.getTime();
    res.status(200).send({status: 'recived'})
    let db = new sqlite.Database('utils/rizz.db', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);
    db.run('CREATE TABLE IF NOT EXISTS main(Search TEXT NOT NULL, Time INTEGER NOT NULL)');
    db.run("PRAGMA busy_timeout = 30000");
    let query = `SELECT * FROM main WHERE Search = ?`
    db.get(query, [search], (err, row) => {
      if (err) {
        console.log(err)
        return;
      } 
      if (row === undefined) {
        let insert = db.prepare(` INSERT INTO main VALUES(?,?)`)
        insert.run(search, time)
        console.log("successfully added data into db")
        db.close;
      }
      
    })
  })

// Create an HTTP server
const httpServer = http.createServer();
const bareServer = createBareServer("/bare/");



httpServer.on("request", (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

httpServer.on("upgrade", (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});
const port = 2300;

httpServer.on("listening", () => {
  console.log("HTTP server listening");
  console.log(`View your server at http://localhost:${port}`);
});

httpServer.listen({
  port: port,
});