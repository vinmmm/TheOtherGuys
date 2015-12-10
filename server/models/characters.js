var mongoose = require('mongoose');

module.exports = mongoose.model('Characters', {
  name: String
});