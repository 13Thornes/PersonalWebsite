// define constants
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const session = require('express-session');
const PORT = 3000;
const path = require('path');
const serverless = require("serverless-http");
const router = express.Router();

global.DEBUG = true;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true, }));
app.use(methodOverride('_method'));
app.use(express.json());

app.get('/', async (req, res) => {
    
    res.render('index', {status: req.status});
});

// get word page
const wordsRouter = require('./Routes/words')
app.use('/word', wordsRouter);

// link to css
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'Public')))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
});

router.get("/", (req, res) => {res.send("App is running..")});

app.use("/.netlify/functions/app", router);

module.exports.handler = serverless(app);

