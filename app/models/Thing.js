const mongoose = require('mongoose')

const thingSchema = mongoose.Schema({
    title: { type:String, require:true },
    description: { type:String, require:true },
    imageUrl: { type:String, require:true },
    imageAlt: { type:String, require:true },
});

module.exports = mongoose.model('Thing', thingSchema);