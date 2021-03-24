const http = require('http');
const express = require('express');
const app = express();

app.use('/',(req, res, next) => {
    console.log('In the middleware');
    res.send('hello');
});
app.use('/message',(req, res, next) => {
    console.log('In the another middleware');
    res.send('<h1>This is node</h1>')
});
console.log('hello')
app.listen(3000)