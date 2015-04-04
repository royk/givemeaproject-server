module.exports = {
	dataObjToEmberObj: function (obj) {
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
};