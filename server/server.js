const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const app = express();

require('dotenv/config')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(process.env.API_PORT, () => {console.log("ONLAINE")});