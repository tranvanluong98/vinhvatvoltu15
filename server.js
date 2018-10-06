const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 6969;
const server = express();
const apiRouter = require('./routes/apiWeb')

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get('/', (req, res) => {
res.sendfile('apiWeb.html')
})
server.use('/api', apiRouter)

server.listen(port, (err) => {
    if (err) console.err(err)
    else console.log('Server is listening')
})
