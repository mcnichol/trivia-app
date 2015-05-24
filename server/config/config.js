var path = require('path');
var rootPath = path.normalize(__dirname + "/../../");

module.exports = {
  development: {
    db:  'mongodb://localhost/trivia-app',
    rootPath: rootPath,
    port: process.env.PORT || 3030,
    msg: "trivia-app db opened Locally"
  },
  production: {
    db: 'mongodb://mmcnichol:trivia@ds031842.mongolab.com:31842/trivia-app',
    rootPath: rootPath,
    port: process.env.PORT || 80,
    msg: "trivia-app db opened in the Cloud"
  }
}
