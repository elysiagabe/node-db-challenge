const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    add
}

// Get all Resources
function find() {
    return db('resources');
}

// Get specific Resource by id
function findById(id) {
    return db('resources').where({ id }).first();
}

// Create new Resource
function add(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(([id]) => {
            return findById(id)
        })
}