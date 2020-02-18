const express = require('express');
const router = express.Router();
const routerDebug = require('debug')('app:Routermodule');

// const client =
router.get('/', (req, res) => {
    res.send('Success :Connection successful');
    routerDebug(`Response with status code ${res.statusCode}`);
});
router.post('/encrypt', (req, res) => {
    routerDebug(req.body);
    res.send(req.body);
    routerDebug(`Response with status code ${req.body}`);
});

module.exports = router;