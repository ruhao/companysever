var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var ProductsSchema = new Schema({
	name:String,
	origin:String,
	describe:String,
	ingredient:String,
	weight:String,
	expiration:String,
	storaged:String,
	title:String,
	content:String,
	title1:String,
	content1:String,
	title2:String,
	title3:String,
	content3:String,
	title4:String,
	content4:String,
	title5:String,
	content5:String,
    haveparameter:String,
	fittemperature:String,
	imgurl:String,
	match:String,
	correlation:String,
	introduction:String,
	companyintroduction:String,
	isfit:String,
	use:String,
	barcode:String,
	cateId: ObjectId,
	type:String,
	belong:String,
    Qcontent:String,
 	Tcontent:String,
 	Scontent:String,
	Kcontent:String,
 	color:String,
 	smell:String,
 	taste:String,
 	MethodOfUse:String,
	date: { type: Date, default: Date.now }
})

ProductsSchema.plugin(mongoosePaginate);


module.exports = mongoose.model('products',ProductsSchema,'products');