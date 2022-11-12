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
router.route('/').get(getAllUsers).post(createUser);

// localhost:3001/api/users/:userId
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

// localhost:3001/api/users/:userId/friends/:friendId
router.route(('/:userId/friends/:friendId')).post(addFriend).delete(removeFriend);


module.exports = router;