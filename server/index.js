const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// schema
const schemaData = new mongoose.Schema(
  {
    name: String,
    email: String,
    mobile: String,
  },
  {
    timestamps: true,
  }
);

// model
const usermodel = mongoose.model("user", schemaData);

// Get All Data
// http://localhost:3001/
app.get("/", async (req, res) => {
  const data = await usermodel.find({});
  res.json({ success: true, data: data });
});

// Create a Data || Save data in mongoDB
// http://localhost:3001/create
/*
{
  name,
  email,
  mobile
}
*/
app.post("/create", async (req, res) => {
  console.log(req.body);
  const data = new usermodel(req.body);
  await data.save();
  res.send({
    success: true,
    message: "message saved successfully...",
    data: data,
  });
});

// Update Data
// http:localhost:3001/update
/*
{
  id:"respetive id",
  name: "",
  email: "",
  mobile: ""
}
*/
app.put("/update", async (req, res) => {
  console.log(req.body);
  const { _id, ...rest } = req.body;

  console.log(rest);
  const data = await usermodel.updateOne({ _id: _id }, rest);
  res.send({ success: true, message: "data update success", data: data });
});

// Delete Data
// http:localhost:3001/delete/id
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await usermodel.deleteOne({ _id: id });
  res.send({
    success: true,
    message: "Data Deleted Successfully...",
    data: data,
  });
});

mongoose
  .connect("mongodb://localhost:27017/crudOperation")
  .then(() => {
    console.log("Connected to DB...");
    app.listen(PORT, () => {
      console.log("Server is Running...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
