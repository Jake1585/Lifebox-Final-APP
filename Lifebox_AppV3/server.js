const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const uRoute = require("./routes/uRoute");
const aRoute = require('./routes/aRoute')
const path = require("path");

app.use('/api/user', uRoute)
app.use('/api/AdminInfo', aRoute)
const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production')
{
    app.use( '/', express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
    }
    );
}



app.listen(port, () => console.log(`Node MongoDB server started at ${port}`));