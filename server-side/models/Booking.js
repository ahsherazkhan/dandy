import { Schema, model } from 'mongoose';

// Define the schema for the booking model
const bookingSchema = new Schema({
  selectedDate: {
    type: String,
    required: true
  },
  selectedTime: {
    type: String,
    required: true
  },
});

// Define and export the Booking model
model('Booking', bookingSchema);