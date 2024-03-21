import { Router } from "express";
import { getAll, getOne, insertProduct, updateProduct, deleteProduct } from "../controllers/products.controller.js";

const router = Router();

router.get('/', async (req, res) => {
    const result = await getAll(req, res);
    res.json(result);
});

router.get('/:barcode', async (req, res) => {
    const result = await getOne(req, res);
    res.json(result);
});

router.post('/', async (req, res) => {
    const result = await insertProduct(req, res);
    res.json(result);
});

router.put('/:barcode', async (req, res) => {
    const result = await updateProduct(req, res);
    res.json(result);
});

router.delete('/delete/:bc', async (req, res) => {
    const result = await deleteProduct(req, res);
    res.json(result);
});

export default router;
