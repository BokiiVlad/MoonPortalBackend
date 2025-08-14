import getSchedule from "../services/schedule.js";


export const getScheduleController = async (req, res) => {
    const dateParam = req.query.date;

    if (!dateParam) {
        return res.status(400).json({
            status: 400,
            message: 'You need to pass the date parameter.'
        })
    }

    const schedule = await getSchedule(dateParam);
    if (!schedule) {
        return res.status(404).json({
            status: 404, message: 'Schedule not found or non-working day'
        });
    }

    res.status(200).json({
        status: 200,
        message: 'Schedule information successfully found',
        data: schedule,
    });

};
