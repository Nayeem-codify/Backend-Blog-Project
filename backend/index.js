const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;
const cors = require("cors");

//nayeem2306//
//Rg73rCIf74BytpXm//
// mongodb+srv://nayeem2306:Rg73rCIf74BytpXm@cluster1.qfsw7.mongodb.net/Blog //

//middleware//
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({ origin: true }));

//middleware//

//Database Connection//
mongoose
  .connect(
    "mongodb+srv://nayeem2306:Rg73rCIf74BytpXm@cluster1.qfsw7.mongodb.net/Blog"
  )
  .then(() => {
    console.log(`Server Database Connection Successful ! !`);
  })
  .catch((err) => {
    console.log(`Server Database Connection Failed ! ! ${err}`);
  });
//Database Connection//

//Make A Schema//
const blogSchema = new Schema({
  userName: {
    type: String,
    min: 5,
    max: 20,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  blog: {
    type: String,
    required: true,
    trim: true,
  },
});


const blogModel = mongoose.model("user", blogSchema);

//Route//
app.post("/createblog", async (req, res) => {
  console.log(req.body);
  
  const { userName, email, blog } = req.body;

  if (!userName) {
    return res.status(400).json({
      Error: "UserName Is Missing ! !",
    });
  }
  if (!email) {
    return res.status(400).json({
      Error: "Email Is Missing ! !",
    });
  }
  if (!blog) {
    return res.status(400).json({
      Error: "Blog Is Missing ! !",
    });
  }
  //Route//
  //DataBase Info Save//
  const users = await blogModel.create({
    userName: userName,
    email: email,
    blog: blog,
  });
  users.save();
  res.status(200).json({
    sucess: true,
    data: users,
    blog: "Blog Post Is Successful",
  });
});
//DataBase Info Save//

//Get All Users//

app.get("/getallblog", async (req, res) => {
  const alluser = await blogModel.find({});
  if (!alluser) {
    return res.status(400).json({
      Error: "No Blog Available ! !",
    });
  }
  res.status(200).json({
    sucess: true,
    data: alluser,
    message: "Get All Users Sucessfully",
  });
});
//Get All Users//

//Start and Create The Server//
app.listen(4000, () => {
  console.log(`Server Running on Port ${4000}`);
});
//Start and Create The Server//

