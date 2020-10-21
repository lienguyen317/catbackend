// ENVIRONMENTAL VARIABLES
require("dotenv").config();
const { PORT = 3000, NODE_ENV = "development" } = process.env;
// MONGO CONNECTION
const mongoose = require("./db/connection")
// CORS
const cors = require("cors");
const corsOptions = require("./configs/cors.js");
// EXPRESS
const express = require("express");
const app = express();
// OTHER IMPORT
const morgan = require("morgan");
const catRouter = require("./controllers/cat");
const ownerRouter = require("./controllers/owner")

// MIDDLEWARE
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(cors())//ANYBOFY CAN MAKE A REQUEST TO ALL ROUTE 
app.use(express.json());
app.use(morgan("tiny")); //logging

///////////////
//Routes and Routers
//////////////

//Route for testing server is working
app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });
  
// Cat Routes send to cat router
app.use("/cat", catRouter);
// Owner Routes send to owner router
app.use("/owner", ownerRouter);
  
//LISTENER
app.listen(PORT, () => {
    console.log(`Your are listening on port ${PORT}`);
});
  