import Product from '../models/products.model.js';

const productDAO = {};

productDAO.getAll = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener todos los productos" };
    }
};

productDAO.getOne = async (bc) => {
    try {
        const product = await Product.findOne({ barcode: bc });
        return product;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener el producto" };
    }
};

productDAO.insertProduct = async (product) => {
    try {
        const productSaved = new Product(product);
        await productSaved.save();
        return { status: "Producto insertado exitosamente" };
    } catch (error) {
        console.error(error);
        return { error: "Error al insertar el producto" };
    }
};

productDAO.updateProduct = async (bc, product) => {
    try {
        const productUpdated = await Product.findOneAndUpdate({ barcode: bc }, product);
        if (productUpdated != null) {
            return { status: "Producto actualizado exitosamente" };
        } else {
            return { error: "No se pudo actualizar el producto" };
        }
    } catch (error) {
        console.error(error);
        return { error: "Error al actualizar el producto" };
    }
};

productDAO.deleteProduct = async (bc) => {
    try {
        const productDelete = await Product.findOneAndDelete({ barcode: bc });
        if (productDelete != null) {
            return { status: "Producto eliminado exitosamente" };
        } else {
            return { error: "No se pudo eliminar el producto" };
        }
    } catch (error) {
        console.error(error);
        return { error: "Error al eliminar el producto" };
    }
};

export default productDAO;
