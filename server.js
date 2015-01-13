var express = require('express');
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-parser');
//user model
var usersController = require('./controllers/users');
var app= express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: false}));
app.use(express.static('public'));


//Routes
app.get('/', function(request, response)
        {
    response.render('index',{title: "Home",  users:usersController.getUsers});
});

app.get('/users/:id', function(request, response)
        {var user =  users.getUser(request.params.id);
    response.render('profile',{title: "User Profile",  user: user });
});



app.get('/signup', function(request, response)
        {
    response.render('signup', {title: "Signup"});
});
app.get('/Login', function(request, response)
        {
    response.render('Login', {title: "Login"});
});

app.get('/About', function(request, response)
        {
    response.render('About', {title: "About Us"});
});

app.post('/Login', usersController.postlogin);

app.listen(3000);