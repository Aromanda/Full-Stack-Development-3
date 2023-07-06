import mongoose from 'mongoose';

// Définition du schéma utilisateur
const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    trim: true,
    required: true
  },
  last_name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
}, { timestamps: true }); // Ajouter des horodatages au schéma

// Exportation du modèle utilisateur
export default mongoose.model('User', UserSchema);
