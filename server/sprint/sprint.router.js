
var SprintManager = require("./sprint.manager");

module.exports = function (Mongoose, app) {
    var sprintManager = new SprintManager(Mongoose);

    /**
     * Get all sprints.
    */
    app.get("/api/sprints", function (request, response) {
        sprintManager.getSprint(function (data) {
            response.status(200).json(data);
        }, function (error) {
            response.status(500).json(error);
        });
    })

    /**
     * Get sprint by id.
    */
    app.get("/api/sprint/:id", function (request, response) {
        var id = request.params.id
        sprintManager.getByIdSprint(id, function (data) {
            response.status(200).json(data);
        }, function (error) {
            response.status(500).json(error);
        });
    })


    /**
     * Add new sprint.
    */
    app.post("/api/sprint", function (request, response) {
        sprintManager.addSprint(request.body, function(data) {
            console.log(data);  
            response.status(200).json(data);
        }, function(data) {
            response.status(500).json(data);
        });
    });
};
