const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
    default: "",
  },
  suite: {
    type: String,
    required: true,
    default: "",
  },
  city: {
    type: String,
    required: true,
    default: "",
  },
  zipcode: {
    type: String,
    required: true,
    default: "",
  },
});

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: '',
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    default: "",
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: addressSchema,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  company: {
    type: companySchema,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;