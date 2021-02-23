const asyncHandler = require('express-async-handler');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

// @desc Get all owners
// GET /api/v1/owners
// Public
exports.getOwners = asyncHandler(async (req, res, next) => {
  const owners = await User.find({});
  res.status(200).json({
    success: true,
    count: owners.length,
    data: owners,
  });
});

// @desc Get a single owner
// GET /api/v1/owners/:id
// Public
exports.getOwner = asyncHandler(async (req, res, next) => {
  const owner = await User.findById(req.params.id);

  if (!owner) {
    return next(new ErrorResponse('Owner does not exist', 404));
  }
  res.status(200).json({
    success: true,
    data: owner,
  });
});
