const express = require('express');
const path = require('path');
const cors = require('cors');
const { getData } = require('./db');

const app = express();
const port = 3000;

app.use(cors());
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });
// app.use(express.static('./wdc'));
app.use(express.static('../dist'));

app.get('/wdc', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'wdc'),
  });
});

app.get('/data', (req, res) => {
  getData()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.listen(port);
