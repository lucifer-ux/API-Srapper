const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
	data:[{
		type:String
	}
	]         
})

module.exports= mongoose.model('apiList',userSchema);

