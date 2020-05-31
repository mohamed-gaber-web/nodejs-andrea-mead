const express = require('express');

const User = require('../mongoose/models/user');
const router = express.Router();

router.post("/users", async(req, res) => {
    const user = new User(req.body); // json

    try{
        user.save()
        res.status(201).send(user)

    } catch(e) {
        res.status(401).send(e)
    }
});

// get all users
router.get("/users", async (req, res) => {

    try{
        const users = await User.find({});
        res.send(users);
    } catch(e) {
        res.status(400).send(e);
    }

})

// get user by id
router.get("/users/:id", async (req, res) => {

    const _id = req.params.id;

    try {
        const userId = await User.findById(_id);

        if (!userId) {
            return res.status(404).send("no user by this id");
        }

        res.send(userId)

    } catch(e) {
        res.status(500).send(e)  
    }

})

// update user
router.patch("/users/:id", async (req, res) => {

    // validate property not exist in documents

    const keyDocuments = Object.keys(req.body) // {name: "", age: , email: ""}
    const updateDocuments = ["name", "email", "password", "age" ]; // all documents
    const isValidatorsDocuments = keyDocuments.every(update => {
        return updateDocuments.includes(update) // true or false
    })

    if (!isValidatorsDocuments) {
        return res.status(404).send({error: "invalid updates!"})
    }

    const updateId = req.params.id;

    try {

        const userUpdate = await User.findByIdAndUpdate(updateId, req.body , { new: true, runValidators: true });

        if (!userUpdate) {
            res.status(400).send("Not Exist User");
        }

        res.json(userUpdate);

    } catch (e) {

        res.status(400).send(e);

    }
})


// delete user
router.delete("/users/:id", async (req, res) => {
    try {
        const userDelete = await User.findByIdAndDelete(req.params.id);

        if(userDelete) {
            res.send("deleted user");
        }

        res.status(404).send()

    } catch (e) {
        res.status(500).send(e)
    }

})

module.exports = router