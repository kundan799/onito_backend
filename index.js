const express = require("express");
const Connection  = require("./Database/db");
const Route =require("./Routes/router.js")
const cors=require("cors")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use("/Registration",Route)
app.get("/", (req, res) => res.send("hello"));

// connect
Connection()
app.listen(8080, () => {
  console.log("server started on port 8080");
});
