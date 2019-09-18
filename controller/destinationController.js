const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Cold
      .find(req.query)
 
      .then(dbModel => res.json(dbModel))
  },
  findAll: function (req, res) {
    db.Desert
      .find(req.query)
     
      .then(dbModel => res.json(dbModel))
  },
  findAll: function (req, res) {
    db.Seasonal
      .find(req.query)
    
      .then(dbModel => res.json(dbModel))
  },
  findAll: function (req, res) {
    db.Tropical
      .find(req.query)
   
      .then(dbModel => res.json(dbModel))
  },
  findAll: function (req, res) {
    db.Warm
      .find(req.query)
     
      .then(dbModel => res.json(dbModel))
  }
};
