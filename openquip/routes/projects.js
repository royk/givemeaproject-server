var express = require('express');
var router = express.Router();
var models = require("../modules/models");
var modelUtils = require("../modules/modelUtils");
router.get('/', function(req, res, next) {
	console.log("get",req.query);
	models.Projects.find(function(error, results) {
		if (error) return console.error(error);
		var resultArr = [];
		for (var i=0; i<results.length; i++) {
			resultArr.push(modelUtils.dataObjToEmberObj(results[i].toObject()));
		}
		var result = {projects: resultArr};
		console.log("Find Many Results: ", result);
		res.send(result);
	});
});
router.put("/:id", function(req, res, next) {
	console.log("put/:id", req.params, req.body);
	if (req.params.id) {
		models.Projects.findOneAndUpdate({_id: req.params.id}, req.body.project, function(err, project) {
			var result = {
				project:modelUtils.dataObjToEmberObj(project.toObject())
			};
			res.send(result);
		})
	} else {
		next();
	}
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
					project:modelUtils.dataObjToEmberObj(results.toObject())
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
