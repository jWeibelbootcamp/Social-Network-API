const router = require('express').Router();

const {
    createUser,
    getOneUser,
    getAllUsers,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// localhost:3001/api/users


// localhost:3001/api/user/:id


// localhost:3001/api/users/:userId/friends


// localhost:3001/api/users/:userId/friends/:friendId


module.exports = router;