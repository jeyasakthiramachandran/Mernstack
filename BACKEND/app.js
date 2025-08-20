const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books
/*
mongoose
  .connect(
    const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

*/
mongoose
  .connect("Mongoose Connection String")
  .then(() => {
    console.log("Connected To Database");
    app.listen(5000);
  })
  .catch((err) => console.log(err));
  
