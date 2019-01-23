module.exports = function(Mongoose) {
	const schema = Mongoose.Schema({
		name: {
			type: String,
			unique: true
		}
	});

	Mongoose.model('User', schema);
}