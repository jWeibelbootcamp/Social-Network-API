const { User, Thought } = require('../models');

module.exports = {
    getAllThoughts(req, res) {
        Thought.find()
            .then(async (thoughts) => {
                return res.json(thoughts);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then(async (thought) => {
                if (!thought) {
                    return res.status(404).json({ message: 'No thought with that ID' })
                } res.json(thought)
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => { return User.findOneAndUpdate({ _id: req.body.userId }, { $push: { thoughts: thought._id } }, { new: true }) })
            .then(userData => {
                if (!userData) {
                    return res.status(404).json({ message: 'Thought created, but not added to user.' })
                } res.json({ message: 'Thought created successfully.' })
            })
            .catch((err) => res.status(500).json(err));
    },

    updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true })
            .then(async (thought) => {
                if (!thought) {
                    return res.status(404).json({ message: 'No thought with that ID' })
                } res.json(thought)
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) => {
                if (!thought) {
                    return res.status(404).json({ message: 'No thought with this ID.' })
                } return User.findOneAndUpdate({ thought: req.params.thoughtId }, { $pull: { thoughts: req.params.thoughtId } }, { new: true })
            })
            .then(userData => {
                if (!userData) {
                    return res.status(404).json({ message: 'Thought del.' })
                } res.json({ message: 'Thought deleted successfully.' })
            })
            .catch((err) => res.status(500).json(err));
    },

    addReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.params.reactionId } }, { runValidators: true, new: true })
            .then(async (reaction) => {
                if (!reaction) {
                    return res.status(404).json({ message: 'Reaction was created, but not added to Thought.' })
                } res.json({ message: 'Reaction added.' })
            })
            .catch((err) => res.status(500).json(err));
    },

    removeReaction(req, res) {

    }
};