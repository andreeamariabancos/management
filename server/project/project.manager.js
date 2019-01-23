module.exports = function (Mongoose) {
   
    var Project = Mongoose.models.Project;

     /**
     * Get all projects.
    */
    
    this.getProject = function(success, fail) {
        Project.find(function(error, result) {
            error ? fail(error) : success(result);
        });     
    }

    /**
     * Get project by id.
    */
    this.getByIdProject = function (id, success, fail) {
            Project.findOne({
                _id: id
            }, function (error, result) {
                error ? fail(error) : success(result);
            });
        }

    /**
     * Add new project.
    */

    this.addProject = function(title, success, fail) {
        var newProject = new Project(title);
        newProject.save (function(error, result) {
            error ? fail(error) : success(result); //short if
        });
    }
};