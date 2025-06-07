const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { savePreferences, getPreferences } = require('../controllers/preferencesController');

router.post('/', auth, savePreferences);
router.get('/', auth, getPreferences);

module.exports = router;