const express = require('express');
const app = express();
const path = require('path');

const bodyParser =require('body-parser');



const cocktails = require('./cocktails.json');

let idCount = cocktails.length;

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());

var cocktailName = "";

app.get('/home', (req, res) => {
  res.render("init");
});
app.post('/home', (req, res) => {
  cocktailName = req.body.name
  res.render("cocktail_Buch",
  {name:cocktailName});
});
app.get('/cocktail_Buch', (req, res) => {
  res.render("cocktail_Buch",
  {name:cocktailName});
});

app.get('/cocktail_loeschen', (req, res) => {
  res.render("cocktail_loeschen");
});

app.post('/cocktail_loeschen', (req, res) => {
  var cocktailToDelete = req.body.name;
  if(cocktailToDelete == cocktailName)
  {
    cocktailName = "cocktail deleted";
  }
  res.render("cocktail_loeschen");
});

app.get('/cocktail_bearbeiten', (req, res) => {
  res.render("cocktail_bearbeiten",
  {name:cocktailName});
});

app.post('/cocktail_bearbeiten', (req, res) => {

  var cocktailToRename = req.body.oldName;
  if(cocktailToRename == cocktailName)
  {
    cocktailName = req.body.newName;
  }
  res.render("cocktail_bearbeiten");
});

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

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.listen(3000);