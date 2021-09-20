// import express to create backend service
const express = require("express");
// import body-parser to parse incoming requests
const bodyParser = require("body-parser");
// import cors to allow running server and client on the same system
const cors = require("cors");

// Import the code from user file
const user = require("./user");

// create a service object which will listen to clients' requests
let service = express();
// Tell the service to use JSON parser to parse requests.
service.use(bodyParser.json());
// Tell the service to use cors.
service.use(cors());

// Import API path mappings from user.js
service.use(user.router);

// Start the service at port number 3000
service.listen(3000);