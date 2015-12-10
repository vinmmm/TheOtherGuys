var Characters = require('../models/characters');

module.exports.create = function (req, res) {
  var characters = new Characters(req.body);
  characters.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Character.find({}, function (err, results) {
    res.json(results);
  });
}