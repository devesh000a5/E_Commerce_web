const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  cart: [
    {
      id: Number,
      name: String,
      price: Number,
      selectedSize: String,
      selectedColor: {
        hex: String
      },
      image: String,
      quantity: Number
    }
  ],
});

module.exports = mongoose.model("User", userSchema);
