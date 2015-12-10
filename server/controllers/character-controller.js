var Meetup = require('../models/character');

module.exports.create = function (req, res) {
  var character = new Character(req.body);
  character.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Character.find({}, function (err, results) {
    res.json(results);
  });
}