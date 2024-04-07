import Contact from '../models/contact.model.js';

const ContactDAO = {
  async insert(contactData) {
    const contact = new Contact(contactData);
    return await contact.save();
  },

  async getAll() {
    return await Contact.find();
  },

  async getById(id) {
    return await Contact.findById(id);
  },

  async updateById(id, contactData) {
    return await Contact.findByIdAndUpdate(id, contactData, { new: true });
  },

  async deleteById(id) {
    return await Contact.deleteOne({ _id: id });
  }
};

export default ContactDAO;
