const Product = require('../models/product.model')


// get api for getting all the data from the mongodb
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// get a specific products details depending upon their id

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);
        res.status(200).json(product);


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// post api to put data to our data base 

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

// Update a product api

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // view the update product from data base 
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({ message: error.message });

    }

};

// Delete product Api
const deleteProduct = async (req, res) => {
    try {

        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product Not found" });

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
    deleteProduct

};
