module.exports = function(mongoose) {
    var Project = mongoose.Schema({
        name                :    {type: String, index: true}
    });
    var User = mongoose.Schema({
        email               :   {type: String, index: true}
    })
    var models = {
      Projects : mongoose.model('Projects', Project),
      Users : mongoose.model('Users', User),
    };
    return models;
}