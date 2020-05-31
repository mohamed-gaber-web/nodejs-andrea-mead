const express = require('express');

const Tasks = require('../mongoose/models/task');
const router = express.Router();

// send task
router.post('/tasks', async (req, res) => {
    const task = new Task(req.body); // req.body === data from form or data to send 

    // use async and await
    try{
        await task.save()
        res.status(201).json(task)
    } catch(e) {
        res.status(400).send(e)
    }
})

// get all tasks
router.get("/tasks", async (req, res) => {

    try{
        const tasks = await Tasks.find({});
        res.send(tasks);
    } catch(e) {
        res.status(400).send(e);
    }

})

// get tasks by id
router.get("/tasks/:id", async (req, res) => {

    const _id = req.params.id;

    try {
        const taskId = await Tasks.findById(_id);

        if (!taskId) {
            return res.status(404).send("no task by this id");
        }

        res.send(taskId)

    } catch(e) {
        res.status(500).send(e)  
    }

})

// update task
router.patch("/tasks/:id", async (req, res) => {

    // validate property not exist in documents

    const keyDocuments = Object.keys(req.body) // {name: "", age: , email: ""}
    const updateDocuments = ["title", "description", "completed"]; // all documents
    const isValidatorsDocuments = keyDocuments.every(update => {
        return updateDocuments.includes(update) // true or false
    })

    if (!isValidatorsDocuments) {
        return res.status(404).send({error: "invalid updates!"})
    }

    const updateId = req.params.id;

    try {

        const taskUpdate = await Task.findByIdAndUpdate(updateId, req.body , { new: true, runValidators: true });

        if (!taskUpdate) {
            res.status(400).send("Not Exist Task");
        }

        res.json(taskUpdate);

    } catch (e) {

        res.status(400).send(e);

    }
})

// delete task
router.delete("/tasks/:id", async (req, res) => {
    try {
        const taskDelete = await User.findByIdAndDelete(req.params.id);

        if(taskDelete) {
            res.send("deleted task");
        }

        res.status(404).send()

    } catch (e) {
        res.status(500).send(e)
    }

})


module.exports = router