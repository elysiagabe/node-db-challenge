const express = require('express');
const Projects = require('./project-model');
const router = express.Router();

// GET all projects
router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to get list of projects' })
    })
})

// GET project by id

// POST / add new project
router.post('/', (req, res) => {
    const newProj = req.body;

    Projects.add(newProj)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to create new project' })
    })
})

// GET all tasks for specified project
router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.findTasks(id)
    .then(tasks => {
        if (tasks.length) {
            res.json(tasks)
        } else {
            res.status(404).json({ message: 'There are no tasks for the specified project' })
        }
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to get tasks for the specified project' })
    })
})

// POST / add new task for specified project
router.post('/:id/tasks', (req, res) => {
    const newTask = req.body;
    const { id } = req.params;

    Projects.findById(id)
    .then(project => {
        if (project) {
            Projects.addTask(newTask, id)
            .then(task => {
                res.status(201).json(task)
            })
        } else {
            res.status(404).json({ message: 'Could not find project with specified id' })
        }
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to create new step' })
    })
})

module.exports = router;