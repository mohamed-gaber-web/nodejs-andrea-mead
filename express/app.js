const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.json()); // when create api [ get - post ] use this [ middleware ]

const devDataDir = path.join(__dirname, "/dev-data");

const tours = JSON.parse(fs.readFileSync(`${devDataDir}/tours.json`));

app.get("/api/v1/tours", (req,res) => {
   res.status(200).json({
       status: 'success',
       result: tours.length,
       data: {
           tours
       }
   });
});

app.post("/api/v1/tours", (req, res) => {
    const data = req.body;
    const newTour = {...data} // {name: "", "der"} clone object

    tours.push(newTour);
    fs.writeFile(`${devDataDir}/tours.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    })
});


const port = 4040;
app.listen(port, () => {
    console.log(`app is run ${port}`);
});
















/*
* express
* Framework from nodeJs and contain feature like routing and request and response
* make it easier to organize application to MVC
* npm i express
* **/


// basic route
// app.get("/", (req, res) => {
//     // res.status(200).send("hello from server side app");
//     res.status(200).json({
//         message: "hello from server side app",
//         app: "express api"
//     })
// });
//
// app.post("/", (req, res) => {
//     res.send("you can post from this url");
// });
// /api/v1/tours/:id => use parameter [ id ]
// /api/v1/tours/:id/:name/:price? =>