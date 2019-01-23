
var ProjectManager = require("./project.manager");

module.exports = function (Mongoose, app) {
    var projectManager = new ProjectManager(Mongoose);

    /**
	 * Get all projects.
	*/
	app.get("/api/projects", function (request, response) {
		projectManager.getProject(function (data) {
			response.status(200).json(data);
		}, function (error) {
			response.status(500).json(error);
		});
	})

	/**
     * Get project by id.
    */
	app.get("/api/project/:id", function (request, response) {
		var id = request.params.id
		projectManager.getByIdProject(id, function (data) {
			response.status(200).json(data);
		}, function (error) {
			response.status(500).json(error);
		});
	})


	/**
	 * Add new project.
	*/
	app.post("/api/project", function (request, response) {
		projectManager.addProject(request.body, function(data) {
			console.log(data);	
			response.status(200).json(data);
		}, function(data) {
			response.status(500).json(data);
		});
	});
};
