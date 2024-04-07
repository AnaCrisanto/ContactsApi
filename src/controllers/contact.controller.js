import ContactDAO from '../dao/contact.dao.js';

const ContactController = {
  async insertContact(req, res) {
    try {
      const contact = await ContactDAO.insert(req.body);
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAllContacts(req, res) {
    try {
      const contacts = await ContactDAO.getAll();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getContactById(req, res) {
    try {
      const contact = await ContactDAO.getById(req.params.id);
      if (contact) {
        res.json(contact);
      } else {
        res.status(404).json({ message: 'Contacto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateContactById(req, res) {
    try {
      const contact = await ContactDAO.updateById(req.params.id, req.body);
      if (contact) {
        res.json(contact);
      } else {
        res.status(404).json({ message: 'Contacto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteContactById(req, res) {
    try {
      const result = await ContactDAO.deleteById(req.params.id);
      if (result.deletedCount > 0) {
        res.json({ message: 'Contacto eliminado correctamente' });
      } else {
        res.status(404).json({ message: 'Contacto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default ContactController;
