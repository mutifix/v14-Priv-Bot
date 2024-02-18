const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let secretroom = new Schema({
    id: String,
    ownerId: String,
})

module.exports = mongoose.model("ertu-secretrrom", secretroom)