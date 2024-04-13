const express = require('express')
const path = require('path');
const app = express();
const session = require('express-session');



const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware for session management
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true
}));

// Serve static files from the public directory

app.use(express.static(path.join(__dirname, 'public')));

connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);



// Middleware to check if the user is logged in
const isLoggedIn = (req, res, next) => {
    if (req.session.user) {
        return next();
    } else {
        res.redirect('/login');
    }
};


app.get('/gallery', isLoggedIn, (req, res) => {
    res.render('gallery');
})

app.get('/gallery/cartoon', isLoggedIn, (req, res) => {
    res.render('gallery/cartoon');
})

app.get('/gallery/collage', isLoggedIn, (req, res) => {
    res.render('gallery/collage');
})

app.get('/gallery/creative', isLoggedIn, (req, res) => {
    res.render('gallery/creative');
})

app.get('/gallery/digital', isLoggedIn, (req, res) => {
    res.render('gallery/digital');
})

app.get('/gallery/landscape', isLoggedIn, (req, res) => {
    res.render('gallery/landscape');
})

app.get('/gallery/life', isLoggedIn, (req, res) => {
    res.render('gallery/life');
})

app.get('/gallery/portrait', isLoggedIn, (req, res) => {
    res.render('gallery/portrait');
})

app.get('/gallery/sketches', isLoggedIn, (req, res) => {
    res.render('gallery/sketches');
})

app.get('/gallery/sculpture', isLoggedIn, (req, res) => {
    res.render('gallery/sculpture');
})

app.get('/about', (req, res) => {
    res.render('about');
})


app.get('/contact', (req, res) => {
    res.render('contact');
})

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});

const PORT = process.env.PORT || 35469;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
