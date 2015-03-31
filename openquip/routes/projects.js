var express = require('express');
var router = express.Router();
var db = require("../modules/db");
var models = require("../modules/models")(db.mongoose);
function dataObjToEmberObj(obj) {
	var ret = {};
	for (var k in obj) {
		if (k.indexOf("_") !== 0) {
			ret[k] = obj[k];
		}
		if (k === "_id") {
			ret.id = obj[k];
		}

	}
	return ret;
}
router.get('/', function(req, res, next) {
	console.log("get",req.query);
	models.Projects.find(function(error, results) {
		if (error) return console.error(error);
		var resultArr = [];
		for (var i=0; i<results.length; i++) {
			resultArr.push(dataObjToEmberObj(results[i].toObject()));
		}
		var result = {projects: resultArr};
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
		models.Projects.findById(id, function (error, results) {
			if (error) return console.error(error);
			if (results) {
				var result = {
					project:dataObjToEmberObj(results.toObject())
				};
				res.send(result);
			} else {
				res.send({});
			}
		});
	}

});

router.post('/', function(req,res,next) {
	console.log("post",req.body);
	res.send();
});

module.exports = router;
