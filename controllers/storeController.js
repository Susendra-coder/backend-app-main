import productModel from "../models/productModel.js";

const showProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.render("store/products", { products });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}

export { showProducts };