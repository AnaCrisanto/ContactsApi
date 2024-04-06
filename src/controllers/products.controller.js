import productDAO from '../dao/products.dao.js';

export const getAll = async (req, res) => {
    try {
        const products = await productDAO.getAll();
        console.log("Todos los productos fueron mostrados:", products);
        res.json(products);
    } catch (error) {
        console.error("Error al mostrar todos los productos:", error);
        res.status(500).json({ error: "Servidor no disponible" });
    }
};

export const getOne = async (req, res) => {
    try {
        const product = await productDAO.getOne(req.params.barcode);
        console.log("Producto mostrado:", product);
        res.json(product);
    } catch (error) {
        console.error("Error al mostrar el producto:", error);
        res.status(500).json({ error: "Servidor no disponible" });
    }
};

export const insertProduct = async (req, res) => {
    try {
        const result = await productDAO.insertProduct(req.body);
        console.log("Producto insertado:", req.body);
        res.json(result);
    } catch (error) {
        console.error("Error al insertar el producto:", error);
        res.status(500).json({ error: "Servidor no disponible" });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const result = await productDAO.updateProduct(req.params.barcode, req.body);
        console.log("Producto actualizado:", req.body);
        res.json(result);
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        res.status(500).json({ error: "Servidor no disponible" });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const result = await productDAO.deleteProduct(req.params.bc);
        console.log("Producto eliminado:", req.params.bc);
        res.json(result);
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        res.status(500).json({ error: "Servidor no disponible" });
    }
};
