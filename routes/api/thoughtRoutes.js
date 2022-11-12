const router = require('express').Router();

const {
    createThought,
    getOneThought,
    getAllThoughts,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

// localhost:3001/api/thoughts


// localhost:3001/api/thoughts/:thoughtId


// localhost:3001/api/thoughts/:thoughtId/reaction


// localhost:3001/api/thoughts/:thoughtId/reaction/:reactionId


module.exports = router;