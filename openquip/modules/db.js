var mongoose = require("mongoose");
var db;
module.exports = {

    init : function(config, cb) {
        db = mongoose.connection;
		mongoose.connect("mongodb://localhost:27017");
		db.once('open', function (callback) {
		  console.log("connected");
		});
    },

    query : function(params, cb) {
    },
    mongoose: mongoose

};