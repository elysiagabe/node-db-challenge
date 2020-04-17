const express = require('express');

const ResourceRouter = require('./resources/resource-router');
// const ProjectRouter = require('./projects/project-router');

const server = express();

server.use(express.json());

server.use('/api/resources', ResourceRouter);
// server.use('/api/projects', ProjectRouter);

module.exports = server;