import { sendBooking } from "../services/booking.js";

export const sendBookingController = async (req, res) => {

    const booking = await sendBooking(req.body);

    res.status(200).json({
        status: 200,
        message: 'Successful booking request',
        data: booking,
    });
}
