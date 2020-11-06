const mongoose = require('mongoose');
mongoose.connect(require('../config.json').Mongo)
let Schema = new mongoose.Schema({
    Warns: Array,
    User: String,
    Guild: String,
})
module.exports = mongoose.model("warns", Schema)