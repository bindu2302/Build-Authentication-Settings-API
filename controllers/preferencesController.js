const Preferences = require('../models/Preferences');

exports.savePreferences = async (req, res) => {
  const { theme, layout } = req.body;

  let pref = await Preferences.findOne({ userId: req.user.id });
  if (pref) {
    pref.theme = theme;
    pref.layout = layout;
    await pref.save();
  } else {
    pref = new Preferences({ userId: req.user.id, theme, layout });
    await pref.save();
  }

  res.json(pref);
};

exports.getPreferences = async (req, res) => {
  const pref = await Preferences.findOne({ userId: req.user.id });
  res.json(pref);
};