const express = require('express');

const Resources = require('./resource-model');

const router = express.Router();

// GET all resources
router.get('/', (req, res) => {
    Resources.find()
    .then(resources => {
        res.json(resources)
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to get list of resources' })
    })
})

// GET resource by ID

// POST / create new resource
router.post('/', (req, res) => {
    const newResource = req.body;

    Resources.add(newResource)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to create new resource' })
    })
})

module.exports = router;