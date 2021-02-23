const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  getPets,
  getPet,
  getOwnerOfPet,
  createPet,
  updatePet,
  deletePet,
} = require('../controllers/petController');

// Protect middleware added to only access to only authenticated users
const { protect } = require('../middleware/auth');

router.route('/').get(getPets).post(protect, createPet);
router.route('/:id/owner').get(getOwnerOfPet);
router
  .route('/:id')
  .get(getPet)
  .put(protect, updatePet)
  .delete(protect, deletePet);

module.exports = router;
