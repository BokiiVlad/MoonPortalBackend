import { setBooking } from "../services/booking.js";

export const setBookingController = async (req, res) => {

    const booking = await setBooking(req.body);

    res.status(200).json({
        status: 200,
        message: 'Successfully found info a booking',
        data: booking,
    });
}
