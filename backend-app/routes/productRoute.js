import express from 'express';
import { showProducts, createProduct, updateProduct, deleteProduct } from '../controllers/storeController.js'; // Adjust path if needed

const router = express.Router();

// GET /products - Show all products
router.get('/', showProducts);

// POST /products - Create a new product
router.post('/', createProduct);

// PUT /products/:id - Update a product by ID
router.put('/:id', updateProduct);

// DELETE /products/:id - Delete a product by ID
router.delete('/:id', deleteProduct);

export { router as productRouter };