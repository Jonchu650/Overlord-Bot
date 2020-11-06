const { MongoClient } = require('salvage.db');
const db = new MongoClient({
    schema: {
        name: "Prefix"
    },
    mongoURI: require('../config.json').Mongo
})
module.exports = db;