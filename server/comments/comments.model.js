module.exports = function (Mongoose) {

	const commentsSchema = new Mongoose.Schema({
		name: {
			type: String,
		}
	});

	const comments = Mongoose.model("Comments", commentsSchema);
}