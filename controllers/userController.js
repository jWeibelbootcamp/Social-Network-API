const { User, Thought } = require('../models');

module.exports = {
    getAllUsers(req, res) {
        User.find()
            .then(async (users) => {
                return res.json(users);
            })
            .catch((err) => res.status(500).json(err));
    },

    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v').populate('friends').populate('thoughts')
            .then(async (user) => {
                if (!user) {
                    return res.status(404).json({ message: 'No user with that ID' })
                } res.json(user)
            })
            .catch((err) => res.status(500).json(err));
    },

    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true })
            .then(async (user) => {
                if (!user) {
                    return res.status(404).json({ message: 'No user with that ID' })
                } res.json(user)
            })
            .catch((err) => res.status(500).json(err));
    },

    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then(async (user) => {
                if (!user) {
                    return res.status(404).json({ message: 'No user with that ID' })
                } res.json(user)
            })
            .catch((err) => res.status(500).json(err));
    },

    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true })
            .then(async (user) => {
                if (!user) {
                    return res.status(404).json({ message: 'No user with that ID' })
                } res.json(user)
            })
            .catch((err) => res.status(500).json(err));
    },

    removeFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true })
            .then(async (user) => {
                if (!user) {
                    return res.status(404).json({ message: 'No user with that ID' })
                } res.json(user)
            })
            .catch((err) => res.status(500).json(err));
    }
};