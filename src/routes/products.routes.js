import express from 'express';
import ProductController from '../controllers/product.controller.js';

const router = express.Router();

// Rutas para la API de productos
router.post('/products', ProductController.insertProduct);
router.get('/products', ProductController.getAllProducts);
router.get('/products/:barcode', ProductController.getProductByBarcode);
router.put('/products/:barcode', ProductController.updateProductByBarcode);
router.delete('/products/:barcode', ProductController.deleteProductByBarcode);

export default router;
