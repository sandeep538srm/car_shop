const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  p_id: Number,
  u_name: String,
  p_image: String,
  p_cost: String,
});
module.exports = mongoose.model("Cart", cartSchema);
