
// We will be using the npm package "dotenv" to allow us to use our database credentials but prevent them from beeing pushed to github.  
// there are steps to configure dotenv:
// 1. npm install "dotenv"
// 2. require the dotenv config as below in the entry point to your app (the server file most likely)
// 3. create a .env file in the root of you repository
// 4. add the environmental variables that you would like to keep private
// 5. replace the credentials that you would like masked with "process.env.<variable name here>"
// see the db/dbConnection.js file for an example of how the variables will be implemented.
// if you have cloned this repo, you will NOT see the .env file, as that is the whole point! You will need to create it per the instructions above
const express = require('express')
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 8088;

const mysql = require("mysql");

//setting handlebars to use it
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sending the static content from the public dir
app.use(express.static("public"));

//Importing the routes
const routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

//starts the server and listening to client requests
app.listen(PORT, () => {
  console.log("App listening on 8088")
});



