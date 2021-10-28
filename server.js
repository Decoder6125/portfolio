const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const expTemp = require('express-ejs-layouts');
const PORT = process.env.PORT || 5000;

app.use(expTemp);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');
app.get('/',(req,res)=> {
    res.render('home');
});
app.get('/cart',(req,res)=> {
    res.render('customers/cart');
});
app.get('*',(req,res)=> {
    res.render('404');
});

app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT}`);
});