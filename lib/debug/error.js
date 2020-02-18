const routeErrorDebug = require('debug')('app:RouteError');

function error(err, req, res, next) {
    routeErrorDebug(err.stack);
    res.status(500).send('Internal Server Error');
    // routeErrorDebug(err);
    next();
}
module.exports = error;