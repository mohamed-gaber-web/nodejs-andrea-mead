const path = require('path'); // module path
const express = require('express');
const app = express();
const hbs = require('hbs')
const port = 3000;

// config file

// create path
const publicPath = path.join(__dirname, '../public'); // public tow args(path, str)
const viewsPath = path.join(__dirname, '../views');
const viewsPathPrtials = path.join(__dirname, '../views/partials');

// setup view engine
app.set('view engine', 'hbs') // after install view engine and create [ views ] dir
app.set('views', viewsPath) // change from [ views ] dir to another dir name 
hbs.registerPartials(viewsPathPrtials); // use prtials dir

// setup static dir used to css and js and files
app.use(express.static(publicPath)); // used this dir


app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "about"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "help"
    })
})

// create 404 page from page
// app.get('/about/*', (req, res) => {
//    res.send('not page found from about ')
// })

// create 404 page
//  app.get('*', (req, res) => {
//      res.render('404', {
//          title: "404 page",
//          errorMessage: "page not found"
//      });
//  })


app.get("/weather", (req, res) => { // create route

    if(!req.query.address) {
        return res.send({
            error: 'you must provide an address'
        })
    }
    res.send({
        forecast: 'it is snowing',
        location: 'egypt',
        address: req.query.address
    })
});


app.get('/products', (req, res) => {

    const allProducts = [
        {id: 1, name: 'product1', rating: '5'},
        {id: 2, name: 'product2', rating: '5'},
        {id: 3, name: 'product3', rating: '5'},
        {id: 4, name: 'product4', rating: '5'},
        {id: 5, name: 'product5', rating: '5'},
    ];

    if(!req.query.search) { // false
        return res.send({
            error: 'you must provide a search term'
        })
    }
    // query
    console.log(req.query.search); // object {search: 'sumsung', rating: '5'}
    res.send({
        allProducts
    })
}); 


// test with query string
app.get('/users', (req, res) => { // create CRUD
    const queryString = req.query.page;
    if(!queryString){
        res.send("please add query strng");
    }
    else if(queryString === "add") {
        res.send("Add Form User")
    } else if(queryString === "edit") {
        res.send("Edit Form User")
    }else if(queryString === "delete") {
        res.send("Delete Form User")
    }else if(queryString === "save") {
        res.send("Save User")
    }

 });




// create server
app.listen(port, () => {
    console.log("server runing");
});



//
// // 1- express => framework for node js
// // 2- npm init -y
// // send html - jsonObject
// // __dirname(folder-path-name) - __filename(file-path-name)
// // module PATH -- path.jon(path, str);
// // use - express.static(path) use from this folder
// // pubilc => html or css or js or files
// // first template dynamic or view engine [ handlebars ] npm i hbs
// // views => dynamic templating like ejs or hbs or pugejs
// // res.send(files or data) or res.render(view engine)
// //
//
// //
// // query string => www.products.com?search=phone&rating=5
// // req.query return object {}
// //
//
//
// //
// // how to development app in github and heroku
// // heroku [ download and install - cmd( heroku login ) ]
// //