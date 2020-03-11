// use the express module
const express = require("express");

// create an object of the express module
const app = express(); 

// use EJS to render HTML files
app.engine('html', require('ejs').renderFile);

app.use(express.static("public"))

//routes
// root route
app.get("/", function(req, res){
    res.render("index.html"); 
}); 

// app.get("/mercury", function(req, res) {
//     res.render("mercury.html");
// }); 

app.get("/venus", function(req, res) {
    res.send("This will be the Venus web page!"); 
});

//server listener
app.listen("8080", "127.0.0.1", function(){
    console.log("Express Server is Running...");
}); 