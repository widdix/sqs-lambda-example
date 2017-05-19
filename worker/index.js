'use strict';

var AWS = require("aws-sdk");

var TASK_QUEUE_URL = process.env.TASK_QUEUE_URL;
var AWS_REGION = process.env.AWS_REGION;

var sqs = new AWS.SQS({region: AWS_REGION});
var s3 = new AWS.S3({region: AWS_REGION});

function deleteMessage(receiptHandle, cb) {
  sqs.deleteMessage({
    ReceiptHandle: receiptHandle,
    QueueUrl: TASK_QUEUE_URL
  }, cb);
}

function work(task, cb) {
  console.log(task);
  // TODO implement
  cb();
}   

exports.handler = function(event, context, callback) {
  work(event.Body, function(err) {
    if (err) {
      callback(err);
    } else {
      deleteMessage(event.ReceiptHandle, callback);
    }
  });
};
