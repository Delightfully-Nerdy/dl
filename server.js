// Imports 

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

// static files 
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/images', express.static(__dirname + 'public/scss'));
app.use('/images', express.static(__dirname + 'public/webfonts'));
// templating 
app.use(expressLayouts);
app.set('layout', './layouts/layout');
app.set('view engine', 'ejs');
app.set('views', './src/views')


// Routing and Navigation 

app.get('', (req, res) => {
    res.render('index');
});





// Listen on port 3000 
app.listen (port, () => console.info(`listening on port ${port}`))