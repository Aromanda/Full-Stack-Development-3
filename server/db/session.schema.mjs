import mongoose from 'mongoose';

// Définition du schéma
const sessionSchema = new mongoose.Schema({
  session_token: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  }
});

// Création du modèle à partir du schéma
const Session = mongoose.model('Session', sessionSchema);

// Export du modèle
export default Session;


