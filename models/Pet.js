const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name for the pet'],
      maxLength: [50, 'Name cannot be more than 50 characters'],
    },
    age: {
      type: Number,
      required: [true, 'Please enter an age'],
    },
    type: {
      type: [String],
      required: true,
      enum: ['Dog', 'Cat', 'Fish', 'Turtle', 'Hamster', 'Bird', 'Rabbit'],
    },
    breed: {
      type: String,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Pet', PetSchema);
