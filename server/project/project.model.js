module.exports = function (Mongoose) {

	const projectSchema = new Mongoose.Schema({
		sprint: [{
			type: Mongoose.Schema.Types.ObjectId,
			ref: 'Sprint'
		}]
	});

	const project = Mongoose.model("Project", commentsSchema);
}