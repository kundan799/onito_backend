// import
const express = require("express");
const route = express.Router();
const { user } = require("../Model/User");

//get
route.get("/getUser", async (req, res) => {
  try {
    const data = await user.find();

    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});
// post
// route.post("/user", async (req, res) => {
// const {Email}=req.body
//   try {
//     var EmailArray=[];
//     const data = await user.find();
//     data.map((e)=>(
//       EmailArray.push(e.Email)

//     ))
//     var userEmail=EmailArray.includes(Email);
//     if(!userEmail){
//       const work = new user(req.body);
//       await work.save();
//       res.status(200).send(work);
//     }else{

//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
route.post("/user", async (req, res) => {
  try {
    const { Email } = req.body;

    if (!Email) {
      res.status(400).send({ message: "Email is required" });
      return;
    }

    const data = await user.find();
    const emailArray = data.map((e) => e.Email);
    const userEmailExists = emailArray.includes(Email);

    if (userEmailExists) {
      res.status(409).send({ message: "Email already exists" });
      return;
    }

    const newUser = new user(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

// export
module.exports = route;
