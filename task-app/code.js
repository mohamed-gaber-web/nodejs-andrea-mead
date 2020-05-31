    ///// INSERT ONE DOCUMENT [ insertOne ]
    // db.collection('users').insertOne({ // one document // create collection and insertOne({}) add user
    //     name: "mohamed", 
    //     age: 27,
    //     work: "Doctor"
    // }, (err, res) => {
    //     if(err) {
    //         return console.log("Unable Insert Data" + err);
    //     }

    //     console.log(res.ops[0].age) // print user insert 
    // }); 

    ///// INSERT MANY DOCUMENT [ insertMany ] take array
    // db.collection("users").insertMany([
    //     {name: "mohamed", age: 30, work: "Developer"},
    //     {name: "khaled", age: 40, work: "Designer"}
    // ], (err, res) => {
    //     console.log(res.ops);
    // })

    //////////////////////// TASK ADD TASK //////////////////////////
    // db.collection("task").insertMany([
    //     {description: "task1", completed: false},
    //     {description: "task2", completed: false},
    //     {description: "task3", completed: false},
    // ], (err, res) => {
    //     if(err) {
    //         console.log("unable Insert Data");
    //     }

    //     console.log(res.ops);
    // })

      //////////////////////// GET DATA By FIND //////////////////////////
    
    // how to use find [ find(query, more data used toArray()), findOne(query) ] get data from database
    // db.collection("task").findOne({_id: new ObjectID('5ebd0a32fb6f51263c8258ab')} , (err, res) => {
    //     if (err) {
    //         console.log("Unable find data");
    //     }
        
    //     console.log(res);
    // });

    // db.collection("task").find({completed: true}).toArray((err, tasks) => { //
    //     console.log(tasks)
    // });

    // db.collection("task").find().count((err, count) => { //
    //     console.log(count)
    // });


        //////////////////////// UPDTED TASK //////////////////////////
      // updateOne({query}, {$set: {new update}})
      // return promises

    //   const updatedTask = db.collection("task").updateOne(
    //       {
    //           _id: new ObjectID("5ebd14916ccd17337410af10")
    //     }, 
    //     {
    //           $set: {description: "new task", completed: true}
    //     });

    //     updatedTask.then(res => {
    //         console.log(res);
    //     }).catch(err => {
    //         console.log(err);
    //     })

    // db.collection("task").updateMany({completed: false}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then(res => {
    //     console.log(res.modifiedCount)
    // }).catch(err => console.log(err))



    // task.save()
    // .then(
    //     res.json(task)
    // )
    // .catch(err => {
    //     res.status(400).send(err)
    // })