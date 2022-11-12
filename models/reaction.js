const { Schema, Types } = require('mongoose');
const { mainModule } = require('process');

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
        // add get later perhaps
    },
}, {
    toJSON: { getters: true },
    id: false
});

module.exports = reactionSchema;