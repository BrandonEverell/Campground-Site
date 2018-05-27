const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));
app.get('/contact_us', (req, res) => res.render('contact_us'))

// HTTP Request Logger
app.use(morgan('dev'));

//Static Assets
app.use(express.static(path.join(__dirname, "public")))

app.listen(5000, () => {
  console.log(`Camp app listening on port 5000`);
});
