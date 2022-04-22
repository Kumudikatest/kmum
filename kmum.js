const SL_REDIS = require('slappforge-sdk-redis');
const clusterManager = require('./ClusterManager');
const redis = new SL_REDIS.Redis(clusterManager);
const AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    debugger;
    // You must always quit the redis client after it's used
    redis.persist({
        clusterIdentifier: 'kcluster',
        params: ['K']
    }, function (error, response, redisClient) {
        if (error) {
            console.log(error);
            callback(error);
        } else {
            console.log(response);
            redisClient.quit();
        }
    });

    return { "message": "Successfully executed" };
};