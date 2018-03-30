var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
	todo : String
	// user: { type: Schema.Types.ObjectId, ref: 'User' },
	// name: String,
	// price: String,
	// percent: { type: Number, default: 0 },
	// description: String,
	// features: [ { feature: String, created: { type: Date, default: Date.now } } ],
	// images: [ { name: String, created: { type: Date, default: Date.now } } ],
	// created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todos', todoSchema);