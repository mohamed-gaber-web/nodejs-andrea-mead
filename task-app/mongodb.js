const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (err, client) => {
    if(err) {
        return console.log('Unable to connect to database');
    }
    
    const db = client.db(databaseName);

      //////////////////////// DELETE TASK //////////////////////////

      db.collection("task").deleteOne({
          description: "task5"
      })
      .then(res => {
          if (res.deletedCount > 0) {
              console.log("deleted one elemnet")
          }
      })
      .catch(err => console.log(err))

});