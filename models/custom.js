const { Schema, model } = require("mongoose");
module.exports = model("Custom", new Schema({
    Guild: String,
    Command: String,
    Content: String,
}))