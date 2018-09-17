import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

/* eslint-disable no-console */
app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req,res) => {
  res.json([
    {
      "id": 1, "fn": "Bob", "ln": "Smith", "email": "bob@gmail.com"
    },
    {
      "id": 2, "fn": "Bob1", "ln": "Smith1", "email": "bob1@gmail.com"
    },
    {
      "id": 3, "fn": "Bob2", "ln": "Smith2", "email": "bob2@gmail.com"
    }
  ])
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
