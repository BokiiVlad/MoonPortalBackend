import { sendBooking } from "../services/booking.js";

export const sendBookingController = async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            status: 400,
            message: "Missing required fields: name or email",
        });
    }

    const booking = await sendBooking(req.body);

    res.status(200).json({
        status: 200,
        message: 'Successful booking request',
        data: booking,
    });
}
