import express from 'express';
import ContactController from '../controllers/contact.controller.js';

const router = express.Router();

// Rutas para la API de contactos
router.post('/contacts', ContactController.insertContact);
router.get('/contacts', ContactController.getAllContacts);
router.get('/contacts/:id', ContactController.getContactById);
router.put('/contacts/:id', ContactController.updateContactById);
router.delete('/contacts/:id', ContactController.deleteContactById);

export default router;
