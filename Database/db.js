
const mongoose=require("mongoose")
require("dotenv").config();

const Connection = async () => {
  const Url = process.env.MONGO_URL;
  try {
    await mongoose.connect(Url, { useUnifiedTopology: true });
    console.log("database connect succesfully");
  } catch (error) {
    console.log("Error geting while connect with database", error.message);
  }
};
module.exports= Connection;
