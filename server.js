const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    User = require('./api/models/userModel'),
    cors = require('cors'),
    jwt = require('jsonwebtoken'),
    // recuire bycrypt package for the purpose of password encryption
    bcrypt = require('bcryptjs'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb').then(
    (res) => {
        console.log("Successfully connected to the database.");
    }
    ).catch(() => {
        console.log("Connection to database failed.");
    }
);

app.use(cors());
app.use(bodyParser.json());

//parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route
console.log(routes);

app.get('/', (req, res) => {
    res.send('hey').status(200);
});

//middleware added to check if user enters not found route
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log(`todo list RESTful API server started on: ${port}`);
