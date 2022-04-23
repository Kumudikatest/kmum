const SL_REDIS = require('slappforge-sdk-redis');
const clusterManager = require('./ClusterManager');
const redis = new SL_REDIS.Redis(clusterManager);
const AWS = require('aws-sdk');
const ses = new AWS.SES();
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {

    try {
        let data = await ses.sendEmail({
            Source: "testsigma18+April20th2022GSK@gmail.com",
            Destination: {
                ToAddresses: ['kumudika@adroitlogic.com'],
                CcAddresses: ['kumudikarupasinghe@gmail.com']
            },
            Message: {
                Subject: {
                    Data: "KTest"
                },
                Body: {
                    Text: {
                        Data: `KTest description.`
                    }
                }
            }
        }).promise();
        console.log(data);

    } catch (err) {
        console.log(err);
    };

    return { "message": "Successfully executed" };
};