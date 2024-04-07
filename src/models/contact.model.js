import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String
  },
  mobile: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  address: {
    type: String
  },
  photo: {
    type: String // Aquí se almacenará la URL de la foto en la BD
  }
}
,
    {versionKey: false}

);
const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
