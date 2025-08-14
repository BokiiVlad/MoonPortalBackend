import createHttpError from "http-errors";
import { ScheduleCollection } from "../db/models/schedule.js";
import { BookingCollection } from "../db/models/booking.js";

export const setBooking = async (data) => {
  const { date, time, sessionType, name, email, message } = data;


  if (!date || !time || !sessionType || !name || !email) {
    throw createHttpError(404, 'Missing required fields');
  }

  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  const dayEnd = new Date(normalized.getTime() + 86399999);


  const schedule = await ScheduleCollection.findOne({
    date: { $gte: normalized, $lte: dayEnd },
    isWorking: true,
  }).select('_id availableSlots');

  if (!schedule) {
    throw createHttpError(404, 'Schedule not found or non-working day');
  }
  if (!schedule.availableSlots.includes(time)) {
    throw createHttpError(409, 'Selected time is not available');
  }

  await ScheduleCollection.findOneAndUpdate({
    _id: schedule._id
  }, {
    $pull: { availableSlots: time },
  })

  const bookingCreate = await BookingCollection.create({
    date: normalized,
    time,
    sessionType,
    name,
    email,
    message,
  })
  return bookingCreate;
}
