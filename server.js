const express = require('express');
const app = express();

const cocktails = require('./cocktails.json');

let idCount = cocktails.length;

app.use(express.static('public'));
app.use(express.json());
  
app.get('/cocktails', (req, res) => {
  res.json(cocktails);
});

app.post('/cocktails', (req, res) => {
  const cocktail = req.body;
  cocktail.id = ++idCount;

  cocktails.push(cocktail);

  res.status(201).json(cocktail);
});

app.delete('/cocktails/:id', (req, res) => {
  //req.params.id;
});
  
app.listen(3000);