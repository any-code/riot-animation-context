var testable = require('../animation-context.min');

exports.setUp = function(callback) {
  callback();
}

exports.tearDown = function(callback) {
  callback();
}

exports.test = function(test) {
  test.ok(testable, "");
  test.done();
}
