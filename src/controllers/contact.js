import { sendContact } from "../services/contact.js";


export const sendContactController = async (req, res) => {

    const contact = await sendContact(req.body);

    res.status(200).json({
        status: 200,
        message: 'Successful contact request',
        data: contact,
    });
}
