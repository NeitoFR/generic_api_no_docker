require('dotenv').config();

const log = require("./logger").configLogger(
    process.env.log_level || "debug",
    "default"
),
    express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    //   helper = require("./helper"),
    cors = require('cors');



app.use(bodyParser.json());
app.use(cors());

app.get('*', (req, res, next) => {
    log.debug('Incoming Request', req.hostname, req.method, req.path);
    next();
});

app.all('/hello', (req, res) => {
    log.debug('Request body : ', req.body);
    res.send({ hello: "Hello from Generic API " }).end();
});

app.listen(process.env.SERVER_PORT, () => {
    log.info('Generic API launched on port ' + process.env.SERVER_PORT);
});

