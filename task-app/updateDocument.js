require("./mongoose/mongosse")
const User = require("./mongoose/models/user")

const id = "5ec4a132a1f047a2a0e77a54";

User.findByIdAndUpdate(id, { age: 22 }).then(user => {
    console.log(user)
    return User.countDocuments({ age: 22 })

}).then(userCount => {
    console.log(userCount)
}).catch(error => {
    console.log(error)
})