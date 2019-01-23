module.exports = function (Mongoose) {

	const sprintSchema = new Mongoose.Schema({
		name: {
			type: String,
		}
	});

	const sprint = Mongoose.model("Sprint", sprintSchema);
}