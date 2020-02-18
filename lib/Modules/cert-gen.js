var selfsigned = require('selfsigned');



module.exports.sslKeyGen = () => {
    var attrs = [{
        name: 'commonName',
        value: 'localhost'
    }, {
        name: 'countryName',
        value: 'in'
    }, {
        name: 'stateOrProvinceName',
        value: 'teststate'
    }, {
        name: 'organizationName',
        value: 'Org'
    }, {
        name: 'organizationalUnitName',
        value: 'OU'
    }, {
        name: 'localityName',
        value: 'testlocality'
    }];
    return selfsigned.generate(attrs, {
        days: 365
    });
}