const Pet = require('../models/Pet');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const ErrorResponse = require('../utils/errorResponse');

// @desc Get all pets
// GET /api/v1/pets
// GET /api/v1/owners/:ownerId/pets
// Public
exports.getPets = asyncHandler(async (req, res, next) => {
  // Checking if ownerId has been sent as a parameter
  if (req.params.ownerId) {
    const pets = await Pet.find({ owner: req.params.ownerId });

    return res.status(200).json({
      success: true,
      count: pets.length,
      data: pets,
    });
  } else {
    const allPets = await Pet.find({});
    res.status(200).json({
      success: true,
      data: allPets,
      count: allPets.length,
    });
  }
});

// @desc Get a single pet
// GET /api/pets/:id
// Public
exports.getPet = asyncHandler(async (req, res, next) => {
  const pet = await Pet.findById(req.params.id);

  if (!pet) {
    return next(new ErrorResponse('Pet not found', 404));
  }
  res.status(200).json({
    success: true,
    data: pet,
  });
});

// @desc Get a single pet
// GET /api/pets/:id/owner
// Public
exports.getOwnerOfPet = asyncHandler(async (req, res, next) => {
  const pet = await Pet.findById(req.params.id);

  if (!pet) {
    return next(new ErrorResponse('Pet not found', 404));
  }

  const ownerId = pet.owner.toString();

  const ownerOfPet = await User.findById(ownerId);

  return res.status(200).json({
    success: true,
    data: ownerOfPet,
  });
});

// @desc Create a pet
// POST /api/v1/pets
// Private
exports.createPet = asyncHandler(async (req, res, next) => {
  req.body.owner = req.user.id;
  const pet = await Pet.create(req.body);

  res.status(201).json({
    success: true,
    message: 'Created a pet',
    data: pet,
  });
});

// @desc Update a pet
// PUT /api/v1/pets/:id
// Private
exports.updatePet = asyncHandler(async (req, res, next) => {
  let pet = await Pet.findById(req.params.id);

  if (!pet) {
    return next(new ErrorResponse('Pet to be updated not found', 404));
  }

  if (req.user.id !== pet.owner.toString()) {
    return next(new ErrorResponse('Not authorized to update the pet', 403));
  }

  pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });

  res.status(200).json({
    success: true,
    message: 'Updated a pet',
    data: pet,
  });
});

// @desc Delete a pet
// DELETE /api/v1/pets/:id
// Private
exports.deletePet = asyncHandler(async (req, res, next) => {
  const pet = await Pet.findById(req.params.id);

  if (!pet) {
    return next(new ErrorResponse('Pet to be deleted not found', 404));
  }
  if (req.user.id !== pet.owner.toString()) {
    return next(new ErrorResponse('Not authorized to delete the pet', 403));
  }
  pet.remove();

  res.status(200).json({
    success: true,
    message: 'Pet has been deleted',
  });
});
