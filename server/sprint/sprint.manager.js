module.exports = function (Mongoose) {
   
    var Sprint = Mongoose.models.Sprint;

     /**
     * Get all sprints.
    */
    
    this.getSprint = function(success, fail) {
        Sprint.find(function(error, result) {
            error ? fail(error) : success(result);
        });     
    }

    /**
     * Get sprint by id.
    */
    this.getByIdSprint = function (id, success, fail) {
            Sprint.findOne({
                _id: id
            }, function (error, result) {
                error ? fail(error) : success(result);
            });
        }

    /**
     * Add new sprint.
    */

    this.addSprint = function(title, success, fail) {
        var newSprint = new Sprint(title);
        newSprint.save (function(error, result) {
            error ? fail(error) : success(result); //short if
        });
    }
};