const express = require("express");
require('./mongoose/mongosse');
const userRoute = require('./routes/user');
const taskRoute = require('./routes/task');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // send data json to server
app.use(userRoute)
app.use(taskRoute)






app.listen(port, () => {
    console.log("server is runing " + port);
    
})