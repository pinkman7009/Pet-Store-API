const express = require('express');

const router = express.Router();

const { getOwners, getOwner } = require('../controllers/ownerController');

// Include other resource routers
const petRoutes = require('./petRoutes');

// Re-route into other resource routers
router.use('/:ownerId/pets', petRoutes);

router.route('/').get(getOwners);
router.route('/:id').get(getOwner);

module.exports = router;
