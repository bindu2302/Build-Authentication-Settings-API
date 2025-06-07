const mongoose = require('mongoose');

const PreferencesSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  theme: String,
  layout: String,
});

module.exports = mongoose.model('Preferences', PreferencesSchema);
