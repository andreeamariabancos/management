module.exports = function (Mongoose) {
	const issueSchema = new Mongoose.Schema({
		type: String,

		name: String,

		//sprint: [{
		//	type: Mongoose.Schema.Types.ObjectId,
			//ref: 'Sprint'
		//}],

		createdBy: [{
			type: Mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}],

		assignee: [{
			type: Mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}],

		description: String,

		status: {
			type: Mongoose.Schema.Types.ObjectId,
			ref: 'Status'
		},

		tasks: [{
			type: Mongoose.Schema.Types.ObjectId,
			ref: 'Issue'
		}],

		comments: [{
			type: Mongoose.Schema.Types.ObjectId,
			ref: 'Issue'
		}],

		updatedAt : Date,

		createdAt: Date
	});

	const issue = Mongoose.model("Issue", issueSchema);
}

