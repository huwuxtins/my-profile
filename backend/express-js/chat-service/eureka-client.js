const Eureka = require('eureka-js-client').Eureka;

// example configuration
const client = new Eureka({
    // application instance information
    instance: {
        app: 'chat-service',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: {
            '$': 8084,
            '@enabled': true,
        },
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
        vipAddress: 'chat-service',
    },
    eureka: {
        // eureka server host / port
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/'
    },
});

client.start(error => {
    console.log('Eureka client started with error:', error);
});