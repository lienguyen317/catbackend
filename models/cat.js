const { Schema, model } = require("mongoose");
const mongoose = require("../db/connection");
const Owner = require("./owner");

//CAT SCHEMA
const catSchema = new Schema(
  {
    name: String,
    age: Number,
    img: String,
  },
  { timestamps: true }
);

//DOG MODEL
const Cat = model("Cat", catSchema);

//EXPORT MODEL
module.exports = Cat;