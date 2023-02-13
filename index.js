const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./utils/db');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});


app.get('/', (req, res) => {
    res.send('Hello Node js World');
});

//CRUD routes
app.use('/users', require('./routes/usersRoutes'));

//error handling
app.use((error, req, res) => {
    // we use sentry for error

    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});

//sync database
sequelize
    .sync()
    .then(() => {
        console.log("Database connected");
        app.listen(8000);
    })
    .catch(error =>{
        console.log(error);
        // we use sentry for error
    });
