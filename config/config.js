const mongoose = require('mongoos');

mongoose.connect('mongodb://localhost:27017/', {   //is this right?
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;