const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Men
      .find(req.query)
     
      .then(dbModel => res.json(dbModel))
  },
  findAll: function (req, res) {
    db.Women
      .find(req.query)
      
      .then(dbModel => res.json(dbModel))
  },
  findAll: function (req, res) {
    db.Neutral
      .find(req.query)
     
      .then(dbModel => res.json(dbModel))
  }
};