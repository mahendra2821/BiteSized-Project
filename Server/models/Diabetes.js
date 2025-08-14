const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  email: { type: String, required: true, unique: true },
  status: { type: String, enum: ['Active', 'Inactive', 'Under Review'], default: 'Active' }
}, { timestamps: true });

module.exports =  mongoose.model('Diabetes', clientSchema);
