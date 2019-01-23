module.exports = function (Mongoose) {
   
    var Comments = Mongoose.models.Comments;

     /**
     * Get all comments.
    */
    
    this.getComments = function(success, fail) {
        Comments.find(function(error, result) {
            error ? fail(error) : success(result);
        });     
    }

    /**
     * Get comments by id.
    */
    this.getByIdComments = function (id, success, fail) {
            Comments.findOne({
                _id: id
            }, function (error, result) {
                error ? fail(error) : success(result);
            });
        }

    /**
     * Add new comments.
    */

    this.addComments = function(title, success, fail) {
        var newComments = new Comments(title);
        newComments.save (function(error, result) {
            error ? fail(error) : success(result); //short if
        });
    }
};