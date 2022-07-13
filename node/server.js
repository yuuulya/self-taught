// express : https://expressjs.com/ko/guide/routing.html

const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log("Start Server : localhost:3000");
});

app.set('views', __dirname + "/views");
//dirname : 현재 디렉토리 
app.set('view engine', 'ejs');
//ejs: Embedded JavaScript
app.engine('html', require('ejs').renderFile);

//ROUTER
app.get('/', function (req, res) {
    // res.send('hello world');
    res.render('index.html')
});
app.get('/about', function (req, res) {
    // res.send('about page text');
    res.render('about.html')
});