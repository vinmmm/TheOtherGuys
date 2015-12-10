var mongoose = require('mongoose');

module.exports = mongoose.model('Character', {
  name: String
});