import Product from '../models/products.model.js'; //intancia del modelo es Product

const productDAO = {};//Objeto 

productDAO.getAll = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        console.error(error);
        return { status: "Error al obtener todos los productos" };
    }
};

productDAO.getOne = async (bc) => {
    try {
        const product = await Product.findOne({ barcode: bc });
        return product;
    } catch (error) {
        console.error(error);
        return { status: "Error al obtener el producto" };
    }
};

productDAO.insertProduct = async (product) => {
    try {
        const productSaved = new Product(product);
        await productSaved.save(); //Para guardar la instancia del modelo product
        return { status: "Producto insertado exitosamente" };
    } catch (error) {
        console.error(error);
        return { status: "Error al insertar el producto" };
    }
};

productDAO.updateProduct = async (bc, product) => {
    try {
        const productUpdated = await Product.findOneAndUpdate({ barcode: bc }, product);
        if (productUpdated != null) {
            return { status: "Producto actualizado exitosamente" };
        } else {
            return { status: "No se pudo actualizar el producto" };
        }
    } catch (error) {
        console.error(error);
        return { status: "Error al actualizar el producto" };
    }
};

productDAO.deleteProduct = async (bc) => {
    try {
        const productDelete = await Product.findOneAndDelete({ barcode: bc });
        if (productDelete != bc) {
            return { status: "Producto eliminado exitosamente" };
        } else {
            return { status: "No se pudo eliminar el producto" };
        }
    } catch (error) {
        console.error(error);
        return { status: "Error al eliminar el producto" };
    }
};

export default productDAO;
