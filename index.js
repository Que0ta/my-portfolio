import express from "express";

const app = express();
const port = 3000;
var currentPage = '';

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index.ejs');
});

app.get('/projects', (req,res) => {
    res.render('projects.ejs');
});

app.get('/about', (req,res) => {
    res.render('about.ejs');
});

app.get('/email', (req,res) => {
    res.render('email.ejs');
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});