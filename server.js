const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
// sequelize
//

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);
// Server Setuo
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT);
console.log(`Server listening on: ${PORT}`);
