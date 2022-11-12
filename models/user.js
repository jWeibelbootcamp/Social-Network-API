const { Schema, model, Types } = require('mongoose');  // does this need Types?

const userSchema = new Schema({  // does this not need to be new mongoose.Schema?
    username: {

    },
    email: {

    },
    thoughts: {

    },
    friends: {

    }
});

const User = model('User', userSchema);

module.exports = User; 