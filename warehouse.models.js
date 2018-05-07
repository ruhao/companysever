var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var WarehouseSchema = new Schema({
	name:String,
	ProductName:String,
	CalculateDate:String,
	ExpireDate:String,
	type:String,
	imgurl:String,
	InStock:String,
	WarehouseName:String,
	LeftShelfLife:String,
	date: { type: Date, default: Date.now }
})

WarehouseSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('warehouse',WarehouseSchema,'warehouse');