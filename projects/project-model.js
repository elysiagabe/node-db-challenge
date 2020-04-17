const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findTasks,
    addTask
}

// Get all projects
function find() {
    return db('projects');
}

// Get project by id
function findById(id) {
    return db('projects').where({ id }).first();
}

// Create new project
function add(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => {
            return findById(id)
        })
}

// Update specified project
function update(changes, id) {
    return db('projects').where({ id }).update(changes)
        .then(() => {
            return findById(id)
        })
}

// Delete specific project
function remove(id) {
    return findById(id)
        .then(projectToDelete => {
            return db('projects').where({ id }).del()
                .then(() => projectToDelete)
        })
}

// Get all tasks for specified project
function findTasks(project_id) {
    return db('t.*, p.name')
        .from('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .where('p.id', project_id)
}

// Create new task for specified project
function addTask(task, project_id) {
    return db('tasks').insert({...task, project_id})
        .then(ids => {
            const newTaskId = ids[0]
            return db('tasks').where('tasks.id', newTaskId)
        })
}