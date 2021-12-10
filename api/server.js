const express = require('express');

const projectsRouter = require('./project/router');
const resourcesRouter = require('./resource/router');
const tasksRouter = require('./task/router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);


server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server up'});
});

server.use("*", (req,res)=>{
    res.status(404).json({
        message: 'not found'
    })
})

module.exports = server;
