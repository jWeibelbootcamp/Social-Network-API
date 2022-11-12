const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/social_DB', {   
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;