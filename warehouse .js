var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var AboutSchema = new Schema({
	name:String,
	DateOfProduced:String,
	MaturityDate:String,
	type:String,
	imgurl:String,
	AreaOfWarehouse:String,
	date: { type: Date, default: Date.now }
})

AboutSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('about',AboutSchema,'about');