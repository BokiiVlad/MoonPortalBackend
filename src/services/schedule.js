import { ScheduleCollection } from "../db/models/schedule.js";
import filterPastSlots from "../utils/filterPastSlots.js";

const getSchedule = async (dateString) => {

    const start = new Date(dateString);
    start.setHours(0, 0, 0, 0);

    const end = new Date(dateString);
    end.setHours(23, 59, 59, 999);

    const schedule = await ScheduleCollection.findOne({
        date: { $gte: start, $lte: end },
        isWorking: true,
    }).select('date availableSlots');

    console.log("dateString", dateString);

    if (!schedule) return null;

    const freeSlots = filterPastSlots(schedule.availableSlots, start);


    return {
        date: schedule.date.toISOString().split('T')[0],
        slots: freeSlots,
    };
};

export default getSchedule;
