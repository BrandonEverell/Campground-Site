const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('view engine', 'ejs');

//Routes
app.get('/', (req, res) => res.render('index'));
app.get('/contact_us', (req, res) => res.render('contact_us'));
app.get('/allison_pools', (req, res) => res.render('allison_pools'));
app.get('/camp_foley', (req, res) => res.render('camp_foley'));
app.get('/tamini_rapids', (req, res) => res.render('tamini_rapids'));
app.get('/staging_areas', (req, res) => res.render('staging_areas'));
app.get('/faq', (req, res) => res.render('faq'));
app.get('/know_before_you_go', (req, res) => res.render('know_before_you_go'));
app.get('/reservations', (req, res) => res.render('reservations'));
app.get('/cancellations', (req, res) => res.render('cancellations'));
app.get('/about', (req, res) => res.render('about'));

// HTTP Request Logger
app.use(morgan('dev'));

//Static Assets
app.use(express.static(path.join(__dirname, "public")))

app.listen(5000, () => {
  console.log(`Camp app listening on port 5000`);
});
