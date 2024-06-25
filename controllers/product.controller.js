const Product = require("../models/product.model");

const getProducts = async (req, res) => {
    try {
      const products = await Product.find({});
     
      res.render('sss',  products );
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
    try {
      const { name, quantity, price, image } = req.body;
  
      const product = await Product.create({
        name: name,
        quantity: quantity,
        price: price,
        image: image,
      });
  
      // Si la création du produit est réussie, rediriger vers une autre page
      res.redirect('/success'); // Remplacez '/success' par le chemin de la page de succès souhaitée
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  


const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
