const { userobj, productobj } = require("../models/users");

//registration
const registration = async (req, res) => {
  try {
    const newUser = new userobj({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const result = await newUser.save();
    res.send("registered");
  } catch (err) {
    res.send(err.message);
  }
};

// login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userobj.findOne({ email, password });
    res.send("login success");
  } catch (err) {
    res.send(err.message);
  }
};

//allproducts
const products = async (req, res) => {
  try {
    const allProducts = await productobj.find();
    res.json([...allProducts]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//specific product

const productid = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await productobj.findOne({ price: { $eq: id } });
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

const productByCategory = async (req, res) => {
  try {
    const catgry = req.params.category;
    const result = await productobj.find({ category: { $eq: catgry } });
    res.json(result);
  } catch (error) {
    res.send(error.message);
  }
};



///add product to cart
const addToCart = async (req, res) => {
  try {
    const userId = req.params.id;
    const addedProductId = req.body.id;
    const user = await userobj.updateOne({ _id:userId },{$push:{cart:addedProductId}});
    res.send("success");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//showing cart
const showCart = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userobj.findOne({ _id: userId}).populate('cart');
    console.log(user);
    res.json(user.cart)
  } catch (error) {
    res.send(error.message);
  }
};

const addWishList = async (req, res) => {
  try {
    const userId = req.params.id;
    const addedProductId = req.body.id;
    const user = await userobj.updateOne({ _id:userId },{$push:{wishlist:addedProductId}});
    res.send("success");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showWishList = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userobj.findOne({ _id: userId}).populate('wishlist');
    console.log(user);
    res.json(user.wishlist)
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  registration,
  login,
  products,
  productid,
  productByCategory,
  addToCart,
  showCart,
  addWishList,
  showWishList
};



