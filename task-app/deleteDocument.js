require("./mongoose/mongosse")
const Task = require("./mongoose/models/task")

const id = "5ec3b42f809df0243c1695e7";

// Task.findByIdAndDelete(id).then(task => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })

// }).then(taskCountNotCompleted => {
//     console.log(taskCountNotCompleted)
// }).catch(error => {
//     console.log(error)
// })

// use async and await 

const deletedDocument = async (_id) => {
    const taskDeleted = await Task.findByIdAndDelete(_id); // 1. delete document task by id
    const count = await Task.countDocuments({ completed: false }); // 2. get count where filter

    return count;
}

deletedDocument(id).then(count => {
    console.log(count)
}).catch(error => {
    console.log(error)
})