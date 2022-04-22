const SL_REDIS = require('slappforge-sdk-redis');
const clusterManager = require('./ClusterManager');
const redis = new SL_REDIS.Redis(clusterManager);
const AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    debugger;

    return { "message": "Successfully executed" };
};