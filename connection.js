let mongoose = require("mongoose");

let connectionString = 'mongodb+srv://Arminder:CPSC2600@cluster0.cychq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = mongoose.connect(connectionString);