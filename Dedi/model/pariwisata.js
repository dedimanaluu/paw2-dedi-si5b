const mongoose = require("mongoose");


const pariwisataSchema = new mongoose.Schema({
    tempat : {type : String, required : true},
    makanan : {type : String, required : true},
});


module.exports = mongoose.model("Pariwisata", pariwisataSchema);


