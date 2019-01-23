
var CommentsManager = require("./comments.manager");

module.exports = function (Mongoose, app) {
    var commentsManager = new CommentsManager(Mongoose);

    /**
	 * Get all comments.
	*/
	app.get("/api/comments", function (request, response) {
		commentsManager.getComments(function (data) {
			response.status(200).json(data);
		}, function (error) {
			response.status(500).json(error);
		});
	})

	/**
     * Get comments by id.
    */
	app.get("/api/comment/:id", function (request, response) {
		var id = request.params.id
		commentsManager.getByIdComments(id, function (data) {
			response.status(200).json(data);
		}, function (error) {
			response.status(500).json(error);
		});
	})


	/**
	 * Add new comments.
	*/
	app.post("/api/comment", function (request, response) {
		commentsManager.addComments(request.body, function(data) {
			console.log(data);	
			response.status(200).json(data);
		}, function(data) {
			response.status(500).json(data);
		});
	});
};
