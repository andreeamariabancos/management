module.exports = function(Mongoose) {
	const User = Mongoose.models.User;

	this.getUsers = function(success, fail) {
		User.find(function(error, result) {
			error ? fail(error) : success(result);
		});
	}

	this.addUser = function(data, success, fail) {
		const user = new User(data);
		user.save(function(error, result) {
			error ? fail(error) : success(result);
		});
	}

}