var AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-2',
});

var dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
  var params = {
    TableName: 'GalleryImages',
  };

  dynamodb.scan(params, function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data.Items);
    }
  });
};
