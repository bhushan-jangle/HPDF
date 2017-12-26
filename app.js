const pug = require('pug');
const path = require('path');
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Init App
var app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Add cookieParser middleware
app.use(cookieParser());

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//A simple hello-world at http://localhost:8080/
app.get('/',function(req,res){
  res.send('Hello Team-HPDF');
});

//A route for Author http://localhost:8080/authors
const usersURL = 'https://jsonplaceholder.typicode.com/users';
const postsURL = 'https://jsonplaceholder.typicode.com/posts';

function getUsers() {
  return axios.get(usersURL);
}

function getPostsCount() {
  return axios.get(postsURL);
}

app.get('/authors', (req, res) => {
  axios.all([getUsers(), getPostsCount()])
    .then(axios.spread((users, posts) => {
      name = [];
      users.data.forEach((user) => {
        name.push(user.name);
      });
      noOfPosts = [];
      posts.data.forEach((post) => {
        if(noOfPosts[post.userId - 1] == null){
          noOfPosts[post.userId - 1] = 1;
        }
        else {
          noOfPosts[post.userId - 1] += 1;
        }
      });
      for(var i = 0; i < name.length; i++) {
          res.write('* ' + name[i] + ' has published ' + noOfPosts[i] + ' posts\n');
      }
      res.end();
    })).catch((error) => {
        res.status(500).render('error');
    });
});

//Set a simple cookie at http://localhost:8080/setcookie
app.get('/setcookie', (req, res) => {
  res.cookie('name', 'Bhushan A Jangle. ')
  .cookie('age', 20)
  .send('Cookie is set');
});

//Fetch the set cookie with http://localhost:8080/getcookies
app.get('/getcookies', (req, res) => {
  res.send('Name: ' + req.cookies.name  + 'Age:' + req.cookies.age);
});

//Deny requests to your http://localhost:8080/robots.txt page.
app.get('/robots.txt',function(req,res){
  res.sendfile('robots.txt');
});

//Render an HTML page at http://localhost:8080/html
app.get('/html',function(req,res){
  res.render('sample');
});

//An image at http://localhost:8080/image
app.use(express.static('public'));
app.get('/image',function(req,res){
  res.sendfile('image.html');
});

//A text box at http://localhost:8080/input which sends the data as POST
//The output display at http://display:8080/display
app.get('/input', (req, res) => res.render('form.pug'))
app.post('/display', (req, res) => res.render('data.pug', { data: req.body.data }))

app.post('/input', function(req, res){
app.set('data', req.body.exampleVariable);
});
app.get('/display', function(req, res) {
res.render('/examplePage.ejs', {retrievedData : app.get('data')});
});

//Starts the webserver (router) on port 8080 and listens for connections
app.listen(8080,function(){
  console.log('server started on port 8080...')
});
