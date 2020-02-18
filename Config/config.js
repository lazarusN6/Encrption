/* sudo service mongod start */

var config = {
    router: {
        PORT: process.env.PORT || 6060
    },
    mongo: {
        connectionstring: "mongodb://localhost:27017/projectmanagement"
    }
};
var debug = {
    'Server': 'server',
    'mongooseConnect': 'MongooseConnect',
    'routerDebug': 'Routermodule',
    'routeErrorDebug': 'RouteError',
    'filesystem': 'filesystem'
};

module.exports.debug = debug;
module.exports.config = config;