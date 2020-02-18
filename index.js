                                            // const routerDebug = require('debug')('app:index');
                                            // console.log(routerDebug);
                                            // {
                                            //     'Server': 'server',
                                            //     'mongooseConnect': 'MongooseConnect',
                                            //     'routerDebug': 'Routermodule',
                                            //     'routeErrorDebug': 'RouteError',
                                            //     'filesystem': 'filesystem'
                                            // };


                                            try {
                                                const deb = 'app:server,app:filesystem'; //require('./Config/config.js').debug.Server + ',' + require('./Config/config.js').debug.mongooseConnect;
                                                process.env.DEBUG = deb; //'*'//debug.Server+','+debug.mongooseConnect;
                                                var app = require('./lib/Server.js');
                                                process.env.DEBUG = '';
                                                // routerDebug(app);

                                            } catch (ex) {
                                                console.error(ex);
                                            }
                                            module.exports.app = app;