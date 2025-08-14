import { model, Schema } from 'mongoose';

const bookingSchema = new Schema({

    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
        validate: {
            validator: function (slot) {
                return /^\d{2}:\d{2}$/.test(slot);
            },
            message: 'The slot must be in HH:mm format.',
        },
    },
    sessionType: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /\S+@\S+\.\S+/.test(v);
            },
            message: 'Invalid email format.'
        }
    },
    message: {
        type: String,
    },
}, {
    timestamps: true
});


bookingSchema.index({ date: 1, time: 1 }, { unique: true });

export const BookingCollection = model('booking', bookingSchema);
