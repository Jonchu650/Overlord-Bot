const { MongoClient } = require('salvage.db');
const welcome = new MongoClient({
    schema: {
        name: "WelcomeChannel"
    },
    mongoURI: require('../config.json').Mongo
})
module.exports = welcome;