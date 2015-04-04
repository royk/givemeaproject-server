var express = require('express');
var router = express.Router();
var models = require("../modules/models");
var modelUtils = require("../modules/modelUtils");

router.get('/', function(req, res, next) {
	console.log("get",req.query);
	models.Platforms.find(function(error, results) {
		if (error) return console.error(error);
		var resultArr = [];
		for (var i=0; i<results.length; i++) {
			resultArr.push(modelUtils.dataObjToEmberObj(results[i].toObject()));
		}
		var result = {platforms: resultArr};
		console.log("Find Many Results: ", result);
		res.send(result);
	});
});

router.get("/:id", function(req, res, next) {
	console.log("get/:id", req.params);
	var id = null;
	if (req.params.id) {
		id = req.params.id;
	}
	if (id) {
		models.Platforms.findById(id, function (error, results) {
			if (error) return console.error(error);
			if (results) {
				var result = {
					platform:modelUtils.dataObjToEmberObj(results.toObject())
				};
				res.send(result);
			} else {
				res.send({});
			}
		});
	}

});

module.exports = router;
