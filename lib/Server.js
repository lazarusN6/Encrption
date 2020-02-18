const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');

const session = require('express-session');

const error = require('./debug/error.js');
const port = require('../Config/config.js').config.router.PORT;
const routermodue = require('./Modules/Routermodule.js');


const path = require('path');
const fs = require('fs');
const serverDebug = require('debug')('app:server');
const fileSystem = require('./fileAccess/fs.js');

const https = require('https');
const cert = require('./Modules/cert-gen.js');

console.log();



async function server() {

    console.log('files');



    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(router);


    app.use(routermodue);

    app.use(error);

    const pems = cert.sslKeyGen();


    // console.log(pems);
    // serverDebug(serverDebug);
    https.createServer({
            key: pems.private, //fs.readFileSync(__dirname + '/cert/key.pem'),
            cert: pems.cert, //fs.readFileSync(__dirname + '/cert/cert.pem'),
            passphrase: '1024'
        }, app)
        .listen(6060, () => {
            serverDebug(`Listerning on port: ${port}`);
        });
    // app.listen(port, '172.18.1.111', () => {
    //     serverDebug(`Listerning on port: ${port}`);
    // });
}
server();
module.exports = app;