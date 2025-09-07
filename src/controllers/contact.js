import { sendContactRequest } from "../services/contact.js";

export const sendContactController = async (req, res) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            status: 400,
            message: 'Missing required fields: name, email or message',
        });
    }
    const contact = await sendContactRequest(req.body);

    res.status(200).json({
        status: 200,
        message: 'Successful contact request',
        data: contact,
    });
}
