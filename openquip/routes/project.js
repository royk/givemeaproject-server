var express = require('express');
var router = express.Router();
var db = require("../modules/db");
var models = require("../modules/models")(db.mongoose);
router.get('/', function(req, res, next) {
	var id = null;
	if (req.query.id) {
		id = req.query.id;
	}
	if (id) {
		models.Projects.findById(id, function(error, results) {
			if (error) return console.error(error);
			console.log("Find one Results: ", results);
			res.send(results);
		});
	}


});