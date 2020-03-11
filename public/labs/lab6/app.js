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

app.get("/mercury", function(req, res) {
    res.render("mercury.html");
}); 

app.get("/venus", function(req, res) {
    res.send("venus.html"); 
});

app.get("/earth", function(req, res) {
    res.send("earth.html"); 
});

//server listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running Express Server...");
}); 