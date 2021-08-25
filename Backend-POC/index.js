const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.end('Hello! Welcome to Ag-Grid demo');
});

app.get("/listUsers", (req, res) => {
  fs.readFile(__dirname + '/' + 'data.json', 'utf8', (err, data) => {
      res.end(data);
  });
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
