require('dotenv').config();

const express = require('express'); // commonjs
const path = require('path');
const configViewEngine = require('./config/viewEnige');
const webRoutes = require('./routes/web')

const app = express();// app express
const port = process.env.PORT || 8888; // port => hardcode
const hostname = process.env.HOST_NAME;


// config template engine
configViewEngine(app);

// Khai bao routes
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
