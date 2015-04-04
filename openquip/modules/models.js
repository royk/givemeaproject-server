var db = require("./db");
var mongoose = db.mongoose;
searchPlugin = require('mongoose-search-plugin');
var Platform = mongoose.Schema({
	name		:	{type:String, index: true}
});
var Project = mongoose.Schema({
	name                :    {type: String, index: true},
	description         :    {type: String},
	platform		    :    {type: mongoose.Schema.Types.ObjectId, ref: 'Platform' },
	tags				:	 {type: [String]},
	updated				:	 {type: Date, default: Date.now}
});
Project.index({tags:'text'});
Project.plugin(searchPlugin, {
	fields: ['name', 'description', 'tags']
});
var User = mongoose.Schema({
	email               :   {type: String, index: true},
	updated				:	 {type: Date, default: Date.now}
});
var models = {
	Projects : mongoose.model('Projects', Project),
	Users : mongoose.model('Users', User),
	Platforms: mongoose.model('Platform', Platform)
};
module.exports = models;
