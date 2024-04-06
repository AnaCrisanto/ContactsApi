import Product from '../models/products.model.js';

const ProductDAO = {
  async insert(productData) {
    return await Product.create(productData);
  },

  async getAll() {
    return await Product.find();
  },

  async getByBarcode(barcode) {
    return await Product.findOne({ barcode });
  },

  async updateByBarcode(barcode, newData) {
    return await Product.findOneAndUpdate({ barcode }, newData, { new: true });
  },

  async deleteByBarcode(barcode) {
    return await Product.deleteOne({ barcode });
  }
};

export default ProductDAO;
