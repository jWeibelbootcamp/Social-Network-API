const { Schema, model } = require('mongoose'); 
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema({  
    thoughtText: {
        type: String,
        required: 'Thought text is required',
        minlength: 1,
        minlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // add get later perhaps
    },
    username: {
        type: String, 
        required: true,
    },
    reactions: [reactionSchema],
}, {
    toJSON: { getters: true },
    id: false
});

thoughtSchema.virtual('reactionCount').get(function () {return this.reactions.length});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought; 