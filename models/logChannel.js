const { MongoClient } = require('salvage.db');
const log = new MongoClient({
    schema: {
        name: "LogChannel"
    },
    mongoURI: require('../config.json').Mongo
})
module.exports = log;