const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path'); 
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const UserRoute = require('./route/UserRoute')
const DBRoute = require('./route/DBRoute') 
const ProductRoute = require('./route/ProductRoute')

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', UserRoute)
app.use('/product', ProductRoute)
app.use('/config', DBRoute)

app.get('/', (req, res) => {
    res.send(`Server running on port ${PORT}`);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});