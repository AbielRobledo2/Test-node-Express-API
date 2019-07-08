// Dependencias
const express = require('express');
const morgan = require('morgan');
const bodyParser =require('body-parser');

//Constants
const PORT = process.env.PORT || 3000;
const app = express();

// Middlesware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '5MB'
}));
app.use(morgan('dev'));

//Routes
app.get('/hello', function (req, res) {
    const name = req.query.name;
    const massage = 'hello ' + name;
    res.send(massage);
});

app.get('/hello/:name', function (req, res) {
    const { name } = req.params;
    const massage = `Hello ${name}`;
    res.send(massage);
});
app.post('/post', function (req, res) {
    const { name } = req.body;
    const massage = `Hello ${name}`;
    res.send(massage);
});


//Run Server
app.listen(PORT, function() {
    console.log('Server on port ' + PORT);
})