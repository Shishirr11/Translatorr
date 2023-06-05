const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
app.use(express.json());

const mongourl =
  "mongodb+srv://20bd1a6654:<password>@logindetails.cxnx0yu.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongourl, {
    useNewUrlParser: true,
  })

  .then(() => {
    console.log("connected to database");
  })

  .catch((e) => console.log(e));

require("./Userdetails");
const User = mongoose.model("user");

app.post("/signup", async (req, res) => {
  const { fname, lname, dob, email, pass } = req.body;
  try {
    const em = await User.findOne({ email: email });
    console.log(em);
    if (em != 0) {
      res.json("user already exists");
    } else {
      await User.create({
        fname,
        lname,
        dob,
        email,
        pass,
      });
      res.json("Registration successfull");
    }
  } catch (err) {
    res.send({ status: "error" });
  }
});
app.post("/signin", async (req, res) => {
  const { email, pass } = req.body;
  console.log(req.body);
  try {
    const em = await User.findOne({ email: email });
    const pa = em.pass;
    console.log(em, pa);
    if (em == 0) {
      res.json("user not found");
    } else if (pa != pass) {
      res.json("Invalid password");
    } else {
      res.json("Login successfull");
    }
  } catch (err) {
    res.send({ status: "error" });
    console.log(err);
  }
});

app.listen(8000, () => {
  console.log("Server Started On Port 8000");
});
