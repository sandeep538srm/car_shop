const Product = require("../model/product_s");
const User = require("../model/user_s");
const Cart = require("../model/cart_s");
const products_all = async (req, res) => {
  try {
    const products = await Product.find();
    console.log("data sent");
    res.json(products);
  } catch (err) {
    console.log("fetch error", err);
    res.json("message", err);
  }
};
const insert_product = async (req, res) => {
  const product = new Product({
    p_id: req.body.p_id,
    p_name: req.body.p_name,
    p_cost: req.body.p_cost,
    p_cat: req.body.p_cat,
    p_desc: req.body.p_desc,
    p_img: req.body.p_img,
  });
  try {
    const savedProduct = await product.save();
    console.log("Product inserted");
    res.send(savedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};
//update product
const update_product = async (req, res) => {
  let p_id = req.body.p_id;
  const product = {
    p_id: req.body.p_id,
    p_name: req.body.p_name,
    p_cost: req.body.p_cost,
    p_cat: req.body.p_cat,
    p_desc: req.body.p_desc,
    p_img: req.body.p_img,
  };
  try {
    const updateProduct = await Product.updateOne({ p_id }, product);
    if (updateProduct.modifiedCount != 0) {
      console.log("Product Updated", updateProduct);
      res.send({ update: "success" });
    } else {
      console.log("Product not updated");
      res.send({ update: "Record Not Found" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

//delete product
const delete_product = async (req, res) => {
  let p_id = req.body.p_id;
  try {
    const deletedproduct = await Product.deleteOne({ p_id });
    if (deletedproduct.deletedCount != 0) {
      console.log("Product Deleted");
      res.send({ delete: "success" });
    } else {
      console.log("Product Not deleted");
      res.send({ delete: "Record Not Found" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
const user_all = async (req, res) => {
  try {
    const user = await User.find();
    console.log("data sent");
    res.json(user);
  } catch (err) {
    console.log("fetch error", err);
    res.json("message", err);
  }
};
const insert_user = async (req, res) => {
  const user = new User({
    u_id: req.body.u_id,
    u_name: req.body.u_name,
    u_pwd: req.body.u_pwd,
    u_u_email: req.body.u_u_email,
    u_addr: req.body.u_addr,
    u_contact: req.body.u_contact,
  });
  try {
    const saveduser = await user.save();
    console.log("Product inserted");
    res.send(saveduser);
  } catch (error) {
    res.status(400).send(error);
  }
};
//update product
const update_user = async (req, res) => {
  let u_id = req.body.u_id;
  const user = {
    u_id: req.body.u_id,
    u_name: req.body.u_name,
    u_pwd: req.body.u_pwd,
    u_u_email: req.body.u_u_email,
    u_addr: req.body.u_addr,
    u_contact: req.body.u_contact,
  };
  try {
    const updateUser = await User.updateOne({ u_id }, user);
    if (updateUser.modifiedCount != 0) {
      console.log("Product Updated", updateUser);
      res.send({ update: "success" });
    } else {
      console.log("Product not updated");
      res.send({ update: "Record Not Found" });
    }
  } catch (error) {
    console.log("error updating");
    res.status(400).send(error);
  }
};

//delete product
const delete_user = async (req, res) => {
  let u_id = req.body.u_id;
  try {
    const deleteduser = await User.deleteOne({ u_id });
    if (deleteduser.deletedCount != 0) {
      console.log("Product Deleted");
      res.send({ delete: "success" });
    } else {
      console.log("Product Not deleted");
      res.send({ delete: "Record Not Found" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
const auth = async (req, res) => {
  let u_name = req.body.u_name;
  let u_pwd = req.body.u_pwd;
  let obj = { u_name, u_pwd };
  try {
    const real = await User.findOne(obj);

    if (real) {
      console.log("success");
      res.send({ user: "success" });
    } else {
      console.log("failure");
      res.send({ user: "fail" });
    }
  } catch (error) {
    console.log("failure");
    res.send({ user: "fail" });
  }
};
module.exports = {
  products_all,
  insert_product,
  update_product,
  delete_product,
  user_all,
  insert_user,
  update_user,
  delete_user,
  auth,
};
////////////////////////////////////////////////////////carts

const cart_all = async (req, res) => {
  try {
    const cart = await Cart.find();
    console.log("data sent");
    res.json(cart);
  } catch (err) {
    console.log("fetch error", err);
    res.json("message", err);
  }
};
const insert_cart = async (req, res) => {
  const cart = new Cart({
    p_id: req.body.p_id,
    u_name: req.body.u_name,
    p_cost: req.body.p_cost,
    p_img: req.body.p_img,
  });
  try {
    const savedcart = await Cart.save();
    console.log("Product inserted");
    res.send(savedcart);
  } catch (error) {
    res.status(400).send(error);
  }
};
//update product
const update_cart = async (req, res) => {
  let p_id = req.body.p_id;
  const cart = {
    p_id: req.body.p_id,
    u_name: req.body.u_name,
    p_cost: req.body.p_cost,
    p_img: req.body.p_img,
  };
  try {
    const updatecart = await Cart.updateOne({ p_id }, cart);
    if (updatecart.modifiedCount != 0) {
      console.log("Product Updated", updatecart);
      res.send({ update: "success" });
    } else {
      console.log("Product not updated");
      res.send({ update: "Record Not Found" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

//delete product
const delete_cart = async (req, res) => {
  let p_id = req.body.p_id;
  let u_name = req.body.u_name;
  let obj = { p_id, u_name };
  try {
    const deletedcart = await Cart.deleteOne({ obj });
    if (deletedcart.deletedCount != 0) {
      console.log("Product Deleted");
      res.send({ delete: "success" });
    } else {
      console.log("Product Not deleted");
      res.send({ delete: "Record Not Found" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = {
  products_all,
  insert_product,
  update_product,
  delete_product,
  user_all,
  insert_user,
  update_user,
  delete_user,
  auth,
  cart_all,
  insert_cart,
  update_cart,
  delete_cart,
};
