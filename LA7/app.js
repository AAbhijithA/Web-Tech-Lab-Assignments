const express = require('express');
const app = express();
const ejs = require('ejs');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views','./views');

app.get('/', (req, res) => {
    const pageTitle = 'Welcome to the Homepage of XYZ123';
    res.render('index', { pageTitle });
});

app.get('/contact', (req, res) => {
    const contactEmail = 'XYZ123@gmail.com';
    res.render('contact', { contactEmail });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
  
