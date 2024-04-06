import ProductDAO from '../dao/product.dao.js';

const ProductController = {
  async insertProduct(req, res) {
    try {
      const product = await ProductDAO.insert(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAllProducts(req, res) {
    try {
      const products = await ProductDAO.getAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getProductByBarcode(req, res) {
    try {
      const product = await ProductDAO.getByBarcode(req.params.barcode);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateProductByBarcode(req, res) {
    try {
      const product = await ProductDAO.updateByBarcode(req.params.barcode, req.body);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteProductByBarcode(req, res) {
    try {
      const result = await ProductDAO.deleteByBarcode(req.params.barcode);
      if (result.deletedCount > 0) {
        res.json({ message: 'Producto eliminado correctamente' });
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default ProductController;
