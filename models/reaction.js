const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: 'Reaction text is required',
        minlength: 1,
        minlength: 280
    },
    username: {
        type: String, 
        required: true,
    }, 
    createdAt: {
        type: Date,
        default: Date.now,
        // add getter later perhaps
    },
}, {
    toJSON: { getters: true },
    id: false
});

module.exports = reactionSchema;