const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const keys = require('./config/keys');
const cors = require('cors');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { dbName: 'cycle-db', useNewUrlParser: true });
console.log('Connected to mongoDB');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


app.get('/', (req, res) => {
    res.send({ Hoila: 'Voila'});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})